"use strict";
console.log("hello world");

// Initialize scores for both players: set humanScore and computerScore to 0.
// Store the choices ("Rock", "Paper", "Scissors") in the variables: selectOne, selectTwo, and selectThree.
// Define a function named getComputerChoice
//      Declare a variable computerSelection and set it to null
//      Generate a random number between 1 and 3 and store it in a variable named computerSelectRandom
//      Use an if statement with 3 conditions to assign a value to computerSelection based on computerSelectRandom:
//          if computerSelectRandom equals 1, assign selectOne to computerSelection
//          if computerSelectRandom equals 2, assign selectTwo to computerSelection
//          if computerSelectRandom equals 3, assign selectThree to computerSelection
//      Return computerSelection from the function
// Log the result of getComputerChoice() to the console
// Define a function named getHumanChoice
//      Declare a variable humanSelect to store the user's input using the prompt: "Let's play Rock, Paper, Scissors"
//      Define a function named cleanHumanSelect with humanSelect as a parameter to sanitize the input
//          Convert humanSelect to lowercase letters
//          Store the first letter of the lowercase humanSelect in a variable named toUpperFirst, and capitalize it
//          Store the remainder of the string (excluding the first character) in a variable named restOfString
//          Concatenate toUpperFirst and restOfString, and store the result in a variable named sanitizedString
//          Return sanitizedString from the cleanHumanSelect function
//      Use an if statement to check if the sanitized input matches any of the choices (selectOne, selectTwo, selectThree)
//          If it matches, return the sanitized input from the getHumanChoice function
//      Call the cleanHumanSelect function to sanitize user input
// Log the result of getHumanChoice() to the console
// Define a function named playRound with parameters humanChoice and computerChoice
//      Declare a variable humanWins to store the message "You win this round"
//      Declare a variable computerWins to store the message "You lose this round"
//      If humanChoice is the same as computerChoice:
//          Alert the user that their choice was the same and prompt them to try again
//          Call getHumanChoice again to get a new choice from the user
//      Otherwise:
//          if humanChoice is "Rock" (selectOne) and computerChoice is "Scissors" (selectThree), increment humanScore by 1 and return humanWins
//          if humanChoice is "Paper" (selectTwo) and computerChoice is "Rock" (selectOne), increment humanScore by 1 and return humanWins
//          if humanChoice is "Scissors" (selectThree) and computerChoice is "Paper" (selectTwo), increment humanScore by 1 and return humanWins
//          Otherwise, and increment computerScore by 1 return computerWins
// Log the result of playRound(humanChoice, computerChoice) to the console
// Define a function named playGame with parameters humanScore and computerScore
//      Repeat the following until humanScore is equal to or greater than 3 or computerScore is equal to or greater than 3:
//          If humanScore is greater than or equal to computerScore, alert the user that they won the game
//          Otherwise, alert the user that they lost the game
//          Reset both humanScore and computerScore to 0
//          Alert the user with "Let's play again"
//          Call getHumanChoice function to start a new round
// Call getHumanChoice function to start the game
// Call playRound function with getHumanChoice and getComputerChoice as arguments to begin the game rounds
