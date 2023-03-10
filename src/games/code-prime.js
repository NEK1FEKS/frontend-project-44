import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionWithAnswer = () => {
  const randomNum = getRandomNum(100);
  const curQuestion = randomNum;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

  return [correctAnswer, curQuestion];
};

const startPrimeGame = () => {
  startGame(rule, getQuestionWithAnswer);
};

export default startPrimeGame;
