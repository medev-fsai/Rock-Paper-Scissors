let humanScore = 0;
let computerScore = 0;

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

    //STEP 2: Implement game logic
    if(computerChoice === "rock"){
        switch (humanChoice){
            case "paper":
                humanScore++;
                console.log(`You win: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerScore}:${humanScore} You`);
                break;
            case "scissors":
                computerScore++;
                console.log(`You loose: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerScore}:${humanScore} You`);
                break;
            case "rock":
                console.log(`You choose what the computer did!\nSCORE: Computer ${computerScore}:${humanScore} You`);
                break;
        }
    }else if(computerChoice === "paper"){
        switch (humanChoice){
            case "scissors":
                humanScore++;
                console.log(`You win: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerScore}:${humanScore} You`);
                break;
            case "rock":
                computerScore++;
                console.log(`You loose: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerScore}:${humanScore} You`);
                break;
            case "paper":
                console.log(`You choose what the computer did!\nSCORE: Computer ${computerScore}:${humanScore} You`);
                break;
        }
    }else{
        switch (humanChoice){
            case "rock":
                humanScore++;
                console.log(`You win: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerScore}:${humanScore} You`);
                break;
            case "paper":
                computerScore++;
                console.log(`You loose: computer choice ${computerChoice} vs yours ${humanChoice}.\nSCORE: Computer ${computerScore}:${humanScore} You`);
                break;
            case "scissors":
                console.log(`You choose what the computer did!\nSCORE: Computer ${computerScore}:${humanScore} You`);
                break;
        }
    }
    return;
};

//console.log(getComputerChoice());
//console.log(getHumanChoice());
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(computerChoice, humanChoice);