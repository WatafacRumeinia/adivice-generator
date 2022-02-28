"use strict"
const btn=document.querySelector(".dice-container")
const adviceNr=document.querySelector(".advice")
const adviceText=document.querySelector(".quotes")
const apiRequest="https://api.adviceslip.com/advice"

btn.addEventListener("click",()=>{
    fetch(apiRequest, {cache:"no-cache"})
    .then((response)=>response.json())
    .then((response) => {
        let data=response.slip;
        let nr =data.id;
        let adv=data.advice;
        adviceNr.innerHTML=`ADVICE # ${nr}`
        adviceText.innerHTML=adv;
    })
})

// "use strict";

// const diceBtn = document.querySelector(".dice-container");
// const adviceNumber = document.querySelector(".advice");
// const adviceText = document.querySelector(".quotes");
// const apiUrl = "https://api.adviceslip.com/advice";

// //Button click event
// diceBtn.addEventListener("click", () => {
//   //Request Data
//   fetch(apiUrl, {cache: "no-cache"})
//     .then((response) => response.json())
//     .then((response) => {
//       let data = response.slip;
//       let dataId = data.id;
//       let dataAdvice = data.advice;
//       //Inject to DOM
//       adviceNumber.innerHTML = `advice # ${dataId}`;
//       adviceText.innerHTML = dataAdvice;
//     });
// });
