const rpsUI = {
  displays: {
    humanDisplay: document.querySelector("#human-display"),
    computerDisplay: document.querySelector("#computer-display span"),
  },
  buttons: {
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
  round: document.querySelector(".round"),
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
    randomNumber: Math.floor(Math.random() * 3 + 1),
    choice: function () {
      if (this.randomNumber === 1) {
        return choices.rock;
      } else if (this.randomNumber === 2) {
        return choices.paper;
      } else {
        return choices.scissors;
      }
    },
  },
  human: {},
};
const rpsWinConditions = {
  rock: { winsAgainst: "scissors", losesAgainst: "paper" },
  paper: { winsAgainst: "rock", losesAgainst: "scissors" },
  scissors: { winsAgainst: "paper", losesAgainst: "rock" },
};
// rpsUI.displays.humanDisplay.textContent = "Rock";
rpsUI.displays.computerDisplay.textContent = "Annika";
rpsUI.displays.humanDisplay.textContent = "Roan";
rpsUI.buttons.rock.style.backgroundColor = "red";
rpsUI.buttons.paper.style.backgroundColor = "yellow";
rpsUI.buttons.scissors.style.backgroundColor = "green";
rpsUI.buttons.replay.style.backgroundColor = "orange";
rpsUI.nameAndScore.human.name.style.color = "#FF75DB";
rpsUI.nameAndScore.human.score.style.color = "#42B34D";
rpsUI.nameAndScore.computer.name.style.color = "#00B2B1";
rpsUI.nameAndScore.computer.score.style.color = "#DB2B23";
rpsUI.round.textContent = "Ime Da Boss!!!";
// rpsUI.startEndScreen.classList.add("start-end-swipe");
