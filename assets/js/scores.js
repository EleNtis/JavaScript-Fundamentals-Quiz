
function printScores(){
    let highScores = JSON.parse(localStorage.getItem("highscores"));
    

    highScores.forEach(function(score){
    let li = document.createElement("li");
        li.textContent =  `${score.initials} - ${score.score}`
        let ol = document.querySelector("#highscores");
        ol.appendChild(li);
    });
}
    
    
    function clearScores(){
        localStorage.removeItem("highscores");
        window.location.reload();
    
    }
    
    let clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", clearScores);

    printScores();