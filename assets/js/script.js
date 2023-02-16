var startScreen = document.getElementById('start-screen')
var startButton = document.getElementById('start')
var questions = document.getElementById('questions')
var endScreen = document.getElementById('end-screen')
var timerEl = document.getElementById('time')
var timerInterval;
var time = 30;

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


}

// End Quiz
function endQuiz () {
    // stop timer
    clearInterval(timerInterval);

}


startButton.addEventListener('click', startQuiz)