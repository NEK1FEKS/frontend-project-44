import readlineSync from 'readline-sync';
import greetingUserName from './cli.js';

const startGame = (rule, questionWithAnswer) => {
  const userName = greetingUserName();
  const totalLevels = 3;
  console.log(rule);

  for (let i = 0; i < totalLevels; i += 1) {
    const [correctAnswer, curQuestion] = questionWithAnswer();
    const playerAnswer = readlineSync.question(`${'Question: '}${curQuestion}${'\nYour answer: '}`);
    if (correctAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
