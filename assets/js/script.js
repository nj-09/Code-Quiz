var startScreen = document.getElementById('start-screen')
var startButton = document.getElementById('start')
var questions = document.getElementById('questions')
var questionTitle = document.getElementById('question-title');
var choices = document.getElementById('choices')
var endScreen = document.getElementById('end-screen')
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
    questionTitle.value = currentQuestion.question

    // we need to create a button inside our choices div
    // then populate the button with the answers
    // on click of the button will increment our questionIndex
    // clear out the questions div
    // and repopulate that div with the next question

    currentQuestion.choices.forEach(answer => {
        let answerEl = document.createElement("button")
        answerEl.value = answer
        answerEl.addEventListener('click', function() {
            if (answerEl.value === answer.answer) {
                questionIndex++
                // remove the values from questionTitle and choices
                // then getQusestion again
                // since we incremented questionIndex, it should move on to the next q
            } else {
                // take like 5 seconds off of the time

                // the endquiz function will save our scores to localState
            }
            // this is going to be where loop continues
        })
        choices.appendChild(answerEl)

    });
}


// End Quiz
function endQuiz () {
    // stop timer
    clearInterval(timerInterval);

}


startButton.addEventListener('click', startQuiz)