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
const playerSelection = "rock";

//computer choose and player choose
//compare booth choices
//if computer choose rock and player choose rock - again
//if compoter choose rock and player choose paper - player won
//if computer choose rock and player choose scissors - computer won
//if computer choose paper and player choose rock - computer won
//if computer choose paper and player choose paper - again
//if computer choose paper and player choose scissors - player won
//if computer choose scissors and player choose rock - player won
//if computer choose scissors and player choose paper - computer won
//if computer choose scissors and player choose scissors - again 
function playRound(playerSelection, computerSelection){
    if (computerSelection = "Rock"){}
}
console.log(playRound(playerSelection, computerSelection));