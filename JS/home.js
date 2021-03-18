//get references
let kinectlogo = document.getElementById("kinectlogo");
let opportunities = document.getElementById("opportunities");
let slogan = document.getElementById("slogan");
let opportunity = document.getElementsByClassName("opportunity");

opportunities.style.display = "none"
slogan.style.display = "none"

// mouse functions for go back button
kinectlogo.onclick = function(){
    opportunities.style.display = "flex";
    slogan.style.display = "block";
    kinectlogo.style.display = "none";
}

// for(let i=0; i<opportunity.length; i++){
//     opportunity[i].onmouseover = function(){
//         opportunity[i].style.backgroundColor = "#FDB927"        
//     }
        
//     opportunity[i].onmouseout = function(){
//         opportunity[i].style.backgroundColor = "#56CCF2"
//     }
// }