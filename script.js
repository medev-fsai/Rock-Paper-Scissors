
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

console.log(getComputerChoice());