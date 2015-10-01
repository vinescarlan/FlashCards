var xmlhttp = new XMLHttpRequest(),
	questions;

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        questions = JSON.parse(xmlhttp.responseText);
    }
};

xmlhttp.open("GET", "js/questions.json", true);
xmlhttp.send();

var question = document.getElementById('question');

var questionNum = 0,
	answeredQA = [],
	errorTimes = 0;

// Generate random number to display random QA set
function createNum() {
	// Recursively create random questionNum so that last QA set will not be repeated
	// If questionNum is FOUND in answeredQA
	do {
		// If all QAs set is finished, let user restart the quiz
		if (errorTimes > 10) {
			// Change bgcolor of card to green
			card.style.background = "#0ea";
			// Display "finished" message
			question.innerHTML = "Congratulations! You've finished this test!" + 
			"<br/>If you have wrong answers, please click RESTART.";
			// Change value of revealBtn to "RESTART"
			revealBtn.value = "RESTART";
			// Prevent execution of any code
			return false;
		}
		// Generate random num
		questionNum = Math.floor(Math.random() * questions.length);
		errorTimes++;
	} while (answeredQA.indexOf(questionNum) !== -1);
	
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