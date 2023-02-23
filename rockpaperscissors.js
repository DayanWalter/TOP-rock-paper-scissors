const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const resetButton = document.querySelector("#reset");

let computerLogElement = document.querySelector("#computerText");
let playerLogElement = document.querySelector("#playerText");
let resultLogElement = document.querySelector("#result")

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

  computerLogElement.innerHTML = `Computer: ${computerSelection}<br>`;

  if(event.target.id === "rock"){
    playerSelection = "Rock";
    // console.log(`Player: ${playerSelection}`);
    playerLogElement.innerHTML = `Player: ${playerSelection}<br>`;

    playRound(playerSelection, computerSelection);

  }else if(event.target.id === "paper"){
    playerSelection = "Paper";
    // console.log(`Player: ${playerSelection}`);
    playerLogElement.innerHTML = `Player: ${playerSelection}<br>`;

    playRound(playerSelection, computerSelection);

  }else if(event.target.id === "scissors"){
    playerSelection = "Scissors";
    // console.log(`Player: ${playerSelection}`);
    playerLogElement.innerHTML = `Player: ${playerSelection}<br>`;

    playRound(playerSelection, computerSelection);

  }else{
    // console.log("Something went wrong")
    logElement.innerHTML = `Something went wrong!!!`;
  }
};

// compare and checking the choices, adding scores and counting the rounds
function playRound(playerSelection, computerSelection){

  // compare choices
  const draw =(
          (computerSelection == "Rock") & (playerSelection == "Rock") || 
          (computerSelection == "Paper") & (playerSelection == "Paper") ||
          (computerSelection == "Scissors") & (playerSelection == "Scissors")
              )

  const playerWon = (
          (computerSelection == "Rock") & (playerSelection == "Paper") || 
          (computerSelection == "Paper") & (playerSelection == "Scissors") ||
          (computerSelection == "Scissors") & (playerSelection == "Rock")
              )

  const computerWon = (
          (computerSelection == "Rock") & (playerSelection == "Scissors") || 
          (computerSelection == "Paper") & (playerSelection == "Rock") ||
          (computerSelection == "Scissors") & (playerSelection == "Paper")
              )

// checking the choices, adding scores and returning string
  if(draw){
      // console.log ("Draw!");
      ++round;
      resultLogElement.innerHTML = `Draw in the ${round} round!<br>`;

  }else if(playerWon){
    // console.log ("Player won!");
    ++playerScore;
    ++round;
    resultLogElement.innerHTML = `Player got ${playerScore} Points in the ${round} round!`;
    // console.log(playerScore);
  }else if(computerWon){
    // console.log("Computer won!");
    ++computerScore;
    ++round;
    resultLogElement.innerHTML = `Computer got ${computerScore} points in the ${round} round!`;
    // console.log(computerScore);
  }else{
    // console.log ("Just Rock, Paper, Scissors; Nothing Else!");
    resultLogElement.innerHTML = `Just Rock, Paper, Scissors; Nothing Else!<br>`

// play 5 rounds then start over
  }
  if(playerScore === 5){
    // console.log("Player won 5 Rounds")
    resultLogElement.innerHTML = `PLAYER WON 5 ROUNDS!!!<br>With ${playerScore} points against ${computerScore} points.`;
    playerScore = 0;
    computerScore = 0;
    round = 0;
  }else if(computerScore === 5){
    // console.log("Computer won 5 Rounds")
    resultLogElement.innerHTML = `COMPUTER WON 5 ROUNDS!!!<br>With ${computerScore} points against ${playerScore} points.`;
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
