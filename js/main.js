const myQuestions = [
  { question: "In which city this photo was taken?",
    answer:   "Amsterdam",
    photo:    './img/jhon.jpg',
    tip:      "Well, let's start easy... It was the year 1969, in the middle of the Vietnam War. John Lennon and Yoko Ono decided to use their honeymoon to promote world peace.",
    number:   '1'
  },
  
  { question: "Question 2?",
    answer:    "answer 2",
    photo:    './img/ali.jpg',
    tip:      'tip 2',
    number:   '2',
  },

  { question: "Question 3?",
    answer:    "answer 3",
    photo:    './img/varanasi-body-cremation.jpg',
    tip:      'tip 3',
    number:    ' 3',
  }
]

function showQuestion(array){
  countScore()          // show score
  for (var i = 0; i < array.length; i++) {
    $("#myQuestion").html(myQuestions[0].question)  // show the first question in the array
    $("#tip").html(myQuestions[0].tip)              // show relative tip
    $("#questionNumber").html(myQuestions[0].number)// // show number of question n/tot  
  }   
}

function nextQuestion() {
  if(myQuestions.length > 1) {
    myQuestions.shift();                          // delete first element from myQuestions
    showQuestion(myQuestions)                     // show the next question   
    $('#myPhoto').css('background-image', 'none'); // delete image...
    $('#myPhoto').css("background-image", 'url(' + myQuestions[0].photo + ')') // and show next one
    $('#answerCheck').empty()                          // reset the check answer  
    $("#userAnswerCatcher").val("")                     // reset input placeholder
    $('#score-title').css("color", "#4799d4")                 // reset "score" color
    $('input').attr('readonly', false);               // make possible to write again on "input"
         
  } else {
    $('#main').css("display", "none")                  // display none all the game when questions are finished
    
  }
}


var score = 120;  
var intervalId;
function countScore() {        // counting score
intervalId = setInterval(function() {
  if (score >= 0) {
    $('.score').html(score)     // show "score" value
  } else {
    $('#game-main').css('display', 'none')    // when the time is over hide all the page
    $('#time-over').css('display', 'block')   // display "time is over"
    $('#footer-game p').css('position', 'absolute').css('bottom', '0px').css('right', '10px') // keep copyright at the bottom
    clearInterval(intervalId);        
  }
  score--;
}, 1000);
}

// var quiz = {
//   questions: [{question1: "this is the question"}],
//   checkAnswer: function(userAnswer, correctAnswer) {
//     if (userAnswer == correctAnswer) {
//       return true;
//     }
//   }
// }

// var quizDom = {
//   displayQuestion: function() {
//     // code to display the question
//   }
// }
function checkAnswer(){
clearInterval(intervalId);   
let userAnswer   = $("#userAnswerCatcher").val(); 
let answerResult = $("#answerCheck");
$('#next-question').toggleClass('display')    // make "next question" appears
changeNextQuestionWord()


   if(userAnswer == myQuestions[0].answer) {
      answerResult.html('<p id="correct-answer">Correct answer. +10 points</p>')
      $('#score-title').css("color", "green")  // it makes "score" green if the answer is correct 
      score += 10     
      $('input').attr('readonly', true);   // prevent from writing again in the input after the user check the answer
      
   } else {
      $('input').attr('readonly', true);   // prevent from writing again in the input after the user check the answer
      answerResult.html(' <p id="wrong-answer">Wrong answer.</p> The correct answer is ' +  '"' + myQuestions[0].answer + '"')
   }
}

function showPhoto() {
 $('#myPhoto').css("background-image", 'url(' + myQuestions[0].photo + ')')
}

function changeNextQuestionWord() {     // change "next question" and link 
 if (myQuestions.length == 1) {
  $('#next-question').html("CHECK THE RESULT")
  finalScoreCatcher()  // catch the final result
} 
}

function showHowToPlay(){
 $('#how-to-play-button').toggleClass('display')
}

var finalScore;
function finalScoreCatcher() {
if ($('#next-question').html() == "CHECK THE RESULT") {
    finalScore = score;
 }
}


function lastPage() {
if(top.location.pathname == "/finished.html") {
    
    console.log(score)
 } 
}

