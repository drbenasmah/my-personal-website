'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When no number
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('body').style.backgroundColor = '#d40909';
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log('2nd:' + secretNumber);

    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '';
  });
});
