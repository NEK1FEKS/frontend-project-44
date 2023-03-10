import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const rule = 'What number is missing in the progression?';

const getProgression = (arr, size, startValue, progressionValue) => {
  arr.push(startValue);
  for (let j = 1; j < size; j += 1) {
    arr.push(arr[j - 1] + progressionValue);
  }
  return arr;
};

const getQuestionWithAnswer = () => {
  const sizeOfArray = 5 + getRandomNum(6);
  const missingElement = getRandomNum(sizeOfArray);
  const startNumber = getRandomNum(100);
  const progressionMovement = getRandomNum(100);

  const array = getProgression([], sizeOfArray, startNumber, progressionMovement);
  array[missingElement] = '..';

  const curQuestion = array.join(' ');
  const correctAnswer = missingElement === 0
    ? (array[missingElement + 1] - progressionMovement).toString()
    : (array[missingElement - 1] + progressionMovement).toString();

  return [correctAnswer, curQuestion];
};

const startProgressionGame = () => {
  startGame(rule, getQuestionWithAnswer);
};

export default startProgressionGame;
