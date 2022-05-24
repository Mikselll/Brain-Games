import startGame from '../index.js';
import numberGenerator from '../utils.js';

const isEven = (num) => num % 2 === 0;

const evenRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenStep = () => {
  const questionNumber = numberGenerator(1, 100);
  const rightAnswer = isEven(questionNumber) ? 'yes' : 'no';
  return [questionNumber, rightAnswer];
};

const startEvenGame = () => startGame(evenRule, evenStep);

export default startEvenGame;
