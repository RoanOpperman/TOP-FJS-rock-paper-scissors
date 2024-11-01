const screens = {
  start: document.querySelector("#start-screen"),
  end: document.querySelector("#end-screen"),
};

const displays = {
  humanDisplay: document.querySelector("#human-display"),
  computerDisplay: document.querySelector("#computer-display-txt"),
};

const buttons = {
  play: document.querySelector("#start-btn"),
  humanChoices: document.querySelector("#human-choices"),
  rpsElementButtons: document.querySelectorAll(".btn-element"),
  replay: document.querySelector(".btn-replay"),
};

const nameAndScore = {
  human: {
    name: document.querySelector("#human-name"),
    score: document.querySelector("#human-score"),
  },
  computer: {
    name: document.querySelector("#computer-name"),
    score: document.querySelector("#computer-score"),
  },
};

const round = {
  number: document.querySelector("#round-number"),
  message: document.querySelector(".round-message"),
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

const TOTAL_ROUNDS = 5;
let playerChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

nameAndScore.human.score.textContent = humanScore;
nameAndScore.computer.score.textContent = computerScore;

//* Show Player's Selected Choice in Rock-Paper-Scissors with Round Limitation Check
const scrollAction = function () {
  computerChoice = choices.computer.choice();
  displays.humanDisplay.classList.add("choice-display-txt-slide-out");
  displays.computerDisplay.classList.add("choice-display-txt-slide-out");

  displays.humanDisplay.addEventListener(
    "animationend",
    function slideOutHandler() {
      displays.humanDisplay.removeEventListener(
        "animationend",
        slideOutHandler
      );
      displays.humanDisplay.classList.remove("choice-display-txt-slide-out");

      switch (playerChoice) {
        case "rock":
          displays.humanDisplay.textContent = choices.rock;
          if (computerChoice === rpsWinConditions.rock.winsAgainst) {
            console.log(computerChoice);
            humanScore++;
            round.message.textContent = "Nice One!";
          } else if (computerChoice === rpsWinConditions.rock.losesAgainst) {
            console.log(computerChoice);
            computerScore++;
            round.message.textContent = "Try Again";
          } else {
            console.log(computerChoice);
            round.message.textContent = "TIE";
          }
          break;
        case "paper":
          displays.humanDisplay.textContent = choices.paper;
          if (computerChoice === rpsWinConditions.paper.winsAgainst) {
            console.log(computerChoice);
            round.message.textContent = "Nice One!";
            humanScore++;
          } else if (computerChoice === rpsWinConditions.paper.losesAgainst) {
            console.log(computerChoice);
            round.message.textContent = "Try Again";
            computerScore++;
          } else {
            console.log(computerChoice);
            round.message.textContent = "TIE";
          }
          break;
        case "scissors":
          displays.humanDisplay.textContent = choices.scissors;
          if (computerChoice === rpsWinConditions.scissors.winsAgainst) {
            console.log(computerChoice);
            round.message.textContent = "Nice One!";
            humanScore++;
          } else if (
            computerChoice === rpsWinConditions.scissors.losesAgainst
          ) {
            console.log(computerChoice);
            round.message.textContent = "Try Again";
            computerScore++;
          } else {
            console.log(computerChoice);
            round.message.textContent = "TIE";
          }
          break;
      }
      displays.humanDisplay.classList.add("choice-display-txt-slide-in");
      displays.humanDisplay.addEventListener(
        "animationend",
        function slideInHandler() {
          displays.humanDisplay.removeEventListener(
            "animationend",
            slideInHandler
          );
          displays.humanDisplay.classList.remove("choice-display-txt-slide-in");
        }
      );
    }
  );

  displays.computerDisplay.addEventListener(
    "animationend",
    function slideOutHandler() {
      displays.computerDisplay.removeEventListener(
        "animationend",
        slideOutHandler
      );

      displays.computerDisplay.classList.remove("choice-display-txt-slide-out");
      displays.computerDisplay.textContent = computerChoice;
      displays.computerDisplay.classList.add("choice-display-txt-slide-in");
      displays.computerDisplay.addEventListener(
        "animationend",
        function slideInHandler() {
          displays.computerDisplay.removeEventListener(
            "animationend",
            slideInHandler
          );
          displays.computerDisplay.classList.remove(
            "choice-display-txt-slide-in"
          );
        }
      );
    }
  );
};

const roundMessageAnimation = function () {
  displays.computerDisplay.addEventListener("animationend", () => {
    round.message.classList.remove("slider-animate");
    round.message.classList.add("slider-animate");
  });
  round.message.classList.remove("slider-animate");
};
const currentRoundAnimation = function () {
  round.number.classList.remove("round-number-animate");
  void round.number.offsetWidth;
  round.number.classList.add("round-number-animate");
};
//* Display and Animate End Screen
const showEndGameScreen = function () {
  if (humanScore > computerScore) {
    screens.end.classList.add("end-screen");
    screens.end.classList.add("end-screen-win");
    document.querySelector(".end-game-message").textContent = "You win";

    document
      .querySelector("#endGameMessage")
      .classList.add("end-slider-animate");
  }
  if (humanScore < computerScore) {
    screens.end.classList.add("end-screen");
    screens.end.classList.add("end-screen-lose");
    document.querySelector(".end-game-message").textContent = "You Lose";

    document
      .querySelector("#endGameMessage")
      .classList.add("end-slider-animate");
  }
  if (humanScore === computerScore) {
    screens.end.classList.add("end-screen");
    screens.end.classList.add("end-screen-tie");
    document.querySelector(".end-game-message").textContent = "It's a Tie";

    document
      .querySelector("#endGameMessage")
      .classList.add("end-slider-animate");
  }
};

const scoreKeeping = function () {
  nameAndScore.human.score.textContent = humanScore;
  nameAndScore.computer.score.textContent = computerScore;
};
const startGame = function () {
  screens.start.classList.add("start-fade-out");
  setTimeout(function () {
    screens.start.style["z-index"] = "-1";
  }, 2000);
};
buttons.play.addEventListener("mouseup", startGame);
const buttonPhysics = function () {
  for (let button of buttons.rpsElementButtons) {
    button.classList.add("btn-element-shade-out");
    button.addEventListener("mousedown", function () {
      if (currentRound <= TOTAL_ROUNDS) {
        button.classList.remove("btn-element-shade-out");
        void button.offsetWidth;
        button.classList.add("btn-element-shade-in");
      }
    });
    //Triggers most actions in game
    button.addEventListener("mouseup", function () {
      button.classList.remove("btn-element-shade-in");
      void button.offsetWidth; // Force a reflow again
      button.classList.add("btn-element-shade-out");

      //Every thing that must get triggered by element buttons go bellow here

      if (currentRound <= TOTAL_ROUNDS) {
        playerChoice = button.closest("[id]").getAttribute("id");

        if (currentRound === TOTAL_ROUNDS) {
          for (icon of document.querySelectorAll(".btn-icon")) {
            icon.style.opacity = ".3";
          }
        }

        if (currentRound <= TOTAL_ROUNDS + 1) {
          roundMessageAnimation();
          currentRoundAnimation();
        }

        scrollAction();
        scoreKeeping();
        console.trace(`CURRENT ROUND: ${currentRound}`);
        currentRound++;
        round.number.textContent = `Round: ${currentRound}/${TOTAL_ROUNDS}`;
        if (currentRound > TOTAL_ROUNDS) {
          round.number.textContent = ``;
          showEndGameScreen();
        }
      }
    });
  }
};
buttonPhysics();

//* Reset Game
const replayBtn = function () {
  buttons.replay.classList.add("btn-element-shade-out");
  buttons.replay.addEventListener("mousedown", function () {
    buttons.replay.classList.remove("btn-element-shade-out");
    void buttons.replay.offsetWidth;
    buttons.replay.classList.add("btn-element-shade-in");
  });
  buttons.replay.addEventListener("mouseup", function () {
    buttons.replay.classList.remove("btn-element-shade-in");
    void buttons.replay.offsetWidth;
    buttons.replay.classList.add("btn-element-shade-out");
  });
};
buttons.replay.addEventListener("mouseup", function () {
  currentRound = 0;
  round.message.classList.remove("invisible");
  round.number.classList.remove("invisible");

  humanScore = 0;
  computerScore = 0;
  nameAndScore.human.score.textContent = 0;
  nameAndScore.computer.score.textContent = 0;
  for (icon of document.querySelectorAll(".btn-icon")) {
    icon.style.opacity = "1";
  }
  displays.humanDisplay.textContent = "Let's Play";
  displays.computerDisplay.textContent = "";
  screens.end.classList.remove("end-screen");
  screens.end.classList.remove("end-screen-win");
  screens.end.classList.remove("end-screen-lose");
  screens.end.classList.remove("end-screen-tie");
  document
    .querySelector("#endGameMessage")
    .classList.remove("end-slider-animate");
});
replayBtn();
