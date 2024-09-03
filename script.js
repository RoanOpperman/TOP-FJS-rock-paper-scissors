"use strict";
console.log("hello world");

// Initiations and Options
let humanScore = 0;
let computerScore = 0;
let round = 0;
const selectOne = "Rock";
const selectTwo = "Paper";
const selectThree = "Scissors";

// This function enables the computer to simulate choosing from the list of three options above
let getComputerChoice = function () {
  let computerSelectRandom = Math.floor(Math.random() * 3 + 1);
  let computerSelection = null;

  if (computerSelectRandom === 1) {
    computerSelection = selectOne;
  } else if (computerSelectRandom === 2) {
    computerSelection = selectTwo;
  } else {
    computerSelection = selectThree;
  }
  return computerSelection;
};

let getHumanChoice = function () {
  let humanInput = prompt("Let's play Rock, Paper, Scissors").toLowerCase();
  if (
    humanInput === selectOne ||
    humanInput === selectTwo ||
    humanInput === selectThree
  ) {
    return humanInput;
  }
  //cleanHumanChoice ensures the human not to worry about case sensitivity.
  const cleanHumanChoice = function (humanInput) {
    const toUpperCaseFirst = humanInput.charAt(0).toUpperCase();
    const restOfHumanInput = humanInput.slice(1);
    const sanitizedString = toUpperCaseFirst + restOfHumanInput;
    return sanitizedString;
  };
  // testing if the human input matches the set choices limits choices to just Rock, Paper, Scissors
  const sanitizedHumanInput = cleanHumanChoice(humanInput);
  if (
    sanitizedHumanInput === selectOne ||
    sanitizedHumanInput === selectTwo ||
    sanitizedHumanInput === selectThree
  ) {
    return sanitizedHumanInput;
  } else {
    alert("That is not a valid choice, try again");
    getComputerChoice(); //Gets a new computer choice
    return getHumanChoice(); // Allows human to retry
  }
};

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert("You tie with the computer this round, try again");
    let tieComputerChoice = getComputerChoice();
    console.log(tieComputerChoice);
    getComputerChoice();
    let tieHumanChoice = getHumanChoice();
  } else {
    const humanWins = () => {
      humanScore++;
      round++;
      return (
        alert(
          `You win this round(${round}/5). (human:${humanScore}/5 computer:${computerScore}/5)`
        ),
        "the human scored"
      );
    };
    if (humanChoice === selectOne && computerChoice === selectThree) {
      return humanWins();
    } else if (humanChoice === selectTwo && computerChoice === selectOne) {
      return humanWins();
    } else if (humanChoice === selectThree && computerChoice === selectTwo) {
      return humanWins();
    } else {
      computerScore++;
      round++;
      return (
        alert(
          `You lose this round(${round}/5). (${humanScore}/5 computer:${computerScore}/5)`
        ),
        "the computer scored"
      );
    }
  }
};

const playGame = function () {
  const tellHumanTheyWon =
    "Awesome!, You can call yourself smarter than a computer. You win!";
  const tellHumanTheyLost =
    "You know...computers are actually pretty dumb. You lose.";
  for (let i = 1; i <= 5; i++) {
    let computerChoice = getComputerChoice();
    console.log("Initial computer choice: " + computerChoice);
    let humanChoice = getHumanChoice();
    console.log("Initial human choice: " + humanChoice);
    const roundPlayed = playRound(humanChoice, computerChoice);
    console.log("Last line= " + roundPlayed);
    console.log("human: " + humanScore, "computer: " + computerScore);

    //The following is the logic which allows for displaying the outcome of a game played
    if (humanScore === 5 && humanScore > computerScore) {
      alert(tellHumanTheyWon);
      return;
    } else if (humanScore > computerScore + 2) {
      //Allows the game to not drag on unnecessarily
      alert(tellHumanTheyWon);
      return;
    } else if (i === 5 && computerScore > humanScore) {
      alert(tellHumanTheyLost);
      return;
    }
  }
};
let resetAndPlayAgain = true;

while (resetAndPlayAgain) {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  console.log(humanScore, computerScore);
  playGame();
  alert("Press ENTER to play again!");
}

/*The code can be condensed, but not without the risk of losing readability*/
