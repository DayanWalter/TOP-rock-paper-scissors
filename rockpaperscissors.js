const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
      rockButton.addEventListener("click", getPlayerSelection);
      paperButton.addEventListener("click",getPlayerSelection);
      scissorsButton.addEventListener("click",getPlayerSelection);

let playerSelection = "";


// computer randomly returns 1 of 3 options
function getComputerChoice(){

  const choice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choice.length);   

  return choice[random];
};
const computerSelection = getComputerChoice();
console.log(computerSelection);

// player selects
function getPlayerSelection(event) {
  if(event.target.id === "rock"){
    console.log("Rock Button Pressed")
    playerSelection = "rock";
    playRound(playerSelection, computerSelection)
  }else if(event.target.id === "paper"){
    console.log("Paper Button Pressed")
    playerSelection = "paper";
    playRound(playerSelection, computerSelection)
  }else if(event.target.id === "scissors"){
    console.log("Scissors Button Pressed")
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection)
  }else{
    console.log("Something went wrong")
  }
  };
  console.log(playerSelection);


// compare choices
function playRound(playerSelection, computerSelection){

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

// checking the choices and returning string
  if(draw){
      console.log ("Draw!");
  }else if(playerWon){
    console.log ("Player won!");
  }else if(computerWon){
    console.log("Computer won!");
  }else{
    console.log ("Just Rock, Paper, Scissors; Nothing Else!");
  }

}


// function playerChoice(){
//   let playerSelection = document.querySelector("#playerSelection");
//   playerSelection="";

//   const paperButton = document.querySelector("#paper");
//   const rockButton = document.querySelector("#rock");
//   const scissorsButton = document.querySelector("#scissors");
  
//   paperButton.addEventListener("click", ()=>{playerSelection.textContent="paper"});
  
//   rockButton.addEventListener("click", ()=>{playerSelection.textContent="rock"});
 
//   scissorsButton.addEventListener("click", ()=>{playerSelection.textContent="scissors"});
  
//   if(playerSelection.textContent="rock"){
//     return playerSelection="Rock";
//   }else if(playerSelection.textContent="paper"){
//     return playerSelection="Paper";
//   }else if(playerSelection.textContent="scissors"){
//     return playerSelection="Scissors";
//   }else{
//     return "Some"
//   }

  // return playerSelection;
// }
// console.log(playerChoice());




// play 5 Rounds
// function game() {
// // score basis at the beginning
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {

//       const computerSelection = getComputerChoice();
//       console.log(computerSelection);
//       const playerSelection = "rock";
//       console.log(playerSelection);
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
  // game();
 