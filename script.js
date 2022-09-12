function getComputerChoice(){
  let randomNumber = Math.floor(Math.random()*3);
  if (randomNumber === 0) {
    return "Rock";
  }
  else if (randomNumber === 1) {
    return "Paper"
  }
  else if (randomNumber === 2) {
    return "Scissors"
  }
  
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
  
  
  if(playerSelection == computerSelection){
    return ("Tie! Both player chose " + playerSelection);
  }
  else if(playerSelection == "Rock"){
    if(computerSelection == "Scissors"){
      return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else{
      return ("You lose! " + computerSelection + " beats " + playerSelection);
    }
  }
  else if(playerSelection == "Paper"){
    if(computerSelection == "Rock"){
      return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else{
      return ("You lose! " + computerSelection + " beats " + playerSelection);
    }
  }
  else if(playerSelection == "Scissors"){
    if(computerSelection == "Paper"){
      return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else{
      return ("You lose! " + computerSelection + " beats " + playerSelection);
    }
  }
}

function game(){
  for (let i = 0; i < 5; i++) {
    playerInput = prompt("Choose Rock, Paper or Scissors")
    console.log(playRound(playerInput, getComputerChoice()))
 }
}

game();