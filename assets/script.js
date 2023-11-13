const questionElement = document.getElementById('question')
const choicesElement = document.getElementById('choices')
const nextButton = document.getElementById('next-btn')
const startButton = document.getElementById('start-btn')

// question will be adde here
const questions = [
    {
        question: "What is HTML?",
        choices:["Hyper Text Markup Language", "Hyper Tallie Makeup Language", "Javascript"],
        correctAnswer:0 


    },
    {
        question: "What is CSS?",
        choices:["Cascading Styling Sheet", "Programming", "Systematic Engineering"],
        correctAnswer:0
        
    },
    {
        question: "What is Javascrit?",
        choices:["Hyper Text Markup Language", "Programming Language", "Computer"],
        correctAnswer:1


    }

];

// set timer 

function startTimer(){
    var counter = 60;
    setInterval(function() {
        counter--;
        if (counter >= 0 ){
            span = document.getElementById('count');
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert ('sorry, out of time');
            clearInterval(counter)
        }
    } ,1000 );
}



function start(){
    document.getElementById('count')
    startTimer();
}

// start button removed

startButton.addEventListener('click', () => {
    // 👇️ hide button
    startButton.style.display = 'none'
    if (startButton.style.display === "none") {
      nextButton.style.display= "block";
    }


});

//show question

let currentQuestion= 0

function showQuestion() {
    const question = questions[currentQuestion]
    questionElement.textContent = question.question
    choicesElement.innerHTML= '';
    question.choices.forEach((choice, index) => {
        const choiceButton = document.createElement('button')
        choiceButton.textContent = choice;
        choiceButton.classList.add('btn')
        choiceButton.addEventListener('click', () => checkAnswer(index))
        choicesElement.appendChild(choiceButton)
    })
}

// function to show wrong or correct
function checkAnswer (choiceIndex) {
    const isCorrect = choiceIndex === questions[currentQuestion].correctAnswer;
    let numCorrect = 0;
    var score = 0;
    var highscore = localStorage.getItem("highscore");

    if(isCorrect){
        choicesElement.innerHTML = '<p>Correct</p>'
    } else {
        choicesElement.innerHTML = '<p>wrong</p>'
    }

    currentQuestion++;
    if (currentQuestion < questions.length){
        nextButton.style.display = 'block'
    } else {
        nextButton.style.display = 'none'
        choicesElement.innerHTML = '<p> quiz done</p>'
    }
    if (isCorrect === currentQuestion.isCorrect) {
      // add to the number of correct answers
      numCorrect++;
    } 
    highscore.innerHTML = `${numCorrect} out of ${questions.length}`;
    if(highscore !== null){
      if (score > highscore) {
          localStorage.setItem("highscore", score);      
      }
  }
  else{
      localStorage.setItem("highscore", score);
  }   
  

    
}

nextButton.addEventListener('click', () => {
    showQuestion()
    nextButton.style.display = 'none'
})

showQuestion()

//add score at end

// add.localstoarge

function getTotal()
{
    var totalScore = getScore() + getScore();
    document.getElementById('highscore').innerHTML = 
       //"Your total score is: "+totalScore;
       getComment(totalScore);
}