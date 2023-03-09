import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const randomNum = getRandomNum(100);
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let j = 2; j < num; j += 1) {
      if (randomNum % j === 0) {
        return false;
      }
    }
    return true;
  };
  const curQuestion = randomNum;
  let correctAnswer;
  if (isPrime(randomNum)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [correctAnswer, curQuestion];
};

const startPrimeGame = () => {
  startGame(rule, game);
};

export default startPrimeGame;
