var startScreen = document.getElementById('start-screen')
var startButton = document.getElementById('start')
var questions = document.getElementById('questions')
var questionTitle = document.getElementById('question-title');
var choices = document.getElementById('choices')
var endScreen = document.getElementById('end-screen')
var finalScore = document.getElementById('final-score')
var timerEl = document.getElementById('time')
var timerInterval;
var time = 30;
var questionIndex = 0;

var questionsArr = [
    {
        question: "What does JS stand for?",
        choices: ["JellyShoes", "JakeSully", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What are the data-types used in JavaScript?",
        choices: ["English", "Objects", "Pigs", "Sheeps"],
        answer: "Objects"
    },
    {
        question: "Is JS a case-sensitive language?",
        choices: ["Yes", "Maybe", "No"],
        answer: "Yes"
    },
    
]

function startQuiz () {
    // hide start screen element
    startScreen.setAttribute('class', 'hide')

    // display question element
    questions.removeAttribute('class', 'hide')

    // start timer
    timerInterval = setInterval(function() {
        // interval commands
        //display the timer
        timerEl.textContent = time 

        //decrement time by 1
        time-- //here we're only manipulating time, -- goes down by one or you could long hand time = time-1


        // redisplay time
        timerEl.textContent = time // yes
        // make sure time doesn't go below 0
        if (time === 0) {
            // call endQuiz function
            endQuiz(); 
        }



    }, 1000)

    // set a counter here (let index = 0)
    let index = 0;

getQuestion() 

    // then a foreach loop on our questions
    // which will populate the html with the questions
    // right now the questions div is empty


}

function getQuestion() {
    var currentQuestion = questionsArr[questionIndex]
    questionTitle.textContent = currentQuestion.question 
    
    // we need to create a button inside our choices div
    // then populate the button with the answers
    // on click of the button will increment our questionIndex
    // clear out the questions div
    // and repopulate that div with the next question

    currentQuestion.choices.forEach(answer => { // since we got rid of value, do we need to
        // do the same for others -> it looks like you're using it to compare, so let's use both. 
        let answerEl = document.createElement("button")
        answerEl.value = answer; // yes, makes sense
        answerEl.textContent = answer; 
        answerEl.addEventListener('click',checkAnswer)
        choices.appendChild(answerEl)
    }); // could you run me thru line 82 onwards
}

function checkAnswer() {

    if (this.value === questionsArr[questionIndex].answer) {
        console.log('correct!')

    } else {
        console.log('inccorrect!')
        // take like 5 seconds off of the time
        // we can minus 5 seconds from our time pretty easily, do you know how?
        // -- ? Kinda
        time -=5
        timerEl.textContent = time;

        if (time === 0) {
            // call endQuiz function
            endQuiz(); 
        }

        // make sure time doesn't go below 0

        // you remove the time, and then need to update the time on the page

        // the endquiz function will save our scores to localState
    }

            // remove the values from questionTitle and choices
            questionTitle.innerHTML = "";
            choices.innerHTML = "";

        //move to next question (ex: questionsArr[1])
        questionIndex++

        // check if questions left
        if (questionIndex == questionsArr.length) {
            endQuiz();
        } else {
            getQuestion();
        }
    
}


// End Quiz
function endQuiz () {
    // stop timer
    clearInterval(timerInterval);
// add setAttribute to hide start screen and show endscreen
startScreen.setAttribute('class', 'hide')

// display endScreen element
endScreen.removeAttribute('class', 'hide')
finalScore.innerHTML = time


startButton.addEventListener('click', startQuiz)
