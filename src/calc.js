import readlineSync, { question } from 'readline-sync';

const numberGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const rightAnswer = (a, b, operator) => {
    if (operator === '+') {
        return a + b;
    }
    if (operator === '-') {
        return a - b;
    }
    if (operator === '*') {
        return a * b;
    }
};

const gameCalc = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);
    console.log('What is the result of the expression?');
    const arrOperators = ['+', '-', '*'];
    const gameRounds = 3;
    for (let i = 0; i < gameRounds; i += 1) {
        const randomNumber1 = numberGenerator(1, 10);
        const randomNumber2 = numberGenerator(1, 10);
        const randomOperator = arrOperators[numberGenerator(0, arrOperators.length - 1)];
        console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
        const userAnswer = readlineSync.question('You answer: ');
        const correctAnswer = rightAnswer(randomNumber1, randomNumber2, randomOperator);
        if (Number(userAnswer) === correctAnswer) {
            console.log('Correct!');
        }
        else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};

export default gameCalc;