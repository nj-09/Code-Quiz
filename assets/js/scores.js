// Global Variables
var score = document.getElementById('highscores')

// clear button variable
var clearButton = document.getElementById('clear')

//To do: parse the local storage data
// store LS data into a variable 




// Can you start off our loop? yes ma'am

// To Do:

// Loop through leaderboard array
function displayScores() {
    var leaderboard = JSON.parse(localStorage.getItem('highscores'))

    for (let i = 0; i < leaderboard.length; i++) {

    // create li

    var liEl = document.createElement('li')

    // add text content to populate list item
    liEl.textContent = leaderboard[i].initials + ": " + leaderboard[i].score

    // append li to the page
    score.appendChild(liEl)

    } 
}

displayScores();



function clearScores() {

    // clear localStorage
    localStorage.removeItem('highscores')
    // reload page
    window.location.reload();
}

// clear button event listener

clearButton.addEventListener('click', clearScores)

