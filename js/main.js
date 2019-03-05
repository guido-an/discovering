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
    tip:      "We are in Varanasi, one of the most diverse, crazy, colourful and intense places of India: the place where many believers come to die and be cremated.<br> Around 300 bodies are burned every day along the Gange River.",
    number:    '5',
  },
  { question:  "From which italian region are they from?",
    answer:    "Sicily",
    photo:      '../img/cannoli.jpg',
    tip:       "Made of fried pastry dough and filled with delicious fresh ricotta, Cannoli are one of those things to absolutely try during a trip in Italy.",
    number:    '6',
  },
  { question:  "How many meters was it?",
    answer:    "24",
    tip:       "Welcome to Nazaré!<br> This spot in Portugal is well known for a reason: it produces the largest waves on planet Earth.<br> Recently the Brazilian surfer Rodrigo Koxa set a new record for the biggest wave ever surfed.",
    number:    '7',
  },
  { question: "Who is this character?",
    answer:    "Homer Simpson",
    photo:    '../img/quesiton-mark.jpg',
    tip:      "A wise man once said: 'Here's to alcohol: the cause of, and solution to, all of life's problems'",
    number:    '8',
  }
]

var Quiz = function(questions) {
this.score
}

// Quiz.prototype.addScore = function(points) {
//   this.score += points
// }

// Quiz.prototype.checkAnswer = function(question) {
//  //if answer === question.answer
//       // this.score += question.score
// }

// QuizDOM = function() {

// }

// QuizDOM.prototype.updateScore = function(score) {
//   $('#score').html(score)
// }


var discoveringDom = {
howToPlay: function() {
howToPlayButton.click(()=> {
howToPlaySection.toggle("slow");      // show how to play rules 
footerHome.css('position', 'fixed')  // keep footer at the bottom 
})
}, 
startPlay: function() {
startPlayButton.click(() => {   // when click on start play 
homePage.addClass('display');        // hide home
showPreCountDown();   
preCountDownSection.css('display', 'block')  // display the pre count down page
})
},
showQuestion: function (array){
myPhoto.css("background-image", 'url(' + myQuestions[0].photo + ')');
for (var i = 0; i < array.length; i++) {
myQuestion.html(myQuestions[0].question)  // show the first question in the array
myHint.html(myQuestions[0].tip)           // show relative tip
myNumber.html(myQuestions[0].number) // show number of question n/tot  
}   
},
showNextQuestion: function() {
if(myQuestions.length > 1) {
 myQuestions.shift();                          // delete first element from myQuestions
 this.showQuestion(myQuestions)                     // show the next question   
 myPhotoDisplayNone;                           // delete image...
 myPhoto.css("background-image", 'url(' + myQuestions[0].photo + ')') // and show next one
 $('#answerCheck').empty()                          // reset the check answer  
 $("#userAnswerCatcher").val("")                     // reset input placeholder
 $('#score-title').css("color", "#4799d4")            // reset "score" color
 myInput.attr('readonly', false);               // make possible to write again on "input"
 this.ramiMalekQuestion(2, videoRamiMalek);
 this.nazareQuestion(7, nazareVideo);
} 
},
checkAnswer: function(){
clearInterval(intervalId);  
this.homerSimpsonQuestion(8);
myInput.attr('readonly', true);   // prevent from writing again in the input after the user check the answer 
let userAnswer   = $("#userAnswerCatcher").val(); 
nextQuestion.toggleClass('display')    // make "next question" appears
this.changeNextQuestionWord()

if (userAnswer.toUpperCase().includes(myQuestions[0].answer.toUpperCase())) {
//  if (quiz.checkanswer(question, useranswer)) {

//  }      
  answerResponse.html(correctAnswer)
   $('#score-title').css("color", "green")  // it makes "score" green if the answer is correct 
   score += 10     
  //  scoreUpdate  
  $('.score').html(score)                
} 
else {
//  answerResponse.html(wrongAnswer) 
answerResponse.html(' <p id="wrong-answer">Wrong answer.</p> The correct answer is ' +  '"' + myQuestions[0].answer + '"')
}
},
changeNextQuestionWord: function() {     // change "next question" and link 
if (myQuestions.length == 1) {
nextQuestion.html("QUESTIONS ARE FINISHED, CHECK THE RESULT")
score += 1;
this.finalScoreCatcher()                  // catch the final result
} 
},
finalScore,
finalScoreCatcher: function() {
if (nextQuestion.html() == "QUESTIONS ARE FINISHED, CHECK THE RESULT") {
finalScore = score;
}   
},
showVideo: function(frame) {
myPhoto.html(frame)       // show the video 
myPhoto.css('height', '650px')  
},
removeVideo: function() {
myPhoto.html("")     // remove video 
myPhoto.css('height', '850px') // reset height defined in css
},
ramiMalekQuestion: function(questionNum, video) {       
if (myQuestions[0].number == questionNum) {
this.showVideo(video)
} else{
this.removeVideo()
}
},
nazareQuestion: function(questionNum, video) {    // shown after user checkAnswer()
if(myQuestions[0].number == questionNum) {
this.showVideo(video) 
}
},
homerSimpsonQuestion: function(questionNum) {    // shown after user checkAnswer()
if(myQuestions[0].number == questionNum) {
myPhotoDisplayNone
this.showVideo(homerSimpsonVideo)
} 
}, 

}

var preCountDown = 3;
var myInterval;
function showPreCountDown() {  
var myInterval = setInterval(function() {
if (preCountDown > 0) {
 preCountDownNumber.html(preCountDown);
} else {
   preCountDownNumber.html("Go!")
   setTimeout(function(){ 
   gamePage.css('display', 'block') 

preCountDownSection.css('display', 'none')
}, 1000);
clearInterval(myInterval); 
}
preCountDown--;
}, 1000);
setTimeout(function(){ countScore() }, 4000);   // start counting score after 4 seconds (+ 1 second for the countdown to start )
}


var score = 180;  
var intervalId;
function countScore() {        // counting score
intervalId = setInterval(function() {
if (score >= 0) {
$('.score').html(score)     // show "score" value
} else {
gameMainSection.css('display', 'none')    // when the time is over hide all the page
$('#time-over').css('display', 'block')   // display "time is over"
$('.footer p').css("color", "white")      // on time over page, footer color white
$('#footer-game p').css('position', 'absolute').css('bottom', '0px').css('right', '10px') // keep copyright at the bottom
clearInterval(intervalId);        
}
score--;
}, 1000);
}










