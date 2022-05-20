import readlineSync from 'readline-sync';

const numberGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomStep = numberGenerator(1, 9);

const createProgression = () => {
  const emptyArr = [];
  emptyArr.push(numberGenerator(1, 100));
  const step = numberGenerator(1, 10);
  for (let i = 0; i <= 9; i += 1) {
    emptyArr.push(emptyArr[i] + step);
  }
  return emptyArr;
};

const question = (array) => {
  array.splice(randomStep, 1, '..');
  return array;
};

const gameProgression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const progression = createProgression();
    const correctAnswer = progression[randomStep];
    console.log(`Question: ${question(progression).join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameProgression;