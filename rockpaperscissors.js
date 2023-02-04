// Pseudocode
// the computer randomly returns 1 of 3 options
function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);   
// return the random value
    return choice[random];
}

// present the choice of the computer and write it in a constant
const computerSelection = getComputerChoice();
console.log(computerSelection);

//the player chooses 1 of 3 options
// present the choice of the player and write it in a constant
const playerSelection = "RoCk";
console.log(playerSelection);

//computer and player choose

//compare both choices with a funcion
function playRound(playerSelection, computerSelection){

// if 
// computer choose rock & player choose rock
// or
// computer choose paper & player choose paper
// or
// computer choose scissors & player choose scissors
// then
// stale
const stale = ((computerSelection == "Rock") & (playerSelection.toLowerCase() == "rock") || 
(computerSelection == "Paper") & (playerSelection.toLowerCase() == "paper") ||
(computerSelection == "Scissors") & (playerSelection.toLowerCase() == "scissors"))

// if
// computer choose rock & player choose paper
// or
// computer choose paper & player choose scissors
// or
// computer choose scissors & player choose rock
// then
// player won
const playerWon = (computerSelection == "Rock") & (playerSelection.toLowerCase() == "paper") || 
(computerSelection == "Paper") & (playerSelection.toLowerCase() == "scissors") ||
(computerSelection == "Scissors") & (playerSelection.toLowerCase() == "rock")

// if
// computer choose rock & player choose scissors
// or
// computer choose paper & player choose rock
// or
// computer choose scissors & player choose paper
// then
// computer won
const computerWon = (computerSelection == "Rock") & (playerSelection.toLowerCase() == "scissors") || 
(computerSelection == "Paper") & (playerSelection.toLowerCase() == "rock") ||
(computerSelection == "Scissors") & (playerSelection.toLowerCase() == "paper")

// If statement checking the constants
if(stale){
    return ("Stale!");
}else if(playerWon){
    return ("Player won!");
}else if(computerWon){
    return("Computer won!");
}else{
    return ("What happened?!");
}

}
playRound(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));

const endResult = playRound(playerSelection, computerSelection);
console.log(endResult);
