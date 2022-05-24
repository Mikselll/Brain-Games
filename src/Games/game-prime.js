import startGame from '../index.js';
import numberGenerator from '../utils.js';

const getRightAnswer = (num) => {
  if (num === 1) {
    return 'no';
  }
  if (num === 2) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeStep = () => {
  const questionNumber = numberGenerator(1, 100);
  const rightAnswer = getRightAnswer(questionNumber);
  return [questionNumber, rightAnswer];
};

const startPrimeGame = () => startGame(primeRule, primeStep);

export default startPrimeGame;
