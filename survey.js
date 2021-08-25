const readline = require('readline');
const log = console.log;
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

const questions = [
  'What is your nickname? ',
  'What sport do you play? ',
  'What food do you like? ',
  'What is the name of your best friend? ',
  'Where you and your friend like to travel? ',
  'Name places you have visited: '
];

let answers = [];

const nextQuestion = () => {
  rl.question(questions.shift(), answer => {
    answers.push(answer);
    if (0 === questions.length) {
      rl.close();
    } else {
      nextQuestion();
    }
  });
};

nextQuestion();

rl.on('close', () => {
  answers = {
    name : answers[0],
    sport : answers[1],
    food : answers[2],
    someone : answers[3],
    vacationSpot : answers[4],
    placesVisited : answers[5]
  };

  let paragraph = `
  ${answers.name} like to play ${answers.sport}. Sometimes ${answers.name} eats ${answers.food} food, because ${answers.name} likes that very much.
  ${answers.name} is friend with ${answers.someone}. They like to travel to ${answers.vacationSpot}.  In the past, ${answers.name} visited ${answers.placesVisited}.
  `;

  log(paragraph);
});