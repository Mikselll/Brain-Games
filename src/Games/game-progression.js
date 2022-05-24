import startGame from '../index.js';
import numberGenerator from '../utils.js';

const createProgression = () => {
  const progression = [];
  progression.push(numberGenerator(1, 100));
  const step = numberGenerator(1, 10);
  const progressionLength = 9;
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const progressionRule = 'What number is missing in the progression?';

const progressionStep = () => {
  const hiddenNumberIndex = numberGenerator(0, 9);
  const progression = createProgression();
  const rightAnswer = String(progression[hiddenNumberIndex]);
  progression.splice(hiddenNumberIndex, 1, '..');
  const gameQuestion = `${progression.join(' ')}`;
  return [gameQuestion, rightAnswer];
};

const startProgressionGame = () => startGame(progressionRule, progressionStep);

export default startProgressionGame;
