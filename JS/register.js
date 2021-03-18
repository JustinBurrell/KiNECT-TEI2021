//get references
let welcome = document.getElementById("welcome")
let button = document.getElementsByClassName("option");
let container = document.getElementsByClassName("container");
let backBtn = document.getElementsByClassName("backBtn");

container[0].style.display = "none"
container[1].style.display = "none"
container[2].style.display = "none"

//main buttons
button[0].onclick = function(){
    welcome.style.display = "none";
    container[0].style.display = "none"
    container[1].style.display = "block"
    container[2].style.display = "none"
}

button[1].onclick = function(){
    welcome.style.display = "none"
    container[0].style.display = "block"
    container[1].style.display = "none"
    container[2].style.display = "none"
}

button[2].onclick = function(){
    welcome.style.display = "none";
    container[0].style.display = "none"
    container[1].style.display = "none"
    container[2].style.display = "block"
}

//back buttons
backBtn[0].onclick = function(){
    welcome.style.display = "block"
    container[0].style.display = "none"
    container[1].style.display = "none"
    container[2].style.display = "none"
}

backBtn[1].onclick = function(){
    welcome.style.display = "block"
    container[0].style.display = "none"
    container[1].style.display = "none"
    container[2].style.display = "none"
}

backBtn[2].onclick = function(){
    welcome.style.display = "block"
    container[0].style.display = "none"
    container[1].style.display = "none"
    container[2].style.display = "none"
}
