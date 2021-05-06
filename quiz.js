const AnswerCount = 2;

var questionNumber = -1;
var score = 0;

const qustionElement = document.getElementById("quest");
const nextButton = document.getElementById("nextButton");

var AnswersInteract = true;


function next()
{
    questionNumber++;
    if (questionNumber==questions.length)
    {
        openScoreScreen();
        return;
    }
    qustionElement.innerHTML = questions[questionNumber].Question;
    nextButton.style.opacity = "0";
    nextButton.style.pointerEvents = "none";
    AnswersInteract = true;
    resetButtons();
}

next();



function clickedAnswer(answer)
{
    if (!AnswersInteract)
    {
        return;
    }

    if (answer == questions[questionNumber].Answer)
    {
        score++;
    }
    else
    {
        document.getElementById("Answer" + answer).style.backgroundColor = "#ff120f";
        document.getElementById("Answer" + answer).style.transform = "scale(0.95)";
        document.getElementById("Answer" + answer).style.opacity = "0.7";
    }
    
    document.getElementById("Answer" + questions[questionNumber].Answer).style.backgroundColor = "#5cff5c";
    document.getElementById("Answer" + questions[questionNumber].Answer).style.transform = "scale(1.05)";
    document.getElementById("Answer" + answer).style.opacity = "0.8";

    nextButton.style.opacity = "1";
    nextButton.style.pointerEvents = "auto";
    AnswersInteract = false;
}




function resetButtons()
{
    for (answer = 1; answer != AnswerCount+1; answer++)
    {
        document.getElementById("Answer" + answer).style.backgroundColor = "transparent";
        document.getElementById("Answer" + answer).style.transform = "scale(1)";
        document.getElementById("Answer" + answer).style.opacity = "1";
    }
   
}

function openScoreScreen()
{
    document.getElementById("score").style.opacity = "1";
    document.getElementById("score").style.pointerEvents = "auto";
    document.getElementById("score").innerHTML =  document.getElementById("score").innerHTML.replace(/\[Score\]/, score)
}