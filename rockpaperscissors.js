// computer randomly returns 1 of 3 options
function getComputerChoice(){

    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);   

    return choice[random];
}
// compare choices
function playRound(playerSelection, computerSelection) {
  const rules = {
  "rock": {
  "rock": "Draw!",
  "paper": "Computer won!",
  "scissors": "Player won!"
  },
  "paper": {
  "rock": "Player won!",
  "paper": "Draw!",
  "scissors": "Computer won!"
  },
  "scissors": {
  "rock": "Computer won!",
  "paper": "Player won!",
  "scissors": "Draw!"
  }
  };
  
  playerSelection = playerSelection.toLowerCase();
  const result = rules[playerSelection][computerSelection.toLowerCase()];
  
  return result ? result : "Just Rock, Paper, Scissors; Nothing Else!";
  }

// play 5 Rounds
function game() {
// score basis at the beginning
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

      const computerSelection = getComputerChoice();
      const playerSelection = prompt("Enter rock, paper, or scissors:");
      const result = playRound(playerSelection, computerSelection);

      console.log(`Round ${i + 1}: ${result}`);

// adding scores
      if(result === "Player won!") {
        playerScore++;
      }else if(result === "Computer won!") {
        computerScore++;
      }
    }

// compare the scores at the end of all 5 Rounds
    if(playerScore > computerScore) {
      console.log(`The player wins the game with a score of ${playerScore} to ${computerScore}`);

    }else if(computerScore > playerScore) {
      console.log(`The computer wins the game with a score of ${computerScore} to ${playerScore}`);

    }else{
      console.log(`The game is a draw with a score of ${playerScore} to ${computerScore}`);
    }
  }

game();