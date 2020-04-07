/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import './index.css';
import anime from '../node_modules/animejs/lib/anime.es.js';

// In retrospect, entirely too many global variables declared here

(function rockPaperScissors() {
  const underline = document.querySelector('#pick-sign');
  underline.style.textDecoration = 'underline';
  const underline2 = document.querySelector('#best-of-5-text');
  underline2.style.textDecoration = 'underline';

  const rockBtn = document.querySelector('#rock');
  const paperBtn = document.querySelector('#paper');
  const scissorsBtn = document.querySelector('#scissors');

  const playerSelectionText = document.querySelector('#playerSelectionText');
  const computerSelectionText = document.querySelector('#computerSelectionText');
  const resultText = document.querySelector('#resultText');

  const playerWinsNumber = document.querySelector('#playerWins');
  const computerWinsNumber = document.querySelector('#computerWins');

  playerWinsNumber.textContent = 0;
  computerWinsNumber.textContent = 0;

  const fullGameResult = document.querySelector('#fullGameWinner');

  function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    const computerPick = options[Math.floor(Math.random() * options.length)];
    const computerSelection = computerSelectionText.textContent = computerPick;

    return computerSelection;
  }

  function round() {
    const playerSelection = playerSelectionText.textContent;
    const computerSelection = computerPlay();

    if (playerSelection === 'rock') {
      if (computerSelection === 'rock') {
        resultText.textContent = 'No Decision';
      } else if (computerSelection === 'paper') {
        resultText.textContent = 'loser!, paper covers rock';
        computerWinsNumber.textContent++;
      } else if (computerSelection === 'scissors') {
        resultText.textContent = 'winner!, rock smashes scissors';
        playerWinsNumber.textContent++;
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'paper') {
        resultText.textContent = 'No Decision';
      } else if (computerSelection === 'rock') {
        resultText.textContent = 'winner!, paper covers rock';
        playerWinsNumber.textContent++;
      } else if (computerSelection === 'scissors') {
        resultText.textContent = 'loser!, scissors cuts paper';
        computerWinsNumber.textContent++;
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'scissors') {
        resultText.textContent = 'No Decision';
      } else if (computerSelection === 'rock') {
        resultText.textContent = 'loser!, rock smashes scissors';
        computerWinsNumber.textContent++;
      } else if (computerSelection === 'paper') {
        resultText.textContent = 'winner!, scissors cuts paper';
        playerWinsNumber.textContent++;
      }
    }

    return resultText.textContent;
  }


  function rock() {
    const playerSelection = playerSelectionText.textContent = 'rock';
    round();

    if (playerWinsNumber.textContent == 3) {
      fullGameResult.textContent = 'You won the game!';
      reset();
    } else if (computerWinsNumber.textContent == 3) {
      fullGameResult.textContent = 'You lost the game!';
      reset();
    }

    anime({
      targets: rockBtn,
      duration: 150,
      translateY: [0, '.3em'],
      direction: 'alternate',
      easing: 'linear',
    });
  }

  rockBtn.addEventListener('click', rock);


  function paper() {
    const playerSelection = playerSelectionText.textContent = 'paper';
    round();

    if (playerWinsNumber.textContent == 3) {
      fullGameResult.textContent = 'You won the game!';
      reset();
    } else if (computerWinsNumber.textContent == 3) {
      fullGameResult.textContent = 'You lost the game!';
      reset();
    }

    anime({
      targets: paperBtn,
      duration: 150,
      translateY: [0, '.3em'],
      direction: 'alternate',
      easing: 'linear',
    });
  }

  paperBtn.addEventListener('click', paper);

  function scissors() {
    const playerSelection = playerSelectionText.textContent = 'scissors';
    round();

    if (playerWinsNumber.textContent == 3) {
      fullGameResult.textContent = 'You won the game!';
      reset();
    } else if (computerWinsNumber.textContent == 3) {
      fullGameResult.textContent = 'You lost the game!';
      reset();
    }

    anime({
      targets: scissorsBtn,
      duration: 150,
      translateY: [0, '.3em'],
      direction: 'alternate',
      easing: 'linear',
    });
  }

  scissorsBtn.addEventListener('click', scissors);

  function reset() {
    rockBtn.removeEventListener('click', rock);
    paperBtn.removeEventListener('click', paper);
    scissorsBtn.removeEventListener('click', scissors);

    const resetBtn = document.createElement('button');

    resetBtn.style.backgroundColor = 'rgb(61, 117, 145)';
    resetBtn.style.borderRadius = '20px';
    resetBtn.style.fontFamily = "'Hind Siliguri', sans-serif";
    resetBtn.style.color = 'rgb(255, 255, 255)';
    resetBtn.style.width = '7em';

    resetBtn.textContent = 'Reset Game';
    document.getElementById('bestOfFive').appendChild(resetBtn);

    resetBtn.addEventListener('click', resetGame);

    function resetGame() {
      playerWinsNumber.textContent = 0;
      computerWinsNumber.textContent = 0;
      fullGameResult.textContent = '';

      rockBtn.addEventListener('click', rock);
      paperBtn.addEventListener('click', paper);
      scissorsBtn.addEventListener('click', scissors);

      resetBtn.remove();
    }
  }

  anime({
    targets: 'div, p',
    duration: 1500,
    delay: anime.stagger(80, { start: 300, from: 'first' }),
    opacity: [0, 1],
    translateY: ['-1rem', 0],
    direction: 'normal',
  });
}());
