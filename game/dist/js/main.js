let secretNumber = Math.trunc(Math.random() * 10 + 1);
// console.log(secretNumber);
let score = 10;
let highScore = 0;
const msg = (message) => {
  document.querySelector('.guessing').textContent = message;
};
const bgclr = (color) => {
  document.querySelector('body').style.backgroundColor = color;
};
let scoreBoard = (score) => {
  document.querySelector('.score').textContent = score;
};
const computerNumber = (num) => {
  document.querySelector('.computernumber').textContent = num;
};
// Do not reveal this code....
// document.querySelector('.computernumber').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  // CHECKING WHETHER THERE IS DATA OR NOT
  if (!guess) {
    msg('⛔ No number.');
  } else if (guess > 10 || guess <= 0) {
    msg('Enter from 1 to 10.');
  }
  // WHEN PLAYER WINS THE GAME
  else if (guess === secretNumber) {
    msg('🎉 You got right.');
    bgclr('green');
    computerNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // IF GUESS IS WRONG
  else if (guess !== secretNumber) {
    guess > secretNumber ? msg(' 📈 Too high') : msg('📉 Too low.');
    bgclr('#262626');
    if (score > 1) {
      score--;
      scoreBoard(score);
    } else {
      scoreBoard(0);
      msg('💥 You lose');
      bgclr('red');
    }
  }
  /*
  else if (guess > secretNumber) {
    msg(' 📈 Too high');
    bgclr('#262626');
    if (score > 1) {
      score--;
      scoreBoard(score);
    } else {
      scoreBoard(0);
      msg('💥 You lose');
      bgclr('red');
    }
  } else if (guess < secretNumber) {
    msg('📉 Too low.');
    bgclr('#262626');
    if (score > 1) {
      score--;
      scoreBoard(score);
    } else {
      scoreBoard(0);
      msg('💥 You lose');
      bgclr('red');
    }
  }
*/
});
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  console.log(secretNumber);
  bgclr('#262626');
  score = 10;
  scoreBoard(score);
  computerNumber('?');
  msg('Start guessing...');
  // if (score > highScore) {
  //   highScore = score;
  //   document.querySelector('.highscore').textContent = score;
  // }
});
