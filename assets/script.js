//Acceptance Criteria

//GIVEN I am taking a code quiz
console.log("lets take a aquiz!!!!");
//onfirm("Welcome, Quizard! let's take a quiz!!! Hope you learned your history!!");
//alert("press the START button to begin");

//add global variables

containerHTML = document.getElementById("quiz-container");
container2HTML = document.getElementById("question-container");
timerHTML = document.getElementById("time-set");
startHTML = document.getElementById("start-btn");
nextHTML = document.getElementById("next-btn");
buttonHTML = document.getElementById("answer-btns");
button1HTML = document.getElementById("answer-btn1");
button2HTML = document.getElementById("answer-btn2");
button3HTML = document.getElementById("answer-btn3");
button4HTML = document.getElementById("answer-btn4");
scoreHTML = document.getElementById("score-div");
scoreButton = document.getElementById("get-score");

var wins = 0;
var losses = 0;
var score = [];

var secondsLeft = 50;
var gameEnded = true;


var questions = ["Who was the first US president?", "Who won the Civil War?", "What is the capital of the United States?", "How often does a presidential election occur?"];
//next, a  variable which contains ALL posible answers for each question 
var options = ["John Adams", "George Washington", "Alexander Hamilton", "John Hancock", "The Union", "The Wild West", "The American Indians", "The Confederacy", "Boston, MA", "Jamestown, VA", "Washington, DC", "New York, NY", "Every 4 years", "Every 6 years", "Every 2 years", "Every 3.5 years"];
//create an array for ONLY the four possible correct answers
var correctAnswers = ["George Washington", "The Union", "Washington, DC", "Every 4 years"];
var i = 0;
var j = 0;
var k = 1;
var l = 2;
var m = 3;


var time = 60; //100 seconds
var win = 0; //reset status
var losses = 0; //reset status
//var start = alert("lets begin!!!");
console.log("start");

//hide the time-set
//scoreHTML.style.display = "none";
//initialize event listener for start button to start game
//WHEN I press START, I want the question AND the question/answer text box to appear on the screen
startHTML.addEventListener("click", function hide() {
    //hide unnecessary buttons
    startHTML.style.visibility = "hidden";
    // scoreButton.innerHTML.style.visibility = "hidden";
    container2HTML.innerHTML = questions[i];
    setTime();


    console.log("president question" + questions[i]);

    button1HTML.innerHTML = options[0];
    button2HTML.innerHTML = options[1]; //George Washington = correct answer
    button3HTML.innerHTML = options[2];
    button4HTML.innerHTML = options[3];

    buttonHTML.addEventListener("click", function(event) {
        var answer = event.target;
        //display Civil War question
        console.log("First President Question" + questions[i]);
        //add event listener for the answers button!!!
        if (answer.matches("#answer-btn2") === true) {
            //console.log(options[1] + " YAYYY that is the correct answer!!")
        } else {

            //console.log("Boo hoo to you! That was wrong! The correct answer is " + options[1])
        }
    })
});


//add event listener for the next button
nextHTML.addEventListener("click", function(next) {
    i++;
    container2HTML.innerHTML = questions[i];
    j += 4;
    k += 4;
    l += 4;
    m += 4;
    button1HTML.innerHTML = options[j]; // The Union: correct answer
    button2HTML.innerHTML = options[k];
    button3HTML.innerHTML = options[l];
    button4HTML.innerHTML = options[m];
    //     //This is Question 2: Civil War
    buttonHTML.addEventListener("click", function(event) {
        var gameEnded = true;
        var answer = event.target;
        //         //display Civil War question
        //console.log("this question" + questions[i]);
        //         //add event listener for the answers button!!!
        if (((answer.matches("#answer-btn1")) && (button1HTML.innerHTML == correctAnswers[1])) ||
            ((answer.matches("#answer-btn3")) && (button3HTML.innerHTML == correctAnswers[2])) ||
            ((answer.matches("#answer-btn1")) && (button1HTML.innerHTML == correctAnswers[3]))) {
            console.log("user clicked the correct button!!!")
                //console.log(correctAnswers[1] + " YAYYY that is the correct answer!!")
        } else {
            console.log("user clicked the wrong button!!!")
                //console.log("Boo hoo to you! That was wrong! The correct answer is " + options[j + 4])
        }
    })
    if (questions.length == i) {
        clearInterval(timerInterval);
        //container2HTML.style = $("#quiz-container").hide
        timerHTML.textContent = "Congratulations Quizard! You've finished!"
    }

});
var secondsLeft = 50;
var timerInterval = "";
//writing the timer function once user clicks "start" (see above)
function setTime() {
    console.log("counting down!!")
        //sets interval for the timer to begin
    timerInterval = setInterval(function() {
        //interval is going down by 1 second
        //setting the text thats going to show on the webpage
        if (secondsLeft > 1) {
            //stops the timer at set interval once time runs out
            timerHTML.textContent = secondsLeft + " seconds left for Quizard to complete!!"
            secondsLeft--;
            //console.log("times up!")
            //calls function to send the timeout message:
        } else {
            timerHTML.textContent = "";
            clearInterval(timerInterval);
            sendMessage();
        }
        //timer increment of 1000 milliseconds (1 second)
    }, 1000);
}


//the timer needs to know to STOP counting down when the last question is complete
//when time gets to 0 we're gonna display this message:
function sendMessage() {
    timerHTML.textContent = "TIMES UP, QUIZARD!!!";
}

//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my  time and my score

//creating key and value pairs for local storage
var score = "";
var timeSet = "";
var submitButton = document.getElementById("get-score");

// function displayScore(type, message) {
//     scoreHTML.textContent = message;
//     scoreHTML.setAttribute("class", type);
// }
//setting the variables to get to storage;
function renderLastRegistered() {
    var score = localStorage.getItem("get-score");
    var timeSet = localStorage.getItem("time-set");
    //if there's nothing in it, return
    if (!score || !timeSet) {
        return;
    }

    userScoreSpan.textContent = score;
    userTimeSetSpan.textContent = timeSet;
}
//add event listener to the "get my score" button
scoreButton.addEventListener("click", function() {
            //show the time-set  when the user clicks
            scoreHTML.textContent = "Congrats for finishing! Your score is  " + secondsLeft;
            scoreHTML.style.display = "";
            console.log(scoreHTML);


 scoreButton.addEventListener("click", function(event) {
     event.preventDefault();

                var myScore = {
                score: secondsLeft.value,
         }
     //get the item into local storage;
    localStorage.setItem(JSON.stringify("myScore", secondsLeft));
    //alert(localStorage.getItem("score"));
        event.preventDefault();
        console.log(localStorage);
        renderMessage();

         });

     function renderMessage(event) {
         
        var lastScore = JSON.parse(localStorage.getItem("myScore", secondsLeft));
        event.preventDefault();
        //if lastScore has a value in it,
        // if (lastScore !== null) {
        //     document.getElementById("saved-name").innerHTML = lastGrade.student;
        //     document.getElementById("saved-grade").innerHTML = lastGrade.grade;
        //     //scoreHTML.textContent = myScore.value + "is" + secondsLeft.value
                    //event.preventDefault();
                }});