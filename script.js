const rpsUI = {
  displays: {
    humanDisplay: document.querySelector("#human-display"),
    computerDisplay: document.querySelector("#computer-display-txt"),
  },
  buttons: {
    humanChoices: document.querySelector("#human-choices"),
    rpsElementButtons: document.querySelectorAll(".btn-element"),
    rock: document.querySelector("#rock .btn-element"),
    paper: document.querySelector("#paper .btn-element"),
    scissors: document.querySelector("#scissors .btn-element"),
    replay: document.querySelector(".btn-replay"),
  },
  nameAndScore: {
    human: {
      name: document.querySelector("#human-name"),
      score: document.querySelector("#human-score"),
    },
    computer: {
      name: document.querySelector("#computer-name"),
      score: document.querySelector("#computer-score"),
    },
  },
  roundNumber: document.querySelector("#round-number"),
  roundMessage: document.querySelector(".round-message"),
  startEndScreen: document.querySelector("#start-end-screen"),
};
const startVars = {
  scores: {
    humanScore: 0,
    computerScore: 0,
  },
  round: 1,
};
const choices = {
  rock: "Rock",
  paper: "Paper",
  scissors: "Scissors",
  computer: {
    choice: function () {
      const randomNumber = Math.floor(Math.random() * 3 + 1);
      if (randomNumber === 1) {
        return choices.rock;
      } else if (randomNumber === 2) {
        return choices.paper;
      } else {
        return choices.scissors;
      }
    },
  },
};

const rpsWinConditions = {
  rock: { winsAgainst: "Scissors", losesAgainst: "Paper" },
  paper: { winsAgainst: "Rock", losesAgainst: "Scissors" },
  scissors: { winsAgainst: "Paper", losesAgainst: "Rock" },
};
for (let button of rpsUI.buttons.rpsElementButtons) {
  button.classList.add("btn-element-shade-out");
}
let roundNum = startVars.round;

const elementBtnPress = function () {
  for (let button of rpsUI.buttons.rpsElementButtons) {
    button.addEventListener("mousedown", function () {
      if (roundNum >= 5) {
        return;
      }
      button.classList.remove("btn-element-shade-out");
      void button.offsetWidth; // Force a reflow to ensure the class change is noticed
      button.classList.add("btn-element-shade-in");
    });

    button.addEventListener("mouseup", function () {
      button.classList.remove("btn-element-shade-in");
      void button.offsetWidth; // Force a reflow again
      button.classList.add("btn-element-shade-out");
    });
  }
};
elementBtnPress();
window.addEventListener("load", function () {
  rpsUI.roundNumber.textContent = `Round ${roundNum}/5`;
  rpsUI.roundNumber.classList.remove("round-number-animate");
  void rpsUI.roundNumber.offsetWidth;
  rpsUI.roundNumber.classList.add("round-number-animate");
});

let humanScore = startVars.scores.humanScore;
let computerScore = startVars.scores.computerScore;
console.log(humanScore, computerScore);
rpsUI.nameAndScore.human.score.textContent = startVars.scores.humanScore;
rpsUI.nameAndScore.computer.score.textContent = startVars.scores.computerScore;
const tie = function () {
  if (
    rpsUI.displays.computerDisplay.textContent ===
      rpsUI.displays.humanDisplay.textContent &&
    roundNum < 5
  ) {
    setTimeout(() => {
      rpsUI.roundMessage.textContent = "TIE";
      rpsUI.roundMessage.classList.add("slider-animate");
    }, 10);
    rpsUI.roundMessage.classList.remove("slider-animate");
  }
};

