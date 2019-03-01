$(document).ready(function () {
     
  showQuestion(myQuestions)
  showPhoto()
 

  $("#check").click(() => checkAnswer())            // Check if the answer is correct, return "correct" or "wrong"
  
  $('#next-question').click(() => {
    nextQuestion()                                    // When click on "next question", next question appears
   $('#next-question').toggleClass('display')         // Set display none for "next quesiton" (when the user click on check answer "next question appears again")
      if($('#next-question').html() == "CHECK THE RESULT") {
        $('#game-main').css('display', 'none')      // hide the game body when the user click on "check the result"
        $('#final-score-title').css('display', 'block');
        $('#finalScore').html(finalScore);   
         j
        
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

  AOS.init(); // animate plugin

});
