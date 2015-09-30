var questions = [
  Q1 = {
    question: "What does HTML means?",
    answer: "HyperText Markup Language"
  },
  Q2 = {
    question: "What does CSS means?",
    answer: "Cascading Style Sheet"
  },
  Q3 = {
    question: "Why the \"C\" in CSS, is called Cascading?",
    answer: "When CSS rules are duplicated, the rule to be use is chosen by <em>cascading</em> down from more general rules to the specific rule required"
  }
];

var question = document.getElementById('question');

var questionNum = 0;

function createNum() {
  questionNum = Math.floor(Math.random() * 3);
}

createNum();
question.innerHTML = questions[questionNum].question;
