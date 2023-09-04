var questionBank = [
  {
    questionText: "question 1",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4" ],
    correctAnswer: "answer 3",  
  },
  
  {
    questionText: "question 2",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4" ],
    correctAnswer: "answer 2",  
  },
  
  {
    questionText: "question 3",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4" ],
    correctAnswer: "answer 1",  
  },

  {
    questionText: "question 4",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4" ],
    correctAnswer: "answer 4",  
  },
]
let timer = 0;
let index = 0;
let timerId;
let timerEl = document.querySelector('#timer')

function startTimer() {
  timerId = setInterval(function(){
    timer--
    timerEl.innerHTML = timer;
  }, 1000)
}

document.querySelector('.start-button').addEventListener('click', function(){
  document.querySelector(".quiz-info-box").style.display = "none";
     document.querySelector("main").style.display = "block";
     timer = 60
     timerEl.innerHTML = timer;
     startTimer()
 renderQuestion()        
})

function renderQuestion() {
  document.querySelector('.question-text').innerText = questionBank[index].questionText
  document.querySelector('.response-1').innerText = questionBank[index].choices[0]
  document.querySelector('.response-2').innerText = questionBank[index].choices[1]
  document.querySelector('.response-3').innerText = questionBank[index].choices[2]
  document.querySelector('.response-4').innerText = questionBank[index].choices[3]
}

document.querySelector('.questions').addEventListener('click', function(event){
  if(event.target.nodeName === 'BUTTON') {
    choice = event.target.innerText
    correct = questionBank[index].correctAnswer
    if(choice !== correct) {
      timer = timer - 10
      
    }
    index = index + 1
  if(index >= questionBank.length) {
    clearInterval(timerId)
    var userInitals = prompt('Please enter your initials')
    localStorage.setItem('high-scores', JSON.stringify({userInitals, timer}) )
    window.location.reload()
    return 
  }
    renderQuestion()
  } 

})








// function renderQuestion() {
//    document.querySelector(".question-text").innerText = questionBank[index].questionText;
//    if (choices === correctAnswer && choices[i] === True ) {
//      alert("You got it right");
//    }
// }

// renderQuestion();
/* var countdown = function() {
  var countdownNumber = 1;
}*/