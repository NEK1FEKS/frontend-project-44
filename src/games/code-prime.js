import readlineSync from 'readline-sync';
import greetingUserName from './cli.js';

const primeNumbers = () => {
  const userName = greetingUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let curCorrect = 0;

  for (let i = 0; i < 3; i += 1, curCorrect += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    let fail = 0;
    for (let j = 2; j < randomNum; j += 1) {
      if (randomNum % j === 0) {
        fail -= 1;
        break;
      }
    }
    const answer = readlineSync.question(`${'Question: '}${randomNum}${'\nYour answer: '}`);
    if ((fail === -1 && answer !== 'no') || (randomNum <= 1 && answer !== 'no')) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (fail === 0 && answer !== 'yes' && randomNum > 1) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
  }
  if (curCorrect === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default primeNumbers;
