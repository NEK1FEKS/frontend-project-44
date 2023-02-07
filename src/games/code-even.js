import readlineSync from 'readline-sync';
import greetingUserName from './cli.js';

const brainEven = () => {
  const userName = greetingUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let curCorrect = 0;
  for (let i = 0; i < 3; i += 1, curCorrect += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`${'Question: '}${randomNum}${'\nYour answer: '}`);
    if (randomNum % 2 !== 0 && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (randomNum % 2 === 0 && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    // curCorrect += 1;
  }
  if (curCorrect === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainEven;
