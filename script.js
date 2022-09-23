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

function compareSelections(playerSelection, computerSelection) {
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
  
  
  if(playerSelection == computerSelection){
    return ("Tie! Both player chose " + playerSelection);
  }
  else if(playerSelection == "Rock"){
    if(computerSelection == "Scissors"){
      pScore++;
      return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else{
      cScore++;
      return ("You lose! " + computerSelection + " beats " + playerSelection);
    }
  }
  else if(playerSelection == "Paper"){
    if(computerSelection == "Rock"){
      pScore++;
      return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else{
      cScore++;
      return ("You lose! " + computerSelection + " beats " + playerSelection);
    }
  }
  else if(playerSelection == "Scissors"){
    if(computerSelection == "Paper"){
      pScore++;
      return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else{
      cScore++;
      return ("You lose! " + computerSelection + " beats " + playerSelection);
    }
  }
}

function game(){
  playerInput = prompt("Choose Rock, Paper or Scissors");
  console.log(compareSelections(playerInput, getComputerChoice()));
}

function playRound(e){
  const para = document.createElement('p');
  para.textContent = compareSelections(e.target.id, getComputerChoice()) + ` ${pScore} - ${cScore}`;
  results.appendChild(para);
  if(pScore===5 || cScore === 5){
    const paraWinner = document.createElement('p');
    if(pScore===5){
      paraWinner.textContent = " Player Wins!!!"
    }
    else if(cScore === 5){
      paraWinner.textContent = " Computer Wins!!!"
    }

    buttons.forEach(button => button.removeEventListener('click', playRound));
    results.appendChild(paraWinner);
    const rstBtn = document.createElement('button');
    rstBtn.textContent = 'Play Again' 
    rstBtn.addEventListener('click', restartGame)
    results.appendChild(rstBtn);

  }
  
  
}

function restartGame(){
  results.innerHTML = '';
  pScore = 0;
  cScore = 0;
  buttons.forEach(button => button.addEventListener('click', playRound));
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

const results = document.querySelector('.results');  
let pScore = 0;
let cScore = 0;

//game();