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
