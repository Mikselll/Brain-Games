import startGame from '../index.js';
import numberGenerator from '../utils.js';

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
  const rightAnswer = String(getRightAnswer(firstRandomNumber, secondRandomNumber));
  return [gameQuestion, rightAnswer];
};

const startGcdGame = () => startGame(gcdRule, gcdStep);

export default startGcdGame;
