var restartBtn = document.querySelector("button.restartBtn");
var cleartheButton= document.querySelector("button.clearButton");
var scoresList = document.getElementById("scores");

var highscores = JSON.parse(localStorage.getItem("highScores") || "[]");

for (var j = 0; j < highscores.length; j++) {
    var newList = document.createElement("li");
    newList.textContent = highscores[j].name + " : " + highscores[j].score;
    console.log(newList);
    scoresList.appendChild(newList)
}

cleartheButton.addEventListener("click", function () {
    localStorage.clear();
    // localStorage.removeItem(highscores);
    window.location.reload();

});
restartBtn.addEventListener("click", function () {
    history.back();
 });
