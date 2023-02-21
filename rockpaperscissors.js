// computer randomly returns 1 of 3 options
function getComputerChoice(){

    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);   

    return choice[random];

}
// compare choices
function playRound(playerSelection, computerSelection){

  const draw =(
          (computerSelection == "Rock") & (playerSelection.toLowerCase() == "rock") || 
          (computerSelection == "Paper") & (playerSelection.toLowerCase() == "paper") ||
          (computerSelection == "Scissors") & (playerSelection.toLowerCase() == "scissors")
              )

  const playerWon = (
          (computerSelection == "Rock") & (playerSelection.toLowerCase() == "paper") || 
          (computerSelection == "Paper") & (playerSelection.toLowerCase() == "scissors") ||
          (computerSelection == "Scissors") & (playerSelection.toLowerCase() == "rock")
              )

  const computerWon = (
          (computerSelection == "Rock") & (playerSelection.toLowerCase() == "scissors") || 
          (computerSelection == "Paper") & (playerSelection.toLowerCase() == "rock") ||
          (computerSelection == "Scissors") & (playerSelection.toLowerCase() == "paper")
              )

// checking the choices and returning string
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

function getPlayerChoice(){

}


// play 5 Rounds
function game() {
// score basis at the beginning
    let playerScore = 0;
    let computerScore = 0;

    // for (let i = 0; i < 1; i++) {

      const computerSelection = getComputerChoice();
      console.log(getComputerChoice());
      // const playerSelection = prompt("Enter rock, paper, or scissors:");
      const playerSelection = document.querySelector("#playerSelection");


      const rockButton = document.getElementById("rock");
      const paperButton = document.querySelector("#paper");
      const scissorsButton = document.querySelector("#scissors");
    
    
      function rockSelection(){
        return playerSelection.textContent = "rock";
      };
    
      function paperSelection(){
        return playerSelection.textContent = "paper";
      };
    
      function scissorsSelection(){
        return playerSelection.textContent = "scissors";
      };
    
    
      rockButton.addEventListener("click", rockSelection);
      paperButton.addEventListener("click", paperSelection);
      scissorsButton.addEventListener("click", scissorsSelection);

      const result = playRound(playerSelection, computerSelection);

      // console.log(`Round ${i + 1}: ${result}`);

// adding scores
      if(result === "Player won!") {
        playerScore++;
      }else if(result === "Computer won!") {
        computerScore++;
      }
    // }

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