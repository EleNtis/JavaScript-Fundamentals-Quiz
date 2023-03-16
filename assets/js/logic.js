let timeLeft = questions.length * 10;
let timer;
let questionIndex = 0;

//select the html elements
let startButton = document.querySelector("#start");
let quizQuestions = document.querySelector("#questions");
let timerInterval = document.querySelector("#time");
let submitButton = document.querySelector("#submit");
let choices = document.querySelector("#choices");
let initials = document.querySelector("#initials");
let feedback = document.querySelector("#feedback");

//sound effects variables
let rightSoundEffect = new Audio ("assets/sfx/correct.wav");
let wrongSoundEffect = new Audio ("assets/sfx/incorrect.wav");



clock();


//functions for the logic of the quiz
function getQuestion(){
    let currentQuestion  = questions[questionIndex];
}


function endQuiz(){
clearInterval(timer);

let endScreen = document.querySelector("#end-screen");
endScreen.removeAttribute("class");

quizQuestions.setAttribute("class", "hide");
}
 

function clock(){
    timeLeft--;
    timerInterval.textContent = timeLeft;

    if(timeLeft <= 0){
        endQuiz();
    }

}

function startQuiz(){
    let startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");
//remove the class hide from the questions
    quizQuestions.removeAttribute("class");
    //set up the timer
    timer = setInterval(clock, 1000)
    timerInterval.textContent = timeLeft;
    getQuestion();
}

function saveScore(){

}




//events
startButton.addEventListener("click", startQuiz);
