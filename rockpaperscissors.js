// Pseudocode
// let computer randomly return 1 of 3 options
function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);   
// return the random value
    return choice[random];
}

// present the choice
const computerSelection = getComputerChoice();
console.log(computerSelection);
//the player chooses 1 of 3 options
const playerSelection = "paper";


//computer choose and player choose
//compare booth choices
function playRound(playerSelection, computerSelection){

// if 
// computer choose rock & player choose rock
// or
// computer choose paper & player choose paper
// or
// computer choose scissors & player choose scissors
// than
// stale
const stale = ((computerSelection == "Rock") & (playerSelection == "rock") || 
(computerSelection == "Paper") & (playerSelection == "paper") ||
(computerSelection == "Scissors") & (playerSelection == "scissors"))

// if
// computer choose rock & player choose paper
// or
// computer choose paper & player choose scissors
// or
// computer choose scissors & player choose rock
// than
// player won
const playerWon = (computerSelection == "Rock") & (playerSelection == "paper") || 
(computerSelection == "Paper") & (playerSelection == "scissors") ||
(computerSelection == "Scissors") & (playerSelection == "rock")

// if
// computer choose rock & player choose scissors
// or
// computer choose paper & player choose rock
// or
// computer choose scissors & player choose paper
// than
// computer won
const computerWon = (computerSelection == "Rock") & (playerSelection == "scissors") || 
(computerSelection == "Paper") & (playerSelection == "rock") ||
(computerSelection == "Scissors") & (playerSelection == "paper")

// If statement with all constants
if(stale){
    console.log("Stale!")
}else if(playerWon){
    console.log("Player won!")
}else if(computerWon){
    console.log("Computer won!")
}else{
    console.log("What happened?!")
}
}
console.log(playRound());