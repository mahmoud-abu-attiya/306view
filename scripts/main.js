let specialSection = document.querySelector(".special-section")
let normalSection = document.querySelector(".normal-section")

let specialbtn = document.querySelector(".special-btn")
let normalbtn = document.querySelector(".normal-btn")

specialSection.addEventListener("click" , ()=>{
   specialbtn.click();
})
normalSection.addEventListener("click" , ()=>{
   normalbtn.click();
})