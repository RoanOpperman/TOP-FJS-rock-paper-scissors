// initiate and confirm script is connected to the HTML file
"use strict";
console.log("hello world");

// Initialize scores for both players: set humanScore and computerScore to 0.
let humanScore = 0;
let computerScore = 0;
// Store the choices ("Rock", "Paper", "Scissors") in the variables: selectOne, selectTwo, and selectThree.
const selectOne = "Rock";
const selectTwo = "Paper";
const selectThree = "Scissors";

// Define a function named getComputerChoice
const getComputerChoice = function () {
// Generate a random number between 1 and 3 and store it in a variable named computerSelectRandom
  let computerSelectRandom = Math.floor(Math.random() * 3 + 1);
  // Declare a variable computerSelection and set it to null
  let computerSelection = null;
  // Use an if statement with 3 conditions to assign a value to computerSelection based on computerSelectRandom:
  // if computerSelectRandom equals 1, assign selectOne to computerSelection
  if (computerSelectRandom === 1) {
    computerSelection = selectOne;
    // if computerSelectRandom equals 2, assign selectTwo to computerSelection
  } else if (computerSelectRandom === 2) {
    computerSelection = selectTwo;
    // if computerSelectRandom equals 3, assign selectThree to computerSelection
  } else {
    computerSelection = selectThree;
  }
  // Return computerSelection from the function
  return computerSelection;
};

// Log the result of getComputerChoice() to the console
// console.log(getComputerChoice());
let computerChoice = getComputerChoice();
console.log("T " + computerChoice);
// Define a function named getHumanChoice
const getHumanChoice = function () {
  // Declare a let variable humanSelect to store the user's input using the prompt: "Let's play Rock, Paper, Scissors" and convert humanSelect to lowercase letters
  let humanSelection = prompt("Let's play Rock, Paper, Scissors").toLowerCase();

  const cleanHumanSelect = function (humanSelect) {
    // Define a function named cleanHumanSelect with humanSelect as a parameter to sanitize the input
    // Store the first letter of the lowercase humanSelect in a variable named toUpperFirst, and capitalize it
    const toUpperFirst = humanSelect.charAt(0).toUpperCase();
    // Store the remainder of the string (excluding the first character) in a variable named restOfString
    const restOfString = humanSelect.slice(1);
    // Concatenate toUpperFirst and restOfString, and store the result in a variable named sanitizedString
    const sanitizedString = toUpperFirst + restOfString;
    // return the sanitizedString string from the cleanHumanSelect
    return sanitizedString;
  };

  //        ..Use an if statement to check if the sanitized input matches any of the choices (selectOne, selectTwo, selectThree)
  //        ..If it matches, return the sanitized input from the getHumanChoice function
  const sanitizedInput = cleanHumanSelect(humanSelection);
  if (
    sanitizedInput === selectOne ||
    sanitizedInput === selectTwo ||
    sanitizedInput === selectThree
  ) {
  // Return sanitizedString from the cleanHumanSelect function
    return sanitizedInput;
   // Otherwise if it does not match:
  } else {
// Alert user that their input is invalid
    alert("That is not a valid choice, try again");
    // Call the getComputer Choice function to repeat to allow correction
    getComputerChoice();
    // Call the getHumanChoice function to repeat
    getHumanChoice();
  }
};

// Log the result of getHumanChoice() to the console
let humanChoice = getHumanChoice();
console.log(humanChoice);
// Define a function named playRound with parameters humanChoice and computerChoice
const playRound = function (humanChoice, computerChoice) {
// Declare a variable humanWins to store the message "You win this round"
  const humanWins = "You win this round";
// Declare a variable computerWins to store the message "You lose this round"
  const computerWins = "You lose this round";
// If humanChoice is the same as computerChoice:
  if ((humanChoice === computerChoice)) {
// Alert the user that their choice was the same and prompt them to try again
    alert("You tie with the computer this round, try again");
// Call getComputerChoice again to re-assign a new random choice to a variable
    let tieComputerChoice = getComputerChoice(); 
// Call getHumanChoice again to get a new choice from the user and assign it to a variable
    let tieHumanChoice = getHumanChoice();
// Return a call function and use the new choices as arguments
    return playRound(tieHumanChoice,tieComputerChoice);
// Otherwise:
  } else {
// if humanChoice is "Rock" (selectOne) and computerChoice is "Scissors" (selectThree), increment humanScore by 1 and return humanWins
    if (humanChoice === selectOne && computerChoice === selectThree) {
      humanScore++;
      console.trace(humanScore);
      return humanWins;
    }
// if humanChoice is "Paper" (selectTwo) and computerChoice is "Rock" (selectOne), increment humanScore by 1 and return humanWins
    if (humanChoice === selectTwo && computerChoice === selectOne) {
      humanScore++;
      console.trace(humanScore);
      return humanWins;
    }
// if humanChoice is "Scissors" (selectThree) and computerChoice is "Paper" (selectTwo), increment humanScore by 1 and return humanWins
    if (humanChoice === selectThree && computerChoice === selectTwo) {
      humanScore++;
      console.trace(humanScore);
      return humanWins;
// Otherwise, and increment computerScore by 1 return computerWins
    } else {
      computerScore++;
      console.trace(computerScore);
      return computerWins;
    }
  }
};

// Call playRound and assign it to a variable (roundPlayed)
let roundPlayed = playRound(humanChoice, computerChoice);
// Log the human score to confirm the correct score is incrementing 
console.log("Human: " + humanScore);
// Log the computer score to confirm the correct score is incrementing 
console.log("Computer: " + computerScore);

// Log the result of playRound(humanChoice, computerChoice) to the console
// Define a function named playGame with parameters humanScore and computerScore
// Repeat the following until humanScore is equal to or greater than 3 or computerScore is equal to or greater than 3:
// If humanScore is greater than or equal to computerScore, alert the user that they won the game
// Otherwise, alert the user that they lost the game
// Reset both humanScore and computerScore to 0
// Alert the user with "Let's play again"
// Call getHumanChoice function to start a new round
// Call getHumanChoice function to start the game
// Call playRound function with getHumanChoice and getComputerChoice as arguments to begin the game rounds
