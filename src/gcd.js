import readlineSync from 'readline-sync';

const numberGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const rightAnswer = (a, b) => {
  if (b > 0) {
    const c = a % b;
    return rightAnswer(b, c);
  }
  return a;
};

const gameGcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const randomNumber1 = numberGenerator(1, 50);
    const randomNumber2 = numberGenerator(1, 50);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const userAnswer = readlineSync.question('You answer: ');
    const correctAnswer = rightAnswer(randomNumber1, randomNumber2);
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameGcd;