var discovering =  {

    myQuestions: [
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
      ],
}

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
    myPhoto.css("background-image", 'url(' + discovering.myQuestions[0].photo + ')');
   for (var i = 0; i < array.length; i++) {
     myQuestion.html(discovering.myQuestions[0].question)  // show the first question in the array
     myHint.html(discovering.myQuestions[0].tip)           // show relative tip
     myNumber.html(discovering.myQuestions[0].number) // show number of question n/tot  
   }   
 },
   showNextQuestion: function() {
    if(discovering.myQuestions.length > 1) {
         discovering.myQuestions.shift();                          // delete first element from myQuestions
         discoveringDom.showQuestion(discovering.myQuestions)                     // show the next question   
         myPhotoDisplayNone;                           // delete image...
         myPhoto.css("background-image", 'url(' + discovering.myQuestions[0].photo + ')') // and show next one
         $('#answerCheck').empty()                          // reset the check answer  
         $("#userAnswerCatcher").val("")                     // reset input placeholder
         $('#score-title').css("color", "#4799d4")            // reset "score" color
         myInput.attr('readonly', false);               // make possible to write again on "input"
         ramiMalekQuestion(2, videoRamiMalek);
         nazareQuestion(7, nazareVideo);
    } 
  },
    checkAnswer: function(){
    clearInterval(intervalId);  
    homerSimpsonQuestion(8);
    myInput.attr('readonly', true);   // prevent from writing again in the input after the user check the answer 
    let userAnswer   = $("#userAnswerCatcher").val(); 
    nextQuestion.toggleClass('display')    // make "next question" appears
    changeNextQuestionWord()
 
     if (userAnswer.toUpperCase().includes(discovering.myQuestions[0].answer.toUpperCase())) {
           answerResponse.html(correctAnswer)
           $('#score-title').css("color", "green")  // it makes "score" green if the answer is correct 
           score += 10     
           scoreUpdate                 
    } 
    else {
         answerResponse.html(wrongAnswer) 
     }
 },
 


}

 



  
  
