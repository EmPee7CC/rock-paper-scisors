function getComputerChoice() {
  let tab = ['rock', 'paper', 'scisors'];
  return tab[Math.floor(Math.random() * tab.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection)
    return `It's a tiebreak. You both picked ${playerSelection}`;
  else if (playerSelection == 'rock' && computerSelection == 'scisors')
    return `You won. ${playerSelection} beats ${computerSelection}`;
  else if (playerSelection == 'paper' && computerSelection == 'rock')
    return `You won. ${playerSelection} beats ${computerSelection}`;
  else if (playerSelection == 'scisors' && computerSelection == 'paper')
    return `You won. ${playerSelection} beats ${computerSelection}`;
  else return `You lose. ${computerSelection} beats ${playerSelection}`;
}

function game() {
  count = 1;
  computerWons = 0;
  playerWons = 0;

  do {
    userChoice = prompt('Rock, paper or scisors?').toLowerCase();
    round = playRound(userChoice, getComputerChoice());
    console.log(round);
    if (round.slice(0, 8) === 'You won.') {
      playerWons++;
    } else if (round.slice(0, 16) === "It's a tiebreak.") {
      continue;
    } else {
      computerWons++;
    }
    count++;
  } while (count <= 5);

  console.log(`Results: Player: ${playerWons} vs Computer: ${computerWons}`);
}

game();
// console.log(userChoice);
// playRound(userChoice, getComputerChoice());
