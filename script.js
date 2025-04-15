'use strict';

const number = Math.trunc(Math.random() * 5) + 1;
let score = 5;
let highscore = 0;
let count = 0;

document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value);

  if (!userGuess) {
    document.querySelector('.message').textContent = 'Empty Field...';
  } else if (number > userGuess) {
    document.querySelector('.message').textContent = 'Too low...';
    score--;
    count++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.count').textContent = count;
  } else if (number < userGuess) {
    document.querySelector('.message').textContent = 'Too High...';
    score--;
    count++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.count').textContent = count;
  } else if (number == userGuess) {
    document.querySelector('.message').textContent = 'Coorrect... 🎊';
    document.querySelector('.number').textContent = number;
    document.querySelector('.thanks').textContent = 'Thank You buddy..!';

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const number = Math.trunc(Math.random() * 5) + 1;
  score = 5;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
