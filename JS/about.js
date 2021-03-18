//get references
let images = document.getElementsByClassName("image");
let imagesText = document.getElementsByClassName("innergallery");

//hover functions for image 1
images[0].onmouseover = function(){
    images[0].style.opacity = "0.5";
    imagesText[0].innerHTML = "Justin Burrell";
}

images[0].onmouseout = function(){
    images[0].style.opacity = "1";
    imagesText[0].innerHTML = "";
}

images[0].onclick = function(){
    window.open('https://www.linkedin.com/in/justin-burrell-51186a18b/', '_blank');
    window.open('https://www.linkedin.com/in/justin-burrell-51186a18b/');
}

//hover functions for image 2
images[1].onmouseover = function(){
    images[1].style.opacity = "0.5";
    imagesText[1].innerHTML = "Herbet Toler";
}

images[1].onmouseout = function(){
    images[1].style.opacity = "1";
    imagesText[1].innerHTML = "";
}