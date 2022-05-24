import startGame from '../index.js';
import numberGenerator from '../utils.js';

const operators = ['+', '-', '*'];

const getRightAnswer = (a, b, operator) => {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  if (operator === '*') {
    return a * b;
  }
  return NaN;
};

const calcRule = 'What is the result of the expression?';

const calcStep = () => {
  const firstRandomNumber = numberGenerator(1, 10);
  const secondRandomNumber = numberGenerator(1, 10);
  const randomOperator = operators[numberGenerator(0, operators.length - 1)];
  const gameQuestion = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const rightAnswer = String(getRightAnswer(firstRandomNumber, secondRandomNumber, randomOperator));
  return [gameQuestion, rightAnswer];
};

const startCalcGame = () => startGame(calcRule, calcStep);

export default startCalcGame;
