const myQuestions = [
    { question: "Question 1?",
      answer:   "answer 1",
      photo:    './img/lion.jpg',
      tip:      'This is a very good tip ',
      number:   '1'
    },
    
    { question: "Question 2?",
      answer:    "answer 2",
      photo:    'http://i54.tinypic.com/4zuxif.jpg',
      tip:      'tip 2',
      number:   '2',
    },

    { question: "Question 3?",
      answer:    "answer 3",
      photo:    'http://i54.tinypic.com/4zuxif.jpg',
      tip:      'tip 3',
      number:    ' 3',
    }
]

function showQuestion(array){
    for(var i = 0; i < array.length; i++) {
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
      $("#userAnswerCatcher").val("")                             // reset input placeholder
    } else {
      $('#main').css("display", "none")                  // display none all the game when questions are
    }
  }

var i = 120;                                    // counting score
 var intervalId = setInterval(function() {
   if (i > 0) {
     $('#score').html(i)
   } else {
     alert("time is over");
     clearInterval(intervalId);
   }
   i--;
 }, 1000);
     

function checkAnswer(){
  let userAnswer   = $("#userAnswerCatcher").val(); 
  let answerResult = $("#answerCheck");
  $('#next-question').toggleClass('display')    // make "next question" appears
  changeNextQuestionWord()
     if(userAnswer == myQuestions[0].answer) {
      answerResult.html('<p id="correct-answer">Correct answer.</p>')
      i += 10  
      $('#score').css("color", "green").css("font-size", "48px");     
     } else {
      answerResult.html(' <p id="wrong-answer">Wrong answer.</p> The correct answer is ' +  '"' + myQuestions[0].answer + '"')
     }
}

 function showPhoto() {
   $('#myPhoto').css("background-image", 'url(' + myQuestions[0].photo + ')')
   
 }


 function changeNextQuestionWord() {     // change "next question" and link 
  if(myQuestions.length == 1) {
    $('#next-question').html("CHECK THE RESULT")
    $( "#next-question" ).attr( "href", "https://www.google.com" ); // when questions are over, send the user to the next page   
  }
 }
 











