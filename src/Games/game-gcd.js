import startGame from '../index.js';

const numberGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRightAnswer = (a, b) => {
  if (b > 0) {
    const c = a % b;
    return getRightAnswer(b, c);
  }
  return a;
};

const gcdRule = 'Find the greatest common divisor of given numbers.';

const gcdStep = () => {
  const firstRandomNumber = numberGenerator(1, 50);
  const secondRandomNumber = numberGenerator(1, 50);
  const gameQuestion = `${firstRandomNumber} ${secondRandomNumber}`;
  const rightAnswer = getRightAnswer(firstRandomNumber, secondRandomNumber);
  return [gameQuestion, rightAnswer];
};

const startGcdGame = () => startGame(gcdRule, gcdStep);

export default startGcdGame;