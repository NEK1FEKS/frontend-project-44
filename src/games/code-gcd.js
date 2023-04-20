import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGreatestCommonDivisor(num2 % num1, num1);
};

const getQuestionWithAnswer = () => {
  const randomNum1 = getRandomNum(0, 100);
  const randomNum2 = getRandomNum(0, 100);
  const answer = getGreatestCommonDivisor(randomNum1, randomNum2).toString();
  const question = `${randomNum1} ${randomNum2}`;

  return [answer, question];
};

const startGcdGame = () => {
  startGame(description, getQuestionWithAnswer);
};

export default startGcdGame;
