const rpsUI = {
  displays: {
    humanDisplay: document.querySelector("#human-display"),
    computerDisplay: document.querySelector("#computer-display-txt"),
  },
  buttons: {
    humanChoices: document.querySelector("#human-choices"),
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
  roundMessage: document.querySelector(".round-message"),
  startEndScreen: document.querySelector("#start-end-screen"),
};
const startVars = {
  scores: {
    humanScore: 0,
    computerScore: 0,
  },
  round: 0,
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
  human: {},
};
const rpsWinConditions = {
  rock: { winsAgainst: "Scissors", losesAgainst: "Paper" },
  paper: { winsAgainst: "Rock", losesAgainst: "Scissors" },
  scissors: { winsAgainst: "Paper", losesAgainst: "Rock" },
};

const tie = function () {
  if (
    rpsUI.displays.computerDisplay.textContent ===
    rpsUI.displays.humanDisplay.textContent
  ) {
    setTimeout(() => {
      rpsUI.roundMessage.textContent = "TIE";
      rpsUI.roundMessage.classList.add("slider-animate");
    }, 10);
    rpsUI.roundMessage.classList.remove("slider-animate");
  }
};

const showWinLoseTie = function (rpsElement) {
  if (
    //checks if human wins when the computer makes a "choice"(random)
    rpsUI.displays.computerDisplay.textContent ===
    rpsWinConditions[rpsElement].winsAgainst
  ) {
    rpsUI.roundMessage.textContent = "NICE ONE!";
    rpsUI.roundMessage.classList.remove("slider-animate"); //reset so it can animate again
    void rpsUI.roundMessage.offsetWidth;
    rpsUI.roundMessage.classList.add("slider-animate");
  } else if (
    rpsUI.displays.computerDisplay.textContent ===
    rpsWinConditions[rpsElement].losesAgainst
  ) {
    rpsUI.roundMessage.textContent = "Awe, TRY AGAIN!";
    rpsUI.roundMessage.classList.remove("slider-animate"); //reset so it can animate again
    void rpsUI.roundMessage.offsetWidth;
    rpsUI.roundMessage.classList.add("slider-animate");
  } else {
    tie();
  }
};

rpsUI.buttons.humanChoices.addEventListener("mouseup", function (event) {
  rpsUI.displays.computerDisplay.textContent = choices.computer.choice(); //displays computer's random selection
  const btnName = event.target.parentNode.parentNode.getAttribute("id"); //? clean up (parentNode.parentNode)

  switch (btnName) {
    case "Rock":
      rpsUI.displays.humanDisplay.textContent = choices.rock;
      showWinLoseTie("rock");
      break;
    case "Paper":
      rpsUI.displays.humanDisplay.textContent = choices.paper;
      showWinLoseTie("paper");
      break;
    case "Scissors":
      rpsUI.displays.humanDisplay.textContent = choices.scissors;
      showWinLoseTie("scissors");
      break;
    default:
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
