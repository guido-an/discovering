$(document).ready(function () {
  
  howToPlayButton     = $('#how-to-play-button');
  startPlayButton     =  $('#start-play-button')
  howToPlaySection    = $('#how-to-play-section');
  footerHome          =  $('#footer-home');
  preCountDownNumber  = $('#pre-count-down-number');
  preCountDownSection = $('#pre-count-down-section')
  gamePage            = $('#game');
  gameMainSection     = $('#game-main');
  homePage            = $('#home')
  nextQuestion        = $('#next-question');
  nextQuestionHtml    = $('#next-question').html();

  myPhoto = $('#myPhoto');
  

  howToPlay()
  howToPlayButton.toggleClass('display')
  startPlay()
  showQuestion(myQuestions)
  

  $("#check").click(() => checkAnswer())            // Check if the answer is correct, return "correct" or "wrong"
  
  nextQuestion.click(() => {
    showNextQuestion()   
    countScore()                                 // When click on "next question", next question appears
    nextQuestion.toggleClass('display')         // Set display none for "next quesiton" (when the user click on check answer "next question appears again")
      if(nextQuestion.html() == "CHECK THE RESULT") {
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
       checkAnswer()                                 // when user click "enter" check answer
   }
  });

  
  

  $('#final-score-page-button').click(() => {
    $('#premium-version-section').toggle("slow");      // premium version coming soon appears 
    $('input').attr('readonly', false);               // make the email input writable again 
 })

  AOS.init(); // animate plugin

});
