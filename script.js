/*
Implementation of the "Rock - Paper - Scissors" game.
The game has no GUI, it plays entirely on the console.
*/

function getComputerChoice(){
    //randomly returns "rock", "paper", "scissors"
    //HOW TO? Using Math.random method. It is a uniform distribution over the interval [0, 1].
    //Numbers in [0, 1/3], [1/3, 2/3] and [2/3, 1] are output with the same probability.
    //Pseudo code:
    //Get number between 0 and 1.
    let guess = Math.random();
    let computerChoice = (guess < 1/3) ? "rock": (guess < 2/3) ? "paper" : "scissors";
    return computerChoice;
};

function getHumanChoice(){
    //Prompt the user for his choice and return that choice.
    let userChoice = prompt("Your turn to play: enter 'rock', 'paper', or 'scissors':", "paper");
    return userChoice;
};

function playRound(computerChoice, humanChoice){
    //Play one round of the game. Requires computer choice and human choice.
    //STEP 1: Get players choices and process them: valid value "rock", "paper", "scissors".
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();

    //When called from playGame, playRound cannot access human/computerScores. 
    //Define new score related to round
    //Modify function playRound to return the round winner.
    let humanRoundScore = 0, computerRoundScore = 0;

    //STEP 2: Implement game logic
    if(computerChoice === "rock"){
        switch (humanChoice){
            case "paper":
                humanRoundScore++;
                //console.log(`You win: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerRoundScore}:${humanRoundScore} You`);
                break;
            case "scissors":
                computerRoundScore++;
                //console.log(`You loose: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerRoundScore}:${humanRoundScore} You`);
                break;
            case "rock":
                //console.log(`You choose what the computer did!\nSCORE: Computer ${computerRoundScore}:${humanRoundScore} You`);
                break;
        }
    }else if(computerChoice === "paper"){
        switch (humanChoice){
            case "scissors":
                humanRoundScore++;
                //console.log(`You win: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerRoundScore}:${humanRoundScore} You`);
                break;
            case "rock":
                computerRoundScore++;
                //console.log(`You loose: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerRoundScore}:${humanRoundScore} You`);
                break;
            case "paper":
                //console.log(`You choose what the computer did!\nSCORE: Computer ${computerRoundScore}:${humanRoundScore} You`);
                break;
        }
    }else{
        switch (humanChoice){
            case "rock":
                humanRoundScore++;
                //console.log(`You win: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerRoundScore}:${humanRoundScore} You`);
                break;
            case "paper":
                computerRoundScore++;
                //console.log(`You loose: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerRoundScore}:${humanRoundScore} You`);
                break;
            case "scissors":
                //console.log(`You choose what the computer did!\nSCORE: Computer ${computerRoundScore}:${humanRoundScore} You`);
                break;
        }
    }
    return (computerRoundScore > humanRoundScore) ? "computer" : 
           (computerRoundScore == humanRoundScore) ? "both" : "human";
};

let computerScore = 0, humanScore = 0;
let round = 1;

const scoreDisplay = document.querySelector(".score");
const winner = document.querySelector(".winner");
//scoreDisplay.addEventListener("roundFinished", showRoundScore);

let buttonsList = document.querySelectorAll("button");
buttonsList.forEach((item) => {
    item.addEventListener("click", () => {
        
        const humanChoice = item.id;
        const computerChoice = getComputerChoice();
        const roundWinner = playRound(computerChoice, humanChoice);
        //console.log(roundWinner) 
        switch (roundWinner){
            case "computer":
                computerScore++;
                break;
            case "human":
                humanScore++;
                break;
            case "both":
                break;
        }
        showRoundScore(scoreDisplay);
        const maxScore = getMaxScore(computerScore, humanScore);
        if (maxScore === 5){
            displayWinner(winner);
            initGame();
        }
         
    });
});

function getMaxScore(firstScore, secondScore){
    return firstScore > secondScore ? firstScore : secondScore;
}

function showRoundScore(item){
    item.textContent = `SCORE: Computer ${computerScore} : ${humanScore} You`;
    return;
}   
function displayWinner(item){
    let gameWinner = computerScore > humanScore ? "computer" : "you";
    item.textContent = `Game winner: ${gameWinner}`;
    return;
};

function initGame() {
    computerScore = 0;
    humanScore = 0;
    round = 1;
}


