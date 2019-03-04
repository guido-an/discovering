$(document).ready(function () {
  
  howToPlayButton     = $('#how-to-play-button')
  startPlayButton     =  $('#start-play-button')
  howToPlaySection    = $('#how-to-play-section')
  footerHome          =  $('#footer-home')
  preCountDownNumber  = $('#pre-count-down-number')
  preCountDownSection = $('#pre-count-down-section')
  gamePage            = $('#game')
  gameMainSection     = $('#game-main')
  homePage            = $('#home')
  myQuestion          = $("#myQuestion")
  myHint              = $("#tip")
  myNumber            = $("#questionNumber")
  myInput             = $('input')
  answerResponse      = $("#answerCheck")
  correctAnswer       = '<p id="correct-answer">Correct answer. +10 points</p>';
  wrongAnswer         = ' <p id="wrong-answer">Wrong answer.</p> The correct answer is ' +  '"' + discovering.myQuestions[0].answer + '"';
  scoreUpdate         = $('.score').html(score) 
  nextQuestion        = $('#next-question')
  nextQuestionHtml    = $('#next-question').html()
  myPhoto             = $('#myPhoto')
  myPhotoDisplayNone  = myPhoto.css('background-image', 'none')
  videoRamiMalek      = $('<iframe width="100%" height="650px" src="https://www.youtube.com/embed/mP0VHJYFOAU?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  nazareVideo         = $('<iframe width="100%" height="650px" src="https://www.youtube.com/embed/Ftok14M5p8g?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  homerSimpsonVideo   = $('<iframe width="100%" height="650px" src="https://www.youtube.com/embed/SXyrYMxa-VI?autoplay=1" frameborder="0"; allow="autoplay"; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')

  discoveringDom.howToPlay()
  howToPlayButton.toggleClass('display')
  discoveringDom.startPlay()
  discoveringDom.showQuestion(discovering.myQuestions)


  $("#check").click(() => discoveringDom.checkAnswer())            // Check if the answer is correct, return "correct" or "wrong"
    nextQuestion.click(() => {
      discoveringDom.showNextQuestion()   
      countScore()                                 // When click on "next question", next question appears
      nextQuestion.toggleClass('display')         // Set display none for "next quesiton" (when the user click on check answer "next question appears again")
        if(nextQuestion.html() == "QUESTIONS ARE FINISHED, CHECK THE RESULT") {
          clearInterval(intervalId)                  // stop the counter in the last page 
          gameMainSection.css('display', 'none')      // hide the game body when the user click on "check the result"
          $('#final-score-section').css('display', 'block'); // display the final score page
          $('#finalScore').html(finalScore);         // display the final score 
          $('.footer').css('position', 'fixed').css('bottom', '0') // on final score page, it keeps the footer at the bottom
          $('.footer p').css('color', 'white');
        }
 })
  
 $(document).keypress(function(e) {              
   var keycode = (e.keyCode ? e.keyCode : e.which);
   if (keycode == '13') {
       discoveringDom.checkAnswer()                                 // when user click "enter" check answer
   }
  });


  $('#final-score-page-button').click(() => {
    $('#premium-version-section').toggle("slow");      // premium version coming soon appears 
    myInput.attr('readonly', false);               // make the email input writable again 
 })

  AOS.init(); // animate plugin

});
