const rpsUI = {
  displays: {
    humanDisplay: document.querySelector("#human-display"),
    computerDisplay: document.querySelector("#computer-display-txt"),
  },
  buttons: {
    play: document.querySelector("#start-btn"),
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

const screens = {
  start: document.querySelector("#start-screen"),
  end: document.querySelector("#end-screen"),
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
    button.addEventListener("mouseup", function (event) {
      // Trigger slide-out animation
      //

      rpsUI.displays.computerDisplay.classList.add(
        "choice-display-txt-slide-out"
      );

      rpsUI.displays.humanDisplay.classList.add("choice-display-txt-slide-out");
      // After slide-out completes, update text and trigger slide-in
      setTimeout(() => {
        // Remove slide-out, add slide-in
        rpsUI.displays.humanDisplay.classList.remove(
          "choice-display-txt-slide-out"
        );
        rpsUI.displays.computerDisplay.classList.remove(
          "choice-display-txt-slide-out"
        );

        void rpsUI.displays.humanDisplay.offsetWidth; // Force reflow
      }, 800); // Adjust timing to match the slide-out duration
      rpsUI.displays.humanDisplay.classList.add("choice-display-txt-slide-in");
      rpsUI.displays.computerDisplay.classList.add(
        "choice-display-txt-slide-in"
      );
    });
  }
};

elementBtnPress();
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
  // Only update round message if the round number is 4 or less
  if (roundNum <= 4) {
    setTimeout(() => {
      if (
        rpsUI.displays.computerDisplay.textContent ===
        rpsWinConditions[rpsElement].winsAgainst
      ) {
        rpsUI.roundMessage.textContent = "NICE ONE!";
        humanScore++;
        rpsUI.nameAndScore.human.score.textContent = humanScore; // Update human score display
      } else if (
        rpsUI.displays.computerDisplay.textContent ===
        rpsWinConditions[rpsElement].losesAgainst
      ) {
        rpsUI.roundMessage.textContent = "Awe, TRY AGAIN!";
        computerScore++;
        rpsUI.nameAndScore.computer.score.textContent = computerScore; // Update computer score display
      } else {
        tie(); // Handle tie case
      }

      // Reset and apply animation to round message
      rpsUI.roundMessage.classList.remove("slider-animate");
      void rpsUI.roundMessage.offsetWidth; // Force reflow
      rpsUI.roundMessage.classList.add("slider-animate");
    }, 800);
  }

  // Final message at round 5
  if (roundNum === 5) {
    setTimeout(() => {
      if (humanScore > computerScore) {
        rpsUI.roundMessage.textContent = "You WIN!";
      } else if (humanScore < computerScore) {
        rpsUI.roundMessage.textContent = "You Lose :(";
      } else {
        rpsUI.roundMessage.textContent = "IT'S A TIE, TRY AGAIN!";
      }

      rpsUI.roundMessage.classList.remove("slider-animate"); // Reset for final message animation
      void rpsUI.roundMessage.offsetWidth;
      rpsUI.roundMessage.classList.add("slider-animate");
    }, 800);
  }
};
rpsUI.buttons.humanChoices.addEventListener("mouseup", function () {
  rpsUI.roundNumber.classList.remove("round-number-animate");
  void rpsUI.roundNumber.offsetWidth;
  rpsUI.roundNumber.classList.add("round-number-animate");
});
// Animates and displays the current round number
const btnIcons = document.querySelectorAll(".btn-icon");
rpsUI.buttons.humanChoices.addEventListener("mouseup", function (event) {
  roundNum++;
  if (roundNum > 4) {
    for (let icon of btnIcons) {
      icon.style.opacity = ".3";
    }
  }
  if (roundNum <= 5) {
    const btnName = event.target.parentNode.parentNode.getAttribute("id"); //? clean up (parentNode.parentNode)
    rpsUI.roundNumber.textContent = `Round ${roundNum}/5`;
    setTimeout(function () {
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
    }, 250);
  } else {
    rpsUI.roundNumber.classList.remove("round-number-animate");
  }
  setTimeout(() => {
    rpsUI.displays.computerDisplay.textContent = choices.computer.choice(); //displays computer's random selection
  }, 250);

  //* END SCREEN
  if (roundNum === 5) {
    screens.end.classList.add("end-screen");
    if (humanScore > computerScore) {
      screens.end.classList.add("end-screen-win");
    } else if (humanScore < computerScore) {
      screens.end.classList.add("end-screen-lose");
    } else {
      screens.end.classList.add("end-screen-tie");
    }
  }
  //* **************************************************************
});
//* REPLAY (RESET GAME TO ORIGINAL STATE)
const replay = function () {
  roundNum = 1;
  screens.end.classList.remove("end-screen");
  screens.end.classList.remove("end-screen-win");
  screens.end.classList.remove("end-screen-lose");
  screens.end.classList.remove("end-screen-tie");
  rpsUI.roundNumber.textContent = `Round ${roundNum}/5`;
  rpsUI.roundNumber.classList.remove("round-number-animate");
  void rpsUI.roundNumber.offsetWidth;
  rpsUI.roundNumber.classList.add("round-number-animate");
  rpsUI.displays.humanDisplay.textContent = "Let's GO!!!";
  rpsUI.displays.computerDisplay.textContent = "";
  rpsUI.nameAndScore.human.score.textContent = "0";
  rpsUI.nameAndScore.computer.score.textContent = "0";
  humanScore = 0;
  computerScore = 0;
  if (roundNum < 4) {
    for (let icon of btnIcons) {
      icon.style.opacity = "1";
    }
  }
};
screens.end.classList.remove("end-screen-win");
screens.end.classList.remove("end-screen-lose");
screens.end.classList.remove("end-screen-tie");
rpsUI.buttons.replay.classList.add("btn-element-shade-out");
rpsUI.buttons.replay.addEventListener("mousedown", function () {
  rpsUI.buttons.replay.classList.remove("btn-element-shade-out");
  void rpsUI.buttons.replay.offsetWidth; // Force a reflow to ensure the class change is noticed
  rpsUI.buttons.replay.classList.add("btn-element-shade-in");
});
rpsUI.buttons.replay.addEventListener("mouseup", function () {
  rpsUI.buttons.replay.classList.remove("btn-element-shade-in");
  void rpsUI.buttons.replay.offsetWidth; // Force a reflow again
  rpsUI.buttons.replay.classList.add("btn-element-shade-out");
});
rpsUI.buttons.replay.addEventListener("mouseup", replay);
const startGame = function () {
  screens.start.classList.add("start-fade-out");
  rpsUI.roundNumber.textContent = `Round ${roundNum}/5`;
  rpsUI.roundNumber.classList.remove("round-number-animate");
  void rpsUI.roundNumber.offsetWidth;
  rpsUI.roundNumber.classList.add("round-number-animate");
  setTimeout(function () {
    screens.start.style["z-index"] = "-1";
  }, 2000);
};
rpsUI.buttons.play.addEventListener("mouseup", startGame);
