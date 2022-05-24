import startGame from '../index.js';
import numberGenerator from '../utils.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeStep = () => {
  const questionNumber = numberGenerator(1, 100);
  const rightAnswer = isPrime(questionNumber) ? 'yes' : 'no';
  return [questionNumber, rightAnswer];
};

const startPrimeGame = () => startGame(primeRule, primeStep);

export default startPrimeGame;
