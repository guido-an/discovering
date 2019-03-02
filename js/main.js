const myQuestions = [
  { question: "In which city this photo was taken?",
    answer:   "Amsterdam",
    photo:    '../img/jhon.jpg',
    tip:      "Well, let's start easy...<br> It was the year 1969, in the middle of the Vietnam War. John Lennon and Yoko Ono decided to use their honeymoon to promote world peace.",
    number:   '1'
  },

  { question: "What's his name?",
    answer:    "Rami Malek",
    tip:      "Recently won the best actor Oscar for his performance as Freddie Mercury in Bohemian Rhapsody.",
    number:    '2',
  },
  
  { question: "By what name this event passed into history?",
    answer:    "Rumble in the Jungle",
    photo:    '../img/ali.jpg',
    tip:      "One of the greatest fights of all time.<br> Against all odds Muhammad Ali beats Big George Foreman (40 fights, 40 wins) and reinforces his position among the legends of the noble art.<br> That's the 1974 and we are in Zaire.",
    number:   '3',
  },

  { question: "What is the photographer's name?",
    answer:    "Steve McCurry",
    photo:    '../img/shaolin-monastery.jpg',
    tip:      'Shaolin monks training in  Zhengzhou, China. This photo was taken by one of the most iconic voices in contemporary photography.',
    number:    '4',
  },
  { question: "Is it true or false?",
    answer:    "true",
    photo:    '../img/varanasi.jpg',
    tip:      "We are in Varanasi, one of the most diverse, crazy, colourful and intense places of India: a place where Death is important as Life.<br> Around 300 bodies are burned every day along the Gange River.",
    number:    '5',
  },
  { question:  "Question 6?",
    answer:    "24",
    tip:       "",
    number:    '6',
  },
  { question:  "How many meters was it?",
    answer:    "24",
    tip:       "Welcome to Nazaré!<br> This spot in Portugal is well known for a reason: it produces the largest waves on planet Earth.<br> Recently the Brazilian surfer Rodrigo Koxa set a new record for the biggest wave ever surfed. <br> Hint: watch the video!",
    number:    '7',
  },
  { question: "Who is this character?",
    answer:    "Homer Simpson",
    photo:    '../img/quesiton-mark.jpg',
    tip:      "A wise man once said: 'Here's to alcohol: the cause of, and solution to, all of life's problems'",
    number:    '8',
  }
]


var preCountDown = 3;
var myInterval;

function showPreCountDown() {
  // preCountDown = $('#pre-count-down-number').html()
  var myInterval = setInterval(function() {
  if (preCountDown > 0) {
     $('#pre-count-down-number').html(preCountDown);
  } else {
    
    $('#pre-count-down-number').html("Go!")
    setTimeout(function(){ 
      $('#game').css('display', 'block') 
      
      $('#pre-count-down-section').css('display', 'none')
    }, 1000);
    clearInterval(myInterval); 
  }
  preCountDown--;
}, 1000);
  setTimeout(function(){ countScore() }, 4000);   // start counting score after 4 seconds (+ 1 second for the countdown to start )
}


function showQuestion(array){
   //countScore()          // show score
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
      $('#score-title').css("color", "#4799d4")            // reset "score" color
      $('input').attr('readonly', false);               // make possible to write again on "input"
     
      ramiMalekQuestion();
      nazareQuestion();
    
        
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

    if(userAnswer.toUpperCase().includes(myQuestions[0].answer.toUpperCase())) {
      answerResult.html('<p id="correct-answer">Correct answer. +10 points</p>')
      $('#score-title').css("color", "green")  // it makes "score" green if the answer is correct 
      score += 10     
      $('.score').html(score) // update score when user guess the answer
      $('input').attr('readonly', true);   // prevent from writing again in the input after the user check the answer
      homerSimpsonQuestion()
   } else {
      $('input').attr('readonly', true);   // prevent from writing again in the input after the user check the answer
      answerResult.html(' <p id="wrong-answer">Wrong answer.</p> The correct answer is ' +  '"' + myQuestions[0].answer + '"')
      homerSimpsonQuestion()  
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

function showVideo(frame) {
  $('#myPhoto').html(frame)       // show the video 
  $('#myPhoto').css('height', '650px')  
}
function removeVideo() {
  $('#myPhoto').html("")     // remove video 
  $('#myPhoto').css('height', '850px') // reset height defined in css
}

function ramiMalekQuestion() {        // shown when click on next question
  var frame = $('<iframe width="100%" height="650px" src="https://www.youtube.com/embed/mP0VHJYFOAU?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  if (myQuestions[0].number == 2) {
    showVideo(frame)
  } else{
    removeVideo()
  }
}

function nazareQuestion() {    // shown after user checkAnswer()
  var frame = $('<iframe width="100%" height="650px" src="https://www.youtube.com/embed/Ftok14M5p8g?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  if(myQuestions[0].number == 7) {
    showVideo(frame) 
  } else{
  //  removeVideo() I don't need this here 
  }
}

function homerSimpsonQuestion() {    // shown after user checkAnswer()
  if(myQuestions[0].number == 8) {
     var frame = $('<iframe width="100%" height="650px" src="https://www.youtube.com/embed/SXyrYMxa-VI?autoplay=1" frameborder="0"; allow="autoplay"; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    $('#myPhoto').css('background-image', 'none')
    showVideo(frame)
  } 
}

