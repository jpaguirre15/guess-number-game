'use strict';

// JavaScript in the Browser: DOM and Event Fundamentals
// About: on this part of the lesson, we will study about DOCUMENT OBJECT MODEL (DOM) and how to manipulate them.

// Pete Aguirre II
// 3/5/2022, Saturday

/*
// HTML refresher
// elements: <> </>
// texts: " "

// CSS refresher
// # -- is an ID selector, used to target single specific element with unique ID.
// e.g. #foo {} will style the single element declared with an attribute, id="foo"

// . -- is a CLASS selector used to target multiple elements with a particular class. // e.g. .foo {} will style ALL elements with an attribute, class="foo"



// document.querySelector('.message') will access: <p class="message">Start guessing...</p> 
// document.querySelector('.message').textContent will access only: Start guessing...
// finally, show it in the Console 
console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent will access: Start guessing...
// store TEXT "Correct Number! 🎉" to document.querySelector('.message').textContent
// document.querySelector('.message').textContent is now: Correct Number! 🎉 
document.querySelector('.message').textContent = 'Correct Number! 🎉';

// document.querySelector('.number').textContent will access: '?' 
// store TEXT '13' to document.querySelector('.number').textContent
// document.querySelector('.number').textContent is now: '13' 
document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent will access: '20' 
// store TEXT '10' to document.querySelector('.score').textContent
// document.querySelector('.score').textContent is now: '10' 
document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value will access a blank VALUE
// store VALUE 23 to document.querySelector('.guess').value
// document.querySelector('.guess').value is now: 23
document.querySelector('.guess').value = 23;

// document...().value will access the text as a VALUE instead of a normal text 
// document.querySelector('.guess').value will access a blank VALUE
console.log(document.querySelector('.guess').value);
*/

// ----------
// ----------
// Handling Click Events


// Syntax: Math.trunc(floatType); -- converts number into an int type (no decimals)
// Syntax: Math.random() * <numberType1> + <numberType2>; -- chooses a random number between <numberType2> and <numberType1> 
// store random number, between 1-20 in secretNumber  
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// set score to 20 points 
let score = 20;


// Comment this line below to hide the number, uncomment this line below to show the number
// document.querySelector('.number').textContent = secretNumber;

// ----------
// ----------
// Function: displayMessage(message); 
// a function that sets the message depending on situation 
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


// ----------
// ----------
// Function: youLose(score); 
// a function to determine: if score is '0', the user is notified that they have lost the game. 
// - set '.message' to '💥 You lost the game!' 
function youLose(score) {
    if (score < 1) {
        // document.querySelector('.message').textContent = '💥 You lost the game!'
        displayMessage('💥 You lost the game!');
        // disableButton();
    }
}

// ----------
// ----------
// Function: setHighScore(); 
function setHighScore() {

    // access current game score
    // access current high score
    const currScore = Number(document.querySelector('.score').textContent);
    const currHigh = Number(document.querySelector('.highscore').textContent);


    // document.querySelector('.highscore').textContent = score;
    if (currScore <= currHigh) {
        document.querySelector('.highscore').textContent = currHigh;
    }
    else if (currScore > currHigh) {
        document.querySelector('.highscore').textContent = currScore;
    }

}

// ----------
// ----------
// Function: resetGame(score, secretNumber)
// a function that resets the score to its initial value and secretNumber is re-randomized
// - reset score to initial value 
// - document the new score to its initial value 
// - re-randomize for a new secretNumber 
// - document the new random number  
function resetGame() {
    // reset score to initial value 
    score = 20;
    document.querySelector('.score').textContent = score;

    // reset secretNumber and re-randomize a new number 
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';

    // reset background color to grey box 
    document.querySelector('body').style.backgroundColor = '#222';

    // reset text box to a blank box 
    document.querySelector('.guess').value = null;

    // reset message
    displayMessage('Start Guessing...')

    // enable button again
    // enableButton();

}

