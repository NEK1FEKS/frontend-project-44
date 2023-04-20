import readlineSync from 'readline-sync';

const startGame = (description, questionWithAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const totalLevels = 3;
  console.log(description);

  for (let i = 0; i < totalLevels; i += 1) {
    const [answer, question] = questionWithAnswer();
    const userAnswer = readlineSync.question(`${'Question: '}${question}${'\nYour answer: '}`);
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
