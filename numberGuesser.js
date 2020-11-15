// Filename : numberGuesser.js
// Created : 15/11/2020

// Global variables
let humanScore = 0;         // initailise score to 0
let computerScore = 0;      // initialise score to 0
let currentRoundNumber = 1; // initialise the current round number

// Returns an integer between 0 and 9
function generateTarget() {
     let random = Math.floor(Math.random() * 10);
     return random;
} // generateTarget()

// Decides which guess is closest to the target number
// If the user and the computer are tie, then the user wins
// If user enters a number less than 1 or greater than 9 an error message
// is displayed and the computer wins by default
// Returns true if the human wins and false if the computer wins
function compareGuesses(humanGuess, computerGuess, secretTarget) {
    let humanWins = false;   // Initailise to false

    // Take the absolute difference between the guess and target
    let humanDiff = Math.abs(humanGuess - secretTarget);
    let computerDiff = Math.abs(computerGuess - secretTarget);

    // if human guess is greater than 9 then issue alert, human loses
    if (humanGuess < 1 || humanGuess > 9){
        alert("Number must be between 1 and 9");
    }

    // if human and computer are the same distance away from target
    else if (humanDiff === computerDiff){
        humanWins = true;
    } 
    // if the human guess is closer to the target number
    else if (humanDiff < computerDiff) {
        humanWins = true;
    }
   // humanWins ? alert("Human wins") : alert("Computer wins");
    return humanWins;

} // compareGuess()


// Increases the winner's score after every round
function updateScore(winner) {

    switch (winner) {
        // if human,  increment the human score
        case 'human':
            humanScore++;
            break;
        // if computer,  increment the computer score
        case 'computer' :
            computerScore++;
            break;
        default :
            break;
    } // switch on the winner string

} // updateScore()

// Increment the round number
const advanceRound = () => { currentRoundNumber++};

