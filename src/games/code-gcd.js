import readlineSync from 'readline-sync';
import greetingUserName from './cli.js';

const greatestСommonDvisor = () => {
  const userName = greetingUserName();
  console.log('Find the greatest common divisor of given numbers.');
  let curCorrect = 0;

  for (let i = 0; i < 3; i += 1, curCorrect += 1) {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    let quantity;
    let remainder;

    if (randomNum1 >= randomNum2) {
      quantity = randomNum1;
      remainder = randomNum2;
    } else {
      quantity = randomNum2;
      remainder = randomNum1;
    }
    while (remainder !== 0) {
      const temp = quantity % remainder;
      quantity = remainder;
      remainder = temp;
    }

    const answer = readlineSync.question(`${'Question: '}${randomNum1} ${randomNum2}${'\nYour answer: '}`);
    if (parseInt(answer, 10) !== quantity) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${quantity}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  if (curCorrect === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default greatestСommonDvisor;
