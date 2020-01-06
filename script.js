var timer=document.getElementById("timer");
var highScore=document.getElementById("highScore");
var submitButton=document.getElementById("submitBtn");
var startBtn = document.getElementById("startButton");
var score=document.getElementById("score");
var question=document.getElementById("question");
var choices=document.querySelectorAll(".choice");
var answerChoices=document.querySelectorAll(".answerChoices")[0];
var feedback=document.getElementById("feedback")
var userInput = document.getElementById("userName")

var timeLeft=15*questions.length;
console.log(timeLeft);

function startTimer() {
   document.getElementById("startPage").classList.add('d-none');
   document.getElementById("questionPage").classList.remove('d-none');
   generateQuestions();
   settimer();
}

startBtn.addEventListener("click", startTimer);
answerChoices.addEventListener("click", handleClick);



var questionNumber=0;
function settimer(){
    var countdown = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time: " +  timeLeft;
        if (timeLeft < 0 || questionNumber >= questions.length) {
            clearInterval(countdown);
            setTimeout(submitScore, 1000);
    }
    }, 1000);
}
function generateQuestions(){

    
    question.textContent=questions[questionNumber].title;
    
    console.log(questions[questionNumber].title);
    choices[0].textContent = questions[questionNumber].choices[0];
    choices[1].textContent = questions[questionNumber].choices[1];
    choices[2].textContent = questions[questionNumber].choices[2];
    choices[3].textContent = questions[questionNumber].choices[3];
 

}
function hideFeedback(){
    var feedback= document.getElementById("feedback");
    feedback.style.display='none'
}
function handleClick(event){
    let answerindex = questionNumber;
    if(questionNumber<questions.length)
    {
        if(questions[answerindex].answer===event.target.textContent)
        {
            feedback.textContent="Your answer is correct!!"
            setTimeout(hideFeedback,1000);
            feedback.removeAttribute('style');
        }
        else{
            feedback.textContent="Your answer is wrong!!"
            setTimeout(hideFeedback,1000);
            timeLeft = timeLeft - 15;
            feedback.removeAttribute('style');
        }
        
        questionNumber++;
        generateQuestions();
    }
 }

 function submitScore() {
    document.getElementById("questionPage").classList.add('d-none');
    document.getElementById("finalPage").classList.remove('d-none');
    score.textContent = "Your final score is " + timeLeft + "!!";
} 


function displayScore(){
  
    var newScore = {
        name: userInput.value,
        score: timeLeft,
    };
    var highScores=[];
    highScores.push(newScore)
    localStorage.setItem("highScores", JSON.stringify(highScores));
    
    console.log(highScores);
}
submitButton.addEventListener("click",displayScore);
