let pScore = 0;
let cScore = 0;

function getComputerChoice() {
  let tab = ['rock', 'paper', 'scisors'];
  return tab[Math.floor(Math.random() * tab.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 0;
  }
  if (
    (playerSelection == 'rock' && computerSelection == 'scisors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scisors' && computerSelection == 'paper')
  ) {
    pScore++;
    return 1;
  } else {
    cScore++;
    return -1;
  }
}

// function game() {
//   count = 1;
//   computerWons = 0;
//   playerWons = 0;

//   do {
//     userChoice = prompt('Rock, paper or scisors?').toLowerCase();
//     round = playRound(userChoice, getComputerChoice());
//     console.log(round);
//     if (round.slice(0, 8) === 'You won.') {
//       playerWons++;
//     } else if (round.slice(0, 16) === "It's a tiebreak.") {
//       continue;
//     } else {
//       computerWons++;
//     }
//     count++;
//   } while (count <= 5);

//   console.log(`Results: Player: ${playerWons} vs Computer: ${computerWons}`);
// }

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scisorsBtn = document.querySelector('#scisors');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const scorePara = document.querySelector('.score-para');

rockBtn.addEventListener('click', () => playerChoice('rock'));
paperBtn.addEventListener('click', () => playerChoice('paper'));
scisorsBtn.addEventListener('click', () => playerChoice('scisors'));

function playerChoice(playerSelection) {
  const computerSelection = getComputerChoice();

  game = playRound(playerSelection, computerSelection);
  changeResult(game, playerSelection, computerSelection);

  if (pScore === 5 || cScore === 5) {
    if (pScore === 5) {
      scorePara.textContent = 'You won this game.';
    } else {
      scorePara.textContent = 'Computer won this game.';
    }
    pScore = 0;
    cScore = 0;
    playerScore.textContent = `Player: ${pScore}`;
    computerScore.textContent = `Computer: ${cScore}`;
    setTimeout(() => {
      scorePara.textContent = '';
    }, 3000);
  }
}

function changeResult(result, playerSelection, computerSelection) {
  switch (result) {
    case 0:
      scorePara.textContent = "It's a tiebreak.";
      break;
    case 1:
      scorePara.textContent = `You won. ${capitalizeFirstLetter(
        playerSelection
      )} beats ${capitalizeFirstLetter(computerSelection)}`;
      playerScore.textContent = `Player: ${pScore}`;
      break;
    case -1:
      scorePara.textContent = `You lost. ${capitalizeFirstLetter(
        computerSelection
      )} beats ${capitalizeFirstLetter(playerSelection)}`;
      computerScore.textContent = `Computer: ${cScore}`;
      break;
    default:
      break;
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
