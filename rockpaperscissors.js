const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const resetButton = document.querySelector("#reset");

  rockButton.addEventListener("click", getPlayerSelection);
  paperButton.addEventListener("click",getPlayerSelection);
  scissorsButton.addEventListener("click",getPlayerSelection);
  
  resetButton.addEventListener("click", startOver);

function startOver(){
  location.reload()
}

let playerScore = 0;
let computerScore = 0;
let round = 0;

// computer randomly returns 1 of 3 options
function getComputerChoice(){
  const choice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choice.length);   

  return choice[random];
};

// player selects
function getPlayerSelection(event) {
  const computerSelection = getComputerChoice();
  // console.log(`Computer: ${computerSelection}`);

  let logElement = document.getElementById("log");
  logElement.innerHTML += `Computer: ${computerSelection}<br>`;

  if(event.target.id === "rock"){
    playerSelection = "rock";
    // console.log(`Player: ${playerSelection}`);
    logElement.innerHTML += `Player: ${playerSelection}<br>`;

    playRound(playerSelection, computerSelection);

  }else if(event.target.id === "paper"){
    playerSelection = "paper";
    // console.log(`Player: ${playerSelection}`);
    logElement.innerHTML += `Player: ${playerSelection}<br>`;

    playRound(playerSelection, computerSelection);

  }else if(event.target.id === "scissors"){
    playerSelection = "scissors";
    // console.log(`Player: ${playerSelection}`);
    logElement.innerHTML += `Player: ${playerSelection}<br>`;

    playRound(playerSelection, computerSelection);

  }else{
    // console.log("Something went wrong")
    logElement.innerHTML += `Something went wrong!!!`;
  }
};

// compare and checking the choices, adding scores and counting the rounds
function playRound(playerSelection, computerSelection){
  let logElement = document.getElementById("log");

  // compare choices
  const draw =(
          (computerSelection == "Rock") & (playerSelection == "rock") || 
          (computerSelection == "Paper") & (playerSelection == "paper") ||
          (computerSelection == "Scissors") & (playerSelection == "scissors")
              )

  const playerWon = (
          (computerSelection == "Rock") & (playerSelection == "paper") || 
          (computerSelection == "Paper") & (playerSelection == "scissors") ||
          (computerSelection == "Scissors") & (playerSelection == "rock")
              )

  const computerWon = (
          (computerSelection == "Rock") & (playerSelection == "scissors") || 
          (computerSelection == "Paper") & (playerSelection == "rock") ||
          (computerSelection == "Scissors") & (playerSelection == "paper")
              )

// checking the choices, adding scores and returning string
  if(draw){
      // console.log ("Draw!");
      ++round;
      logElement.innerHTML += `Draw in the ${round} round!<br><hr>`;

  }else if(playerWon){
    // console.log ("Player won!");
    ++playerScore;
    ++round;
    logElement.innerHTML += `Player won!<br>Player got ${playerScore} Points in the ${round} round!<hr>`;
    // console.log(playerScore);
  }else if(computerWon){
    // console.log("Computer won!");
    ++computerScore;
    ++round;
    logElement.innerHTML += `Computer won!<br>Computer got ${computerScore} Points in the ${round} round!<hr>`;
    // console.log(computerScore);
  }else{
    // console.log ("Just Rock, Paper, Scissors; Nothing Else!");
    logElement.innerHTML += `Just Rock, Paper, Scissors; Nothing Else!<br><hr>`

// play 5 rounds then start over
  }
  if(playerScore === 5){
    // console.log("Player won 5 Rounds")
    logElement.innerHTML += `PLAYER WON 5 ROUNDS!!!<br><hr><hr>`;
    playerScore = 0;
    computerScore = 0;
    round = 0;
  }else if(computerScore === 5){
    // console.log("Computer won 5 Rounds")
    logElement.innerHTML += `COMPUTER WON 5 ROUNDS!!!<br><hr><hr>`;
    playerScore = 0;
    computerScore = 0;
    round = 0;
  }

}




// // play 5 Rounds
// function game() {
// // score basis at the beginning
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
// let playerSelection="";
// let computerSelection="";
//       const result = playRound(playerSelection, computerSelection);

//       console.log(`Round ${i + 1}: ${result}`);

// // adding scores
//       if(result === "Player won!") {
//         playerScore++;
//       }else if(result === "Computer won!") {
//         computerScore++;
//       }
//     // }

// // compare the scores at the end of all 5 Rounds
//     if(playerScore > computerScore) {
//       console.log(`The player wins the game with a score of ${playerScore} to ${computerScore}`);

//     }else if(computerScore > playerScore) {
//       console.log(`The computer wins the game with a score of ${computerScore} to ${playerScore}`);

//     }else{
//       console.log(`The game is a draw with a score of ${playerScore} to ${computerScore}`);
//     }
//   }
// }
//   game();
