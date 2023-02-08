import readlineSync from 'readline-sync';
import greetingUserName from './cli.js';

const progression = () => {
  const userName = greetingUserName();
  console.log('What number is missing in the progression?');
  let curCorrect = 0;
  const array = [];
  // console.log(array.length);
  for (let i = 0; i < 3; i += 1, curCorrect += 1) {
    const sizeOfArray = 5 + Math.floor(Math.random() * 6);
    const missingElement = Math.floor(Math.random() * sizeOfArray);
    const startNumber = Math.floor(Math.random() * 100);
    const progressionMovement = Math.floor(Math.random() * 100);
    array.push(startNumber);

    for (let j = 1; j < sizeOfArray; j += 1) {
      array.push(array[j - 1] + progressionMovement);
    }
    array[missingElement] = '..';

    const stringFromArray = array.join(' ');

    const answer = readlineSync.question(`${'Question: '}${stringFromArray}${'\nYour answer: '}`);
    if (parseInt(answer, 10) !== progressionMovement) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${progressionMovement}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      array.length = 0;
    }
  }
  if (curCorrect === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default progression;
