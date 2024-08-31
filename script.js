// initiate and confirm script is connected to the HTML file
"use strict";
console.log("hello world");
// ****************************************************
// *************   GLOBAL VARIABLE   ******************
// ****************************************************
// CONST CONST  CONST CONST CONST CONST  CONST  CONST
let humanScore = 0;
let computerScore = 0;
const selectOne = "Rock";
const selectTwo = "Paper";
const selectThree = "Scissors";

//-----------------------------------------------------
//-----------------------------------------------------

//#####################################################
//#############   getComputerChoice   #################
//#####################################################

/* Allow the computer to choose from the "select####" 
variables. First, create a variable to store a random 
number. Then, declare another variable that starts 
empty or as null. Based on conditions determined by the 
random number, assign one of the options ("Rock," "Paper"
or "Scissors") to this variable, enabling the function 
to make a random choice.*/

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
    /*NOTES: ////How do I make sure the computer doesn't 
 ////start with the same choice for every first round.
 Find a way to stop the computer from selecting the same
 option more than twice.*/

 //#####################################################
//###############   getHumanChoice   ##################
//#####################################################

/* The getHumaneChoice function prompts the user to
enter a choice of "Rock," "Paper," or "Scissors." It
sanitizes or corrects the input to match these options 
or skips sanitization if unnecessary. If the user 
misspells an option or enters an invalid choice, the 
function repeatedly prompts the user until a valid 
choice is entered.*/

let getHumanChoice = function () {
    let humanInput = prompt("Let's play Rock, Paper, Scissors").toLowerCase();
    if (humanInput === selectOne || humanInput === selectTwo ||humanInput === selectThree){
        return humanInput;
    };
    
    const cleanHumanInput = function (humanInput) {
        const toUpperFirst = humanInput.charAt(0).toUpperCase();
        const restOfString = humanInput.slice(1);
        const sanitizedString = toUpperFirst + restOfString;
        return sanitizedString;
    };
    
    //----  LOCAL FUNCTION CALLS: (getHumanChoice()) ----
    const sanitizedHumanInput = cleanHumanInput(humanInput);
    if (
        sanitizedHumanInput === selectOne ||
        sanitizedHumanInput === selectTwo ||
        sanitizedHumanInput === selectThree
    ) {
        return sanitizedHumanInput;
    } else {// ROUND RESET
        alert("That is not a valid choice, try again");
        getComputerChoice();
        return getHumanChoice();
    }
};

//#####################################################
//#################   playRound   #####################
//#####################################################

/*playRound is the logic for a single round. Depending on 
the conditions of the if statements, the user will retrieve
a message letting them know if they won or lost round, as well
the scores increment by 1. */

let round = 0;
const playRound = function (humanChoice, computerChoice) {
    if ((humanChoice === computerChoice)) {
        alert("You tie with the computer this round, try again");
        //NOTE: Still not sure if the next two variables
        // and the function call arguments are necessary 
        let tieComputerChoice = getComputerChoice();
        console.log(tieComputerChoice);
        getComputerChoice(); 
        let tieHumanChoice = getHumanChoice();
        // console.log(playRound(tieHumanChoice,tieComputerChoice));
    } else {
        const humanWins = () =>  {
            humanScore++;
            round++
            return (alert (`You win this round(${round}/5). (human:${humanScore}/5 computer:${computerScore}/5)`),"the human scored");
        };
            if (humanChoice === selectOne && computerChoice === selectThree) {
                return humanWins();
            }else if (humanChoice === selectTwo && computerChoice === selectOne) {
                    return humanWins();
                }else if (humanChoice === selectThree && computerChoice === selectTwo) {
                    return humanWins();
                } else {
                    computerScore++;
                    round++
                    return (alert(`You lose this round(${round}/5). (${humanScore}/5 computer:${computerScore}/5)`),"the computer scored");
                }
            }
            
        };
        
        
        // ****************************************************
        // *****   FUNCTION CALLS & FULL GAME LOGIC    ********
        // ****************************************************
        /* As long as less than 5 rounds have been played, execute the 
        computer choice function, human choice function, the the
        logic for a single round. If either human or computer score
        is 3 points more then other or who ever has the highest score 
        when all 5 rounds are played. Lastly after each game, when
        a full game is played, reset any tracking variable and call
        the the playGame function.  */
        const playGame = function(){
            for (let i = 1 ; i<=5 ; i++){
            let computerChoice = getComputerChoice();
            console.log("Initial computer choice: " + computerChoice);
            let humanChoice = getHumanChoice();
            console.log("Initial human choice: " + humanChoice);
            const roundPlayed = playRound(humanChoice,computerChoice);
            console.log("Last line= " + roundPlayed);
            console.log("human: " + humanScore,"computer: " + computerScore)
            if (humanScore ===  5 && (humanScore > computerScore)){
                alert("Awesome!, You can call yourself smarter than a computer. You win!")
                return;
            }else if (humanScore > computerScore + 2) {
                alert("Awesome!, You can call yourself smarter than a computer. You win!");
                return;
            }else if(i === 5 && (computerScore > humanScore)){
                alert("You know...computers are actually pretty dumb. You lose.");
                return;
            }
        }
        
    };
    let playAgain = true;
    
    while (playAgain){
        humanScore = 0;
        computerScore = 0;
        round = 0;
        console.log(humanScore, computerScore);
        playGame();
        alert ("Hit enter to play again");
    };    

    /*NOTES: I believe I can condense the code a bit. I got the game to work for now and will return for
    either some more after thoughts and learn what snippets of code can be used again in the future. Lastly
    I will make sure there is good comments and documentation is complete */