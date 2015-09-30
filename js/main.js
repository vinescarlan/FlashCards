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
	answeredQA = [],
	errorTimes = 0;

// Generate random number to display random QA set
function createNum() {
	// Recursively create random questionNum so that last QA set will not be repeated
	while (answeredQA.indexOf(questionNum) !== -1) {
		if (errorTimes > 10) {
			revealBtn.value = "RESTART";
			return false;
		}
		questionNum = Math.floor(Math.random() * 3);
		errorTimes++;
	}
	question.style.opacity = 0;
	setTimeout(function () {
		question.innerHTML = questions[questionNum].question;
		question.style.opacity = 1;
	}, 500);
	answeredQA.push(questionNum);
}

createNum();

var revealBtn = document.getElementById('reveal-answer');

function revealAns() {
	if (this.value == "RESTART") {
		location.reload();
	} else if (this.value == "NEXT") {
		revealBtn.value = "REVEAL";
		createNum();
	} else {
		question.innerHTML = questions[questionNum].answer;
		revealBtn.value = "NEXT";
	}
}

revealBtn.onclick = revealAns;
