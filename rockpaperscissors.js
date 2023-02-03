// Pseudocode
// let computer randomly return 1 of 3 options
function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);   
// return the random value
    return choice[random];
}
// present the choice
getComputerChoice();
console.log(getComputerChoice());
