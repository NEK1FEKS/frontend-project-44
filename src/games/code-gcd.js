import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let quantity;
  let remainder;
  if (num1 >= num2) {
    quantity = num1;
    remainder = num2;
  } else {
    quantity = num2;
    remainder = num1;
  }
  while (remainder !== 0) {
    const temp = quantity % remainder;
    quantity = remainder;
    remainder = temp;
  }

  return quantity;
};

const game = () => {
  const randomNum1 = getRandomNum(100);
  const randomNum2 = getRandomNum(100);
  const correctAnswer = gcd(randomNum1, randomNum2).toString();
  const curQuestion = `${randomNum1} ${randomNum2}`;

  return [correctAnswer, curQuestion];
};

const startGcdGame = () => {
  startGame(rule, game);
};

export default startGcdGame;
