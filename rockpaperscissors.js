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

// create a function called game()
function game(){
// make a loop for playing 5 rounds of the game
for (let i = 0; i < 5; i++){
    if(i==0){
        console.log("Round 1");
    }else if(i==1){
        console.log("Round 2");
    }else if(i==2){
        console.log("Round 3");
    }else if(i==3){
        console.log("Round 4");
    }else{
        console.log("Round 5");
    }
    return;
}

// take playRound() and use it in the loop
// print the result of every round with console.log

}

console.log(game());

// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//   console.log(i);
// }