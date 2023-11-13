var startEl = document.getElementById('start')
var btnEl = document.getElementById('btn')
var btn1El = document.getElementById('btn1')
var btn2El = document.getElementById('btn2')
var btn3El = document.getElementById('btn3')
var questionEl = document.getElementById('question')
var nextEl = document.getElementById('next')

//click on start to test and it will be hidden
start.addEventListener('click', () => {
  // 👇️ hide button
  start.style.display = 'none'
  if (start.style.display === "none") {
    btnEl.style.display= "block";
    
  }
  if (start.style.display === "none") {
    btn1El.style.display= "block";
    
  }
  if (start.style.display === "none") {
    btn2El.style.display= "block";
    
  }
  if (start.style.display === "none") {
    btn3El.style.display= "block";
    
  }
  if (start.style.display === "none") {
    questionEl.style.display = "block";
    
  }

  if (start.style.display === "none") {
    nextEl.style.display = "block";
    
  }

 });


 //question will appear afterwards along with next btn
 //switch out btn tags to question

 var question = [{
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
}]