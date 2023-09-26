var readlineSync = require("readline-sync");
var score = 0;
// data of high score
var highScores = [
  {
    name: "Rekha",
    score: 7
  },
  {
    name: "Om Prakash",
    score: 5
  },
  {
    name: "Deepika",
    score: 4
  }
]
// array of objects
var question = [{
  question: "India's largest city by population?",
  answer: "mumbai"
}, {
  question: "National Anthem of India?",
  answer: "Jana Gana Mana"
}, {
  question: "National Song of India?",
  answer: "Vande Mataram"
}, {
  question: "Hindi Divas celebrate in India on?",
  answer: "14th September"
}, {
  question: "Which stste is known as India's Spice Garden?",
  answer: "Kerala"
},{
  question: "Biggest District in india?",
  answer: "Kachchh, Gujarat"
},{
  question: "Smallest District in India?",
  answer: "Maha, Puducherry"
}
               ];
// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(" right ");
    score = score + 1;

  } else {
    console.log(" wrong");
    score = score - 1;
  }
  console.log("current score: ", score);
  console.log("------------------------");
}
function welcome() {
  var userName = readlineSync.question("what's your name? ");

  console.log("welcome " + userName + " to DO YOU KNOW rekha kumari?");
}
function game() {
  for (var i = 0; i < question.length; i++) {
    var currentQuestion = question[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log("YAY! you scored:  ", score)


  console.log(" checkout the high score");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
