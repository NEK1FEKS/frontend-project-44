import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const rule = 'What is the result of the expression?';

const game = () => {
  const randomNum1 = getRandomNum(100);
  const randomNum2 = getRandomNum(100);
  const randomSign = getRandomNum(3);
  let curQuestion;
  let correctAnswer;
  if (randomSign === 0) {
    curQuestion = `${randomNum1} + ${randomNum2}`;
    correctAnswer = (randomNum1 + randomNum2).toString();
  } else if (randomSign === 1) {
    curQuestion = `${randomNum1} - ${randomNum2}`;
    correctAnswer = (randomNum1 - randomNum2).toString();
  } else if (randomSign === 2) {
    curQuestion = `${randomNum1} * ${randomNum2}`;
    correctAnswer = (randomNum1 * randomNum2).toString();
  }

  return [correctAnswer, curQuestion];
};

const startCalcGame = () => {
  startGame(rule, game);
};

export default startCalcGame;
