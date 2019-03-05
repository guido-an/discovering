// function startPlay() {
//     startPlayButton.click(() => {   // when click on start play 
//     homePage.addClass('display');        // hide home
//     showPreCountDown();   
//     preCountDownSection.css('display', 'block')  // display the pre count down page
// })
// }

// var preCountDown = 3;
// var myInterval;
// function showPreCountDown() {  
//   var myInterval = setInterval(function() {
//     if (preCountDown > 0) {
//        preCountDownNumber.html(preCountDown);
//     } else {
//          preCountDownNumber.html("Go!")
//          setTimeout(function(){ 
//          gamePage.css('display', 'block') 
      
//       preCountDownSection.css('display', 'none')
//     }, 1000);
//     clearInterval(myInterval); 
//   }
//   preCountDown--;
// }, 1000);
//   setTimeout(function(){ countScore() }, 4000);   // start counting score after 4 seconds (+ 1 second for the countdown to start )
// }


// function showQuestion(array){
//    myPhoto.css("background-image", 'url(' + discovering.myQuestions[0].photo + ')');
//   for (var i = 0; i < array.length; i++) {
//     myQuestion.html(discovering.myQuestions[0].question)  // show the first question in the array
//     myHint.html(discovering.myQuestions[0].tip)           // show relative tip
//     myNumber.html(discovering.myQuestions[0].number) // show number of question n/tot  
//   }   
// }


// function showNextQuestion() {
//   if(discovering.myQuestions.length > 1) {
//        discovering.myQuestions.shift();                          // delete first element from myQuestions
//        discoveringDom.showQuestion(discovering.myQuestions)                     // show the next question   
//        myPhotoDisplayNone;                           // delete image...
//        myPhoto.css("background-image", 'url(' + discovering.myQuestions[0].photo + ')') // and show next one
//        $('#answerCheck').empty()                          // reset the check answer  
//        $("#userAnswerCatcher").val("")                     // reset input placeholder
//        $('#score-title').css("color", "#4799d4")            // reset "score" color
//        myInput.attr('readonly', false);               // make possible to write again on "input"
//        ramiMalekQuestion(2, videoRamiMalek);
//        nazareQuestion(7, nazareVideo);
//   } 
// }

// var score = 120;  
// var intervalId;
// function countScore() {        // counting score
// intervalId = setInterval(function() {
//   if (score >= 0) {
//     $('.score').html(score)     // show "score" value
//   } else {
//     gameMainSection.css('display', 'none')    // when the time is over hide all the page
//     $('#time-over').css('display', 'block')   // display "time is over"
//     $('.footer p').css("color", "white")      // on time over page, footer color white
//     $('#footer-game p').css('position', 'absolute').css('bottom', '0px').css('right', '10px') // keep copyright at the bottom
//     clearInterval(intervalId);        
//   }
//   score--;
// }, 1000);
// }



// function checkAnswer(){
//    clearInterval(intervalId);  
//    homerSimpsonQuestion(8);
//    myInput.attr('readonly', true);   // prevent from writing again in the input after the user check the answer 
//    let userAnswer   = $("#userAnswerCatcher").val(); 
//    nextQuestion.toggleClass('display')    // make "next question" appears
//    changeNextQuestionWord()

//     if (userAnswer.toUpperCase().includes(discovering.myQuestions[0].answer.toUpperCase())) {
//           answerResponse.html(correctAnswer)
//           $('#score-title').css("color", "green")  // it makes "score" green if the answer is correct 
//           score += 10     
//           scoreUpdate                 
//    } 
//    else {
//         answerResponse.html(wrongAnswer) 
//     }
// }


// function changeNextQuestionWord() {     // change "next question" and link 
//  if (discovering.myQuestions.length == 1) {
//   nextQuestion.html("QUESTIONS ARE FINISHED, CHECK THE RESULT")
//   finalScoreCatcher()                  // catch the final result
//   } 
// }


// var finalScore;
// function finalScoreCatcher() {
// if (nextQuestion.html() == "QUESTIONS ARE FINISHED, CHECK THE RESULT") {
//     finalScore = score;
//  }   
// }

// function showVideo(frame) {
//   myPhoto.html(frame)       // show the video 
//   myPhoto.css('height', '650px')  
// }

// function removeVideo() {
//   myPhoto.html("")     // remove video 
//   myPhoto.css('height', '850px') // reset height defined in css
// }

// function ramiMalekQuestion(questionNum, video) {       
//   if (discovering.myQuestions[0].number == questionNum) {
//     discoveringDom.showVideo(video)
//   } else{
//     discoveringDom.removeVideo()
//   }
// }

// function nazareQuestion(questionNum, video) {    // shown after user checkAnswer()
//   if(discovering.myQuestions[0].number == questionNum) {
//     discoveringDom.showVideo(video) 
//   }
// }

// function homerSimpsonQuestion(questionNum) {    // shown after user checkAnswer()
//   if(discovering.myQuestions[0].number == questionNum) {
//     myPhotoDisplayNone
//     discoveringDom.showVideo(homerSimpsonVideo)
//   } 
// }
