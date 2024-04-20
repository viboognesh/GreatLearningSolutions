function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.checkOptionWithAnswer = function (choice) {
  if (this.getQuestionIndex().isCorrectAnswer(choice)) {
    this.score++;
  }
  this.questionIndex++;
};

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progress = document.getElementById("progress");
  progress.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  let heading = document.querySelector("h1");
  heading.innerHTML = "Result";
  let quizElem = document.getElementById("quiz");
  quizElem.innerHTML = `<h2 id='score'>Your scores: ${
    quiz.score
  } , and percentage: ${(quiz.score / quiz.questions.length) * 100}% </h2>`;
}

function handleBtnClick(id, choice) {
  let btn = document.getElementById(id);
  btn.onclick = function () {
    quiz.checkOptionWithAnswer(choice);
    loadQuestions();
  };
}

function loadQuestions() {
  if (!quiz.isEnded()) {
    let elem = document.getElementById("question");
    elem.innerHTML = quiz.getQuestionIndex().text;

    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let btn = document.getElementById("btn" + i);
      btn.innerHTML = choices[i];
      handleBtnClick("btn" + i, choices[i]);
    }
    showProgress();
  } else {
    showScores();
  }
}

let questionsList = [
  new Question(
    "JavaScript supports",
    ["Functions", "XHTML", "CSS", "HTML"],
    "Functions"
  ),
  new Question(
    "Which Language runs in web browser?",
    ["Java", "C#", "Python", "JavaScript"],
    "JavaScript"
  ),
  new Question(
    "Which is used for Connect To MySQL Database?",
    ["PHP", "HTML", "JS", "All"],
    "All"
  ),
  new Question(
    "Which of the following is used for styling HTML elements?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),
  new Question(
    "Which is used for Connect To MongoDB Database?",
    ["PHP", "HTML", "JS", "All"],
    "All"
  ),
];

let quiz = new Quiz(questionsList);

loadQuestions();
