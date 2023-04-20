import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const randomNum = getRandomNum(0, 100);
  const question = randomNum.toString();
  const answer = isPrime(randomNum) ? 'yes' : 'no';

  return [answer, question];
};

const startPrimeGame = () => {
  startGame(description, getQuestionWithAnswer);
};

export default startPrimeGame;
