import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const getRandomIndexFromArray = getRandomNum(0, 3);
  return operators[getRandomIndexFromArray];
};

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Error';
  }
};

const getQuestionWithAnswer = () => {
  const randomNum1 = getRandomNum(0, 100);
  const randomNum2 = getRandomNum(0, 100);
  const operator = getRandomOperator();
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const answer = calculator(randomNum1, randomNum2, operator).toString();

  return [answer, question];
};

const startCalcGame = () => {
  startGame(description, getQuestionWithAnswer);
};

export default startCalcGame;
