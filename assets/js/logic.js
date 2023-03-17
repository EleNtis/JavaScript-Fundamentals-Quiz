let timeLeft = questions.length * 10;
let timer;
let questionIndex = 0;

//select the html elements
let startButton = document.querySelector("#start");
let quizQuestions = document.querySelector("#questions");
let timerInterval = document.querySelector("#time");
let submitButton = document.querySelector("#submit");
let quizChoices = document.querySelector("#choices");
let initials = document.querySelector("#initials");
let feedback = document.querySelector("#feedback");

//sound effects variables
let rightSoundEffect = new Audio ("assets/sfx/correct.wav");
let wrongSoundEffect = new Audio ("assets/sfx/incorrect.wav");



clock();



//functions for the logic of the quiz
function questionClick(){
    if(this.value !== questions[questionIndex].answer){
        timeLeft -= 15;
    if(timeLeft < 0){
        timeLeft = 0;
    }

    timerInterval.textContent = timeLeft;
    
    feedback.textContent = "Not quite"
    wrongSoundEffect.play();
    } else {
    feedback.textContent = "Correct!"
    rightSoundEffect.play();
    }

}

function getQuestion(){
    let currentQuestion  = questions[questionIndex];
    let questionTitle = document.querySelector("#question-title");
    questionTitle.textContent = currentQuestion.text ; 
    quizChoices.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, index) {
        let choiceBtn = document.createElement("button");

        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = `${index + 1}. ${choice}`
        choiceBtn.addEventListener("click", questionClick);
        quizChoices.appendChild(choiceBtn);
    })
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
