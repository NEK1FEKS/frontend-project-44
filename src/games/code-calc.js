import readlineSync from 'readline-sync';
import greetingUserName from './cli.js';

const brainCalc = () => {
  const userName = greetingUserName();
  console.log('What is the result of the expression?');
  let curCorrect = 0;

  for (let i = 0; i < 3; i += 1, curCorrect += 1) {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const randomSign = Math.floor(Math.random() * 3);
    let answer;
    let result;

    if (randomSign === 0) {
      answer = readlineSync.question(`${'Question: '}${randomNum1} + ${randomNum2}${'\nYour answer: '}`);
      result = randomNum1 + randomNum2;
    } else if (randomSign === 1) {
      answer = readlineSync.question(`${'Question: '}${randomNum1} - ${randomNum2}${'\nYour answer: '}`);
      result = randomNum1 - randomNum2;
    } else if (randomSign === 2) {
      answer = readlineSync.question(`${'Question: '}${randomNum1} * ${randomNum2}${'\nYour answer: '}`);
      result = randomNum1 * randomNum2;
    }
    if (parseInt(answer, 10) !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
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

export default brainCalc;
