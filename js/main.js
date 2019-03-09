function Game(array){
  this.questionsArray = array;
  this.questionIndex = 0; 
  this.score = 220;
  this.intervalIdScore;
  this.printCurrentQuestion = function() {
      return this.questionsArray[this.questionIndex].question
  }
  this.printCurrentHint   = function()  {
   return this.questionsArray[this.questionIndex].hint
  }
  this.printCurrentNumber  = function()  {
     return this.questionsArray[this.questionIndex].number
  }
  this.printCurrentPhoto  = function()  {
     return $('#myPhoto').css("background-image", 'url(' + this.questionsArray[this.questionIndex].photo + ')');
  }
  this.nextQuestion = function(){   
     this.questionIndex++ // keep truck of current question
      $('.score').css('color', '#4799d4'); 
     if (game1.questionIndex == 8) {
        clearInterval(game1.intervalIdScore)
        $('#game').css('display', 'none')
        $('#final-score-section').removeClass('display-none')
        $('#finalScore').html(game1.score+1);
        $('input').attr('readonly', false);    // make input writable again
     } 
  }
  this.checkAnswer = function() {
     clearInterval(this.intervalIdScore)
     if (game1.questionIndex == 7) {   
        $('#myPhoto').css('background-image', 'none').css('height', '650px').html(homerSimpsonVideo)
        $('#next-question').html("QUESTIONS ARE FINISHED, CHECK THE RESULT")
        
     } 
     var userAnswer = $('#userAnswerCatcher').val()
     $('#next-question').css('display', 'block');
      var questionAnswer =  this.questionsArray[this.questionIndex].answer
      if (userAnswer.toUpperCase().includes(questionAnswer.toUpperCase())) {
        answerResponse.html(correctAnswerText);
        this.score += 10;    
        $('.score').html(game1.score).css('color', 'green');
     } else {
        answerResponse.html(wrongAnswer + "'" + this.questionsArray[this.questionIndex].answer + "'")
     }
  }
}

var game1 = new Game(questionsArray)












