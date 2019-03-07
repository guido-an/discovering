$(document).ready(function () {
  
  answerResponse      = $("#answerCheck");    // when I remove 'var' it works 
  correctAnswerText       = '<p id="correct-answer">Correct answer. +10 points</p>';
  wrongAnswer         = "Wrong answer, the correct answer is " 
  videoRamiMalek      = $('<iframe width="100%" height="650px" src="https://www.youtube.com/embed/mP0VHJYFOAU?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  nazareVideo         = $('<iframe width="100%" height="650px" src="https://www.youtube.com/embed/Ftok14M5p8g?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  homerSimpsonVideo   = $('<iframe width="100%" height="650px" src="https://www.youtube.com/embed/SXyrYMxa-VI?autoplay=1" frameborder="0"; allow="autoplay"; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  
   function showAllQuestionElements() {
      $('#myQuestion').html(game1.printCurrentQuestion())  
      $('#hint').html(game1.printCurrentHint())           
      $('#question-number').html(game1.printCurrentNumber())  
      game1.printCurrentPhoto()
      ramiMalekQuestion()
      nazareQuestion()
   }
   showAllQuestionElements()

  
$('#how-to-play-button').click(() => {          // when click on "how to play button" show the rules
   $('#how-to-play-section').toggle("slow")    // show how to play rules 
   $('#footer-home').css('position', 'fixed')  // keep footer at the bottom 
})

$('#start-play-button').click(()=> {                     // when click on "start play button"
   $('#home').addClass('display-none');                 // hide homePage
    $('#pre-count-down-section').removeClass('display-none')
    $('#how-to-play-section').css('display', 'none')
    showPreCountDown()
})


var preCountDown = 3;
var myInterval;
function showPreCountDown() {              // PRE COUNT DOWN
  var myInterval = setInterval(function() {
    if (preCountDown > 0) {
      $('#pre-count-down-number').html(preCountDown);
    } else {
      $('#pre-count-down-number').html("Go!")
         setTimeout(function(){ 
      $('#pre-count-down-section') .css('display', 'none')   // hide "pre count down page"
      $('#game').css('display', 'block')                     // and display "game page"
    }, 1000);
    clearInterval(myInterval); 
  }
  preCountDown--;
}, 1000);
  setTimeout(function(){ countScore() }, 4000);   // start counting score after 4 seconds (+ 1 second for the countdown to start )
}

function countScore() {        // COUNTING SCORE 
   game1.intervalIdScore = setInterval(function() {
     if (game1.score >= 0) {
       $('.score').html(game1.score)     // show "score" value
     } else {
       $('#game-main').css('display', 'none')    // when the time is over hide all the page
       $('#time-over').css('display', 'block')   // display "time is over"
       $('.footer p').css("color", "white")      // on time over page, footer color white
       $('#footer-game p').css('position', 'absolute').css('bottom', '0px').css('right', '10px') // keep copyright at the bottom
       clearInterval(game1.intervalIdScore);        
     }
     game1.score--;
   }, 1000);
   }
    
   $(document).keypress(function(e) {              //check answer when press 'enter'
   var keycode = (e.keyCode ? e.keyCode : e.which);
   if (keycode == '13') {
      game1.checkAnswer()
      $('input').attr('readonly', true); 
      $('#answerCheck').removeClass('display-none')
      $("#userAnswerCatcher").val("") 
   }
  });
 
    $('#next-question').click(() => {
         game1.nextQuestion()
         showAllQuestionElements()
         $('#next-question').css('display', 'none')
         $('input').attr('readonly', false); 
         $('#answerCheck').addClass('display-none')
         $('#userAnswerCatcher').addClass('display-none')
          countScore(); 
          if(game1.questionsArray[game1.questionIndex].photo == "") {   // to show video
              showVideo()
          } else {
             removeVideo()
          }
    });

  function showVideo(video) {
         $('#myPhoto').html(video).css('height', '650px') 
   }

  function removeVideo() {
        $('#myPhoto').html("").css('height', '850px') // reset height defined in css
  }
   
  function ramiMalekQuestion() {       
    if (game1.questionIndex == 1) {
       showVideo(videoRamiMalek)
    }
  }
  function nazareQuestion() {       
     if (game1.questionIndex == 6) {
        showVideo(nazareVideo)
     } 
   }

$('#final-score-page-button').click(() => {
   $('#premium-version-section').toggle("slow");      // premium version coming soon appears 
})

    
  });