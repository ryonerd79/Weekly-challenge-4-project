document.querySelector(".start-button").addEventListener("click", function () {
    document.querySelector(".quiz-info-box").style.display = "none";
    document.querySelector(".questions").style.display = "block";
    renderQuestion();
}

);

var questionBank = [
    {
      questionText: "question 1",
      choices: ["answer 1", "answer 2", "answer 3", "answer 4" ],
      correctAnswer: "answer 3",  
    }
]

var index = 0

function renderQuestion() {
   document.querySelector(".question-text").innerText = questionBank[index].questionText;
}