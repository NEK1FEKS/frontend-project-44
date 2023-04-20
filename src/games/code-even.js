import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getQuestionWithAnswer = () => {
  const randomNum = getRandomNum(0, 100);
  const answer = isEven(randomNum) ? 'yes' : 'no';
  const question = randomNum.toString();

  return [answer, question];
};

const startEvenGame = () => {
  startGame(description, getQuestionWithAnswer);
};

export default startEvenGame;
