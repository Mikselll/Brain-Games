import startGame from '../index.js';

const numberGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomStep = numberGenerator(0, 9);

const createProgression = () => {
  const progression = [];
  progression.push(numberGenerator(1, 100));
  const step = numberGenerator(1, 10);
  for (let i = 0; i <= 9; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const getQuestion = (array) => {
  array.splice(getRandomStep, 1, '..');
  return array;
};

const progressionRule = 'What number is missing in the progression?';

const progressionStep = () => {
  const progression = createProgression();
  const rightAnswer = String(progression[getRandomStep]);
  const gameQuestion = `${getQuestion(progression).join(' ')}`;
  return [gameQuestion, rightAnswer];
};

const startProgressionGame = () => startGame(progressionRule, progressionStep);

export default startProgressionGame;
