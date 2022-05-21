import startGame from '../index.js';

const numberGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const arrOperators = ['+', '-', '*'];

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

const calcRules = 'What is the result of the expression?';

const calcStep = () => {
    const firstRandomNumber = numberGenerator(1, 10);
    const secondRandomNumber = numberGenerator(1, 10);
    const randomOperator = arrOperators[numberGenerator(0, arrOperators.length - 1)];
    const gameQuestion = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
    const rightAnswer = String(getRightAnswer(firstRandomNumber, secondRandomNumber, randomOperator));
    return [gameQuestion, rightAnswer];
}

const startCalcGame = () => startGame(calcRules, calcStep);

export default startCalcGame;