// ----------
// ----------
// Function: disableButton()
// a function that will disable check button 
function disableButton() {
    /* document.addEventListener("DOMContentLoaded", function (event) {
         document.getElementById('.check').disabled = true;
     }) */
    document.getElementById('.check').disabled = true;
}

// ----------
// ----------
// Function: enableButton()
// a function that will enable check button 
function enableButton() {

    /* document.addEventListener("DOMContentLoaded", function (event) {
        document.getElementById('.check').disabled = false;
    }) */
    document.getElementById('.check').disabled = false;
}

// ----------
// ----------
// Function: checkGameCondition()
// a function that will check for win condition 
// - if player doesn't enter a number
// - if player enters the correct guess 
// - if player number guess is too high
// - if player number guess is too low 
// - if player score goes to 0 
function checkGameCondition() {
    // create storage guess
    // access the 'Check!' button
    // when 'Check!' is clicked, store it in the guess variable 
    // convert value into a number 
    const guess = Number(document.querySelector('.guess').value);
    // log number entered and confirm that it's a number 
    console.log(guess, typeof guess);

    // condition if guess IS blank 
    // - set '.message' to '⛔ No Number!' 
    // - notify user that there is no number 
    if (!guess && score > 0) {
        // document.querySelector('.message').textContent = '⛔ No Number!';
        displayMessage('⛔ No Number!');
    }
    // condition if guess IS correct AND score is more than 0 
    // - set '.message' to '🎉 Correct Number!' 
    // - notify user that number is correct 
    // - reveal the correct guessed number
    // - make the website background to green 
    // - set correctGuess() function to true 
    else if (guess === secretNumber && score > 0) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!'
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        // Syntax: document.querySelector('<element>').style.backgroundColor = '<hex>' 
        // - changes the background color with choice of hexdecimal color value 
        document.querySelector('body').style.backgroundColor = '#60b347';
        // document.querySelector('.number').style.width = '30rem'; // idk why this line is necessary, it expands the '?' box 


        // check if high score was beat
        setHighScore(score);

        // if you win, disable the button 
        // disableButton();


    }

    // try to condense the low and high
    // if guess IS NOT CORRECT AND score IS not 0 
    // - depending on guess, set '.message' to '📉 Too Low!' or '📈 Too High!' 
    // - depending on guess, notify user that number is too low or too high
    // - decrease score -1
    // - notify user the new score 
    // - check if user has lost by running youLose() function 
    else if (guess !== secretNumber && score > 0) {
        // guess < secretNumber ? document.querySelector('.message').textContent = '📉 Too Low!' : document.querySelector('.message').textContent = '📈 Too High!';
        // guess < secretNumber ? displayMessage('📉 Too Low!') : displayMessage('📈 Too High!');
        displayMessage(guess < secretNumber ? '📉 Too Low!' : '📈 Too High!');
        score--;
        document.querySelector('.score').textContent = score;
        youLose(score);
    }

    // if score IS 0
    // - make sure score doesn't decrease to the negatives 
    // - notify user to play again 
    else if (score === 0) {
        displayMessage('🎮 Play Again?');
    }
}


// ----------
// ----------
// Check! button 
// Syntax: element.addEventListener(event, function, useCapture); 
// -- will set up a function that will be called whenever a specified event is delivered to the target 
// document.querySelector('.check') will access the "Check!" button 
// .addEventListener(click, function(){...})) will check if guessed number is correct, too low, too high, or blank 
document.querySelector('.check').addEventListener('click', function () {
    checkGameCondition();
});

// ----------
// ----------
// Again! button 
// Syntax: element.addEventListener(event, function, useCapture); 
// -- will set up a function that will be called whenever a specified event is delivered to the target 
// document.querySelector('.again') will access the 'Again!' button 
// .addEventListener(click, function(){...})) will reset 
document.querySelector('.again').addEventListener('click', function () {
    resetGame();
});

// ----------
// ----------
