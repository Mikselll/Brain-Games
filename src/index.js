import readlineSync from 'readline-sync';

const startGame = (gameRule, getGameStep) => {
  console.log('Welcome to the Brain Games! ');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  const gameRoundsCount = 3;
  for (let i = 0; i < gameRoundsCount; i += 1) {
    const [gameQuestion, rightAnswer] = getGameStep();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer? ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
