import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getQuestionWithAnswer = () => {
  const randomNum = getRandomNum(100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  const curQuestion = randomNum;

  return [correctAnswer, curQuestion];
};

const startEvenGame = () => {
  startGame(rule, getQuestionWithAnswer);
};

export default startEvenGame;