const winLoseTie = function (rpsElement) {
  if (
    //checks if human wins when the computer makes a "choice"(random)
    rpsUI.displays.computerDisplay.textContent ===
    rpsWinConditions[rpsElement].winsAgainst
  ) {
    rpsUI.roundMessage.textContent = "NICE ONE!";
    rpsUI.roundMessage.classList.remove("slider-animate"); //reset so it can animate again
    void rpsUI.roundMessage.offsetWidth;
    rpsUI.roundMessage.classList.add("slider-animate");
    humanScore++;
    rpsUI.nameAndScore.human.score.textContent = humanScore;
  } else if (
    rpsUI.displays.computerDisplay.textContent ===
    rpsWinConditions[rpsElement].losesAgainst
  ) {
    rpsUI.roundMessage.textContent = "Awe, TRY AGAIN!";
    rpsUI.roundMessage.classList.remove("slider-animate"); //reset so it can animate again
    void rpsUI.roundMessage.offsetWidth;
    rpsUI.roundMessage.classList.add("slider-animate");
    computerScore++;
    rpsUI.nameAndScore.computer.score.textContent = computerScore;
  } else {
    tie();
  }

  if (roundNum === 5 && computerScore < humanScore) {
    rpsUI.roundMessage.textContent = "You WIN!";
    rpsUI.roundMessage.classList.remove("slider-animate"); //reset so it can animate again
    void rpsUI.roundMessage.offsetWidth;
    rpsUI.roundMessage.classList.add("slider-animate");
  } else if (roundNum === 5 && humanScore < computerScore) {
    rpsUI.roundMessage.textContent = "You Lose :(";
    rpsUI.roundMessage.classList.remove("slider-animate"); //reset so it can animate again
    void rpsUI.roundMessage.offsetWidth;
    rpsUI.roundMessage.classList.add("slider-animate");
  } else if (roundNum === 5 && humanScore === computerScore) {
    rpsUI.roundMessage.textContent = "ITSA TIE, TRY AGAIN!";
    rpsUI.roundMessage.classList.remove("slider-animate"); //reset so it can animate again
    void rpsUI.roundMessage.offsetWidth;
    rpsUI.roundMessage.classList.add("slider-animate");
  }
};
rpsUI.buttons.humanChoices.addEventListener("mouseup", function () {
  rpsUI.roundNumber.classList.remove("round-number-animate");
  void rpsUI.roundNumber.offsetWidth;
  rpsUI.roundNumber.classList.add("round-number-animate");
});

// Animates and displays the current round number

rpsUI.buttons.humanChoices.addEventListener("mouseup", function (event) {
  roundNum++;
  if (roundNum > 4) {
    const btnIcons = document.querySelectorAll(".btn-icon");
    for (let icon of btnIcons) {
      icon.style.opacity = ".3";
    }
  }
  if (roundNum <= 5) {
    rpsUI.displays.computerDisplay.textContent = choices.computer.choice(); //displays computer's random selection
    const btnName = event.target.parentNode.parentNode.getAttribute("id"); //? clean up (parentNode.parentNode)

    rpsUI.roundNumber.textContent = `Round ${roundNum}/5`;
    switch (btnName) {
      case "Rock":
        rpsUI.displays.humanDisplay.textContent = choices.rock;
        winLoseTie("rock");
        break;
      case "Paper":
        rpsUI.displays.humanDisplay.textContent = choices.paper;
        winLoseTie("paper");
        break;
      case "Scissors":
        rpsUI.displays.humanDisplay.textContent = choices.scissors;
        winLoseTie("scissors");
        break;
      default:
    }
  } else {
    rpsUI.roundNumber.classList.remove("round-number-animate");
  }
});

// rpsUI.displays.humanDisplay.textContent = "Rock";
// rpsUI.displays.computerDisplay.textContent = "Annika";
// rpsUI.displays.humanDisplay.textContent = "Roan";
// rpsUI.buttons.rock.style.backgroundColor = "red";
// rpsUI.buttons.paper.style.backgroundColor = "yellow";
// rpsUI.buttons.scissors.style.backgroundColor = "green";
// rpsUI.buttons.replay.style.backgroundColor = "orange";
// rpsUI.nameAndScore.human.name.style.color = "#FF75DB";
// rpsUI.nameAndScore.human.score.style.color = "#42B34D";
// rpsUI.nameAndScore.computer.name.style.color = "#00B2B1";
// rpsUI.nameAndScore.computer.score.style.color = "#DB2B23";
// rpsUI.round.textContent = "Ime Da Boss!!!";
// rpsUI.startEndScreen.classList.add("start-end-swipe");
