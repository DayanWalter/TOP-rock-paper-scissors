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

//compare both choices with a funcion
function playRound(playerSelection, computerSelection){

// if 
// computer choose rock & player choose rock
// or
// computer choose paper & player choose paper
// or
// computer choose scissors & player choose scissors
// then
// draw
const draw = ((computerSelection == "Rock") & (playerSelection.toLowerCase() == "rock") || 
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
if(draw){
    return ("Draw!");
}else if(playerWon){
    return ("Player won!");
}else if(computerWon){
    return("Computer won!");
}else{
    return ("Just Rock, Paper, Scissors; Nothing Else!");
}

}

// create a function called game()
function game() {
// define the score basis at the beginning
    let playerScore = 0;
    let computerScore = 0;
// make a loop with 5 iterations/rounds
    for (let i = 0; i < 5; i++) {
// define constants
// define const computerSelection and take the input from the function getComputerChoice()
      const computerSelection = getComputerChoice();
// define const playerSelection and take the input from a prompt
      const playerSelection = prompt("Enter rock, paper, or scissors:");
// define const result by taking the input from the function playRound(playerSelection, computerSelection)
      const result = playRound(playerSelection, computerSelection);
// log the results of each Round
      console.log(`Round ${i + 1}: ${result}`);

// add scores via if-function
// if player won - playerScore++
      if (result === "Player won!") {
        playerScore++;
// if computer won - computerScore++
      } else if (result === "Computer won!") {
        computerScore++;
      }
    }
// compare the scores at the end of all 5 Rounds
// if playerScore is greater than computerscore
    if (playerScore > computerScore) {
// log player wins the game with a score of "playerScore" to "computerScore"
      console.log(`The player wins the game with a score of ${playerScore} to ${computerScore}`);
// else if computerScore is greater than playerScore
    } else if (computerScore > playerScore) {
//log computer wins the game with a score of computerScore to playerScore
      console.log(`The computer wins the game with a score of ${computerScore} to ${playerScore}`);
// else draw
    } else {
// log game is a draw with a score of playerScore to computerScore
      console.log(`The game is a draw with a score of ${playerScore} to ${computerScore}`);
    }
  }
// invoke function
  game();