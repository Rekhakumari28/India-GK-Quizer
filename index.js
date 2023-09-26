var readlineSync = require("readline-sync");
var score = 0;
// data of high score
var highScores = [
  {
    name: "rekha",
    score: 5
  },
  {
    name: "pari",
    score: 3
  },
  {
    name: "deepa",
    score: 4
  }
]
// array of objects
var question = [{
  question: "where do I live?",
  answer: "jaipur"
}, {
  question: "my fevorite superhero would be?",
  answer: "superman"
}, {
  question: "my fevorite food would be?",
  answer: "samosa"
}, {
  question: "my fevorite place to go for weekend?",
  answer: "goa"
}, {
  question: "the person who is most important in my life?",
  answer: "pari"
},];
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
