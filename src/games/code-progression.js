import startGame from '../index.js';
import getRandomNum from '../random-number.js';

const description = 'What number is missing in the progression?';

const getProgression = (size, startValue, progressionValue) => {
  const arr = [startValue];
  for (let j = 1; j < size; j += 1) {
    arr.push(arr[j - 1] + progressionValue);
  }
  return arr;
};

const getQuestionWithAnswer = () => {
  const minLengthProgression = 5;
  const sizeOfArray = minLengthProgression + getRandomNum(0, 6);
  const missingElement = getRandomNum(0, sizeOfArray);
  const startNumber = getRandomNum(0, 100);
  const progressionMovement = getRandomNum(0, 100);

  const array = getProgression(sizeOfArray, startNumber, progressionMovement);

  const answer = array[missingElement].toString();
  array[missingElement] = '..';
  const question = array.join(' ');

  return [answer, question];
};

const startProgressionGame = () => {
  startGame(description, getQuestionWithAnswer);
};

export default startProgressionGame;
