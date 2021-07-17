//progress bar
const progressBarFull = document.getElementById('progressBarFull');

let questionCounter = 30;
 
const MAX_QUESTIONS = 100;

 progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

