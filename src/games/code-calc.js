import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const rule = 'What is the result of the expression?';

const getQuestionWithAnswer = () => {
  const randomNum1 = getRandomNum(100);
  const randomNum2 = getRandomNum(100);
  const randomSign = getRandomNum(3);
  let curQuestion;
  let correctAnswer;
  switch (randomSign) {
    case 0:
      curQuestion = `${randomNum1} + ${randomNum2}`;
      correctAnswer = (randomNum1 + randomNum2).toString();
      break;
    case 1:
      curQuestion = `${randomNum1} - ${randomNum2}`;
      correctAnswer = (randomNum1 - randomNum2).toString();
      break;
    case 2:
      curQuestion = `${randomNum1} * ${randomNum2}`;
      correctAnswer = (randomNum1 * randomNum2).toString();
      break;
    default:
      break;
  }

  return [correctAnswer, curQuestion];
};

const startCalcGame = () => {
  startGame(rule, getQuestionWithAnswer);
};

export default startCalcGame;
