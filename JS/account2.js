//progress bar
const progressBarFull = document.getElementById('progressBarFull');

let questionCounter = 33;
 
const MAX_QUESTIONS = 95;

 progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

