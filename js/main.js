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

var questionNum = 0,
	answeredQA = [];

// Generate random number to display random QA set
function createNum() {
	questionNum = Math.floor(Math.random() * 3);
	// Recursively create random questionNum so that last QA set will not be repeated
	if (answeredQA.indexOf(questionNum) !== -1) {
		createNum();
	}
	question.innerHTML = questions[questionNum].question;
	answeredQA.push(questionNum);
}

createNum();

var revealBtn = document.getElementById('reveal-answer');

function revealAns() {
	question.innerHTML = questions[questionNum].answer;
}

revealBtn.onclick = revealAns;
