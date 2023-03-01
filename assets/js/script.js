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
var submit = document.getElementById('submit')
var initials = document.getElementById('initials')

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
}

// LocalStorage to store user highscores
// so we need a function
function saveScore() {
    // for example
    // first it will check to see if there are any scores in local storage already
    var scores = JSON.parse(localStorage.getItem('highscores'))
    var scoreArray

    // then we will make a copy of the array if there is scores
    // else we'll make a new array
    // so here if scores exists, we'll use it as our working array
    // if not we'll make our working array an empty array
    if (scores) {
        scoreArray = scores
    } else {
        scoreArray = []        
    }
    
    // save our user's initial and score as an object
    // ex: {initials: NJ, score: time}
    //so here we're saving an object (once again we might need to use .innerHtml if this doesnt work with value)
    var userScore = {
        initials: initials.value,
        score: time,
    }
    
    // now we can add our userScore to the array
    scoreArray.push(userScore)
    // then save the modified array to local storage

    // i'm using highscores as the name in local storage but we can call it anything
    // ok so this should work if we try it out now
    localStorage.setItem('highscores', JSON.stringify(scoreArray))


    // all of this will go in our function ^^^^ - so we need to write more code here?
    // exactly, each line of pseudocode will correspond to probably one line of real code

    // SEND USER TO highscores.html
    window.location.href = './highscores.html';


}

// i would make a separate js file, then in your highscores.html, link the new script
// the new script will load the second you go to highscores.html
// all it will do is say like 
// localStorage.getItem('highscores')
// then you can use the normal dom stuff to populate the value with the data from localstorage - 
// this goes into the new JS file right
// I would probably use a loop (so for each score, make an html element that shows initials and score)

// i'm not sure what loop is
// ex:

// on the top of your page you'll do a getElement to find where you want to put the code - this goes into the new JS file right?
// exactly

//for (let i = 0; i < scores.length; i++) {
    // then in here you can create an element for each score
   // var data = scores[i]

    // look up document.creatChild or something like that to create html elements using dom
    // 
//}

// that runs after we click the save initials button
submit.addEventListener('click', saveScore)


startButton.addEventListener('click', startQuiz)