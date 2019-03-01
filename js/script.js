$(document).ready(function () {
     
  showQuestion(myQuestions)
  showPhoto()
 

  $("#check").click(() => checkAnswer())            // Check if the answer is correct, return "correct" or "wrong"
  
  $('#next-question').click(() => {
    nextQuestion()                                    // When click on "next question", next question appears
   $('#next-question').toggleClass('display')         // Set display none for "next quesiton" (when the user click on check answer "next question appears again")
      if($('#next-question').html() == "CHECK THE RESULT") {
        $('#game-main').css('display', 'none')      // hide the game body when the user click on "check the result"
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

  $('#how-to-play-button').click(() => {
     $('#how-to-play-section').toggle("slow");      // show how to play rules 
  })

  $('#final-score-page-button').click(() => {
    $('#premium-version-section').toggle("slow");      // premium version coming soon appears 
    $('input').attr('readonly', false); 
 })


  AOS.init(); // animate plugin

});
