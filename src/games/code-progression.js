import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const rule = 'What number is missing in the progression?';
const array = [];

const game = () => {
  array.length = 0;
  const sizeOfArray = 5 + getRandomNum(6);
  const missingElement = getRandomNum(sizeOfArray);
  const startNumber = getRandomNum(100);
  const progressionMovement = getRandomNum(100);
  let correctAnswer;
  array.push(startNumber);

  for (let j = 1; j < sizeOfArray; j += 1) {
    array.push(array[j - 1] + progressionMovement);
  }
  array[missingElement] = '..';

  const curQuestion = array.join(' ');
  if (missingElement === 0) {
    correctAnswer = (array[missingElement + 1] - progressionMovement).toString();
  } else {
    correctAnswer = (array[missingElement - 1] + progressionMovement).toString();
  }

  return [correctAnswer, curQuestion];
};

const StartProgressionGame = () => {
  startGame(rule, game);
};

export default StartProgressionGame;
