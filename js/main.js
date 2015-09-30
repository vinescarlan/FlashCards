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
		// If all QAs set is finished, let user restart the quiz
		if (errorTimes > 10) {
			revealBtn.value = "RESTART";
			return false;
		}
		// Generate random num
		questionNum = Math.floor(Math.random() * questions.length);
		errorTimes++;
	}
	// Fade effect
	question.style.opacity = 0;
	// Wait for 500ms before changing the question
	setTimeout(function () {
		question.innerHTML = questions[questionNum].question;
		question.style.opacity = 1;
	}, 500);
	// Let this program know that the user already seen the question
	answeredQA.push(questionNum);
}

var revealBtn = document.getElementById('reveal-answer');
var card = document.getElementById('flashcard');

function revealAns() {
	if (this.value == "RESTART") {
		// Reload the page
		location.reload();
	} else if (this.value == "NEXT") {
		// Change back the bgcolor of flashcard to red 
		card.style.background = "#ff4553";
		revealBtn.value = "REVEAL";
		// Display next set of QA
		createNum();
	} else {
		// If value is "REVEAL", change flashcard bgcolor to cyan
		card.style.background = "#0cc";
		// And display the answer
		question.innerHTML = questions[questionNum].answer;
		revealBtn.value = "NEXT";
	}
}

revealBtn.onclick = revealAns;

window.onload = createNum;