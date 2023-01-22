"use strict";

let numberToGuess = getRandomNumber();
const message = document.querySelector(".message");
const scoreMessage = document.querySelector(".score");
let score = Number(document.querySelector(".score").textContent);
const guessMessage = document.querySelector(".guess");
const number = document.querySelector(".number");
const body = document.querySelector("body");
const highScoreText = document.querySelector(".highscore");
let highScore = Number(highScoreText.textContent);

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (guess) {
    if (score > 1) {
      if (guess < numberToGuess) {
        message.textContent = "Too Low";
        decrementScore();
      } else if (guess > numberToGuess) {
        message.textContent = "Too High";
        decrementScore();
      } else {
        message.textContent = "Correct Number 🥳🥳";
        number.textContent = guess;
        body.style.backgroundColor = "#60b347";
        number.style.width = "30rem";
        highScore = Math.max(score, highScore);
        highScoreText.textContent = highScore;
      }
    } else {
      message.textContent = "😞 You lost the game";
      scoreMessage.textContent = 0;
    }
  } else {
    message.textContent = "⛔️ No Number";
  }
});

document.querySelector(".again").addEventListener("click", () => resetGame());

const decrementScore = () => {
  guessMessage.value = "";
  score -= 1;
  scoreMessage.textContent = score;
};

const resetGame = () => {
  numberToGuess = getRandomNumber();
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  number.textContent = "?";
  score = 20;
  message.textContent = "Start guessing...";
  scoreMessage.textContent = score;
  guessMessage.value = "";
};

function getRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
