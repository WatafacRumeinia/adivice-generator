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

