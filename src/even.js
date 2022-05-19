import readlineSync from 'readline-sync';

const numberGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const randomNumber = numberGenerator(1, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (randomNumber % 2 === 0) {
      if (userAnswer === "yes") {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    if (randomNumber % 2 !== 0) {
      if (userAnswer === "no") {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEven;
