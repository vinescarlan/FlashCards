var questions = [
  Q1 = {
    question: "What do HTML means?",
    answer: "HyperText Markup Language"
  },
  Q2 = {
    question: "What do CSS means?",
    answer: "Cascading Style Sheet"
  }
];

var question = document.getElementById('question');

var questionNum = 0;

function createNum() {
  questionNum = Math.floor(Math.random() * 2);
}

createNum();
question.innerHTML = questions[questionNum].question;