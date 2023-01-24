'use strict';

// Generate random number
function generateRandom() {
  return Math.trunc(Math.random() * 6) + 1;
}
// player--active
const diceImage = document.querySelector('.dice');
diceImage.classList.add('hidden');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let firstPlayerCurrentScore = document.querySelector('#current--0');
let firstScore = 0;
const firstPlayerTotalScore = document.querySelector('#score--0');
let firstTotalScore = 0;
let secondPlayerCurrentScore = document.querySelector('#current--1');
let secondScore = 0;
const secondPlayerTotalScore = document.querySelector('#score--1');
let secondTotalScore = 0;
const firstPlayer = document.querySelector('.player--0');
const secondPlayer = document.querySelector('.player--1');

const incrementScore = (active, randomValue, curPlayerScore) => {
  const sum =
    active === 0 ? (firstScore += randomValue) : (secondScore += randomValue);
  updateText(curPlayerScore, sum);
};

const resetOnOneSelected = playerNumber => {
  if (playerNumber === 0) {
    firstScore = 0;
    updateText(firstPlayerCurrentScore, firstScore);
    setActive(firstPlayer, secondPlayer);
  } else {
    secondScore = 0;
    updateText(secondPlayerCurrentScore, secondScore);
    setActive(secondPlayer, firstPlayer);
  }
};

btnRoll.addEventListener('click', () => {
  diceImage.classList.remove('hidden');
  const val = generateRandom();
  diceImage.src = `dice-${val}.png`;
  if (firstPlayer.classList.contains('player--active')) {
    if (val !== 1) {
      incrementScore(0, val, firstPlayerCurrentScore);
    } else {
      resetOnOneSelected(0);
    }
  } else {
    if (val !== 1) {
      incrementScore(1, val, secondPlayerCurrentScore);
    } else {
      resetOnOneSelected(1);
    }
  }
});

btnHold.addEventListener('click', () => {
  const currentActive = document.querySelector('.player--active');
  if (currentActive.classList.contains('player--0')) {
    firstTotalScore += firstScore;
    firstPlayerTotalScore.textContent = firstTotalScore;
    resetOnOneSelected(0);
  } else {
    secondTotalScore += secondScore;
    secondPlayerTotalScore.textContent = secondTotalScore;
    resetOnOneSelected(1);
  }
});

function setActive(oldPlayer, player) {
  oldPlayer.classList.remove('player--active');
  player.classList.add('player--active');
}

function updateText(view, newText) {
  view.textContent = newText;
}
