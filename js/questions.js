function Question(question, answer, photo, hint, number) {
    this.question = question; 
    this.answer = answer;
    this.photo = photo;
    this.hint = hint; 
    this.number = number;    
}
 
var question1 = new Question (
   "In which city this photo was taken?",
   "Amsterdam",
   './img/jhon.jpg',
    "Well, let's start easy...<br> It was the year 1969, in the middle of the Vietnam War. John Lennon and Yoko Ono decided to use their honeymoon to promote world peace.",
    '1'
    );
var question2 = new Question (
    "What's his name?",
    "Rami Malek",
    "",
    "Recently won the best actor Oscar for his performance as Freddie Mercury in Bohemian Rhapsody.",
    '2',
    );
var question3 = new Question (
    "By what name this event passed into history?",
    "Rumble in the Jungle",
    './img/ali.jpg',
    "One of the greatest fights of all time.<br> Against all odds Muhammad Ali beats Big George Foreman (40 fights, 40 wins) and reinforces his position among the legends of the noble art.<br> That's the 1974 and we are in Zaire.",
    '3',
    );
var question4 = new Question (
    "What is the photographer's name?",
    "Steve McCurry",
    './img/shaolin-monastery.jpg',
    'Shaolin monks training in  Zhengzhou, China. This photo was taken by one of the most iconic voices in contemporary photography.',
    '4',
    );
var question5 = new Question (
   "Is it true or false?",
    "true",
    './img/varanasi.jpg',
    "We are in Varanasi, one of the most diverse, crazy, colourful and intense places of India: the place where many believers come to die and be cremated.<br><br> Around 300 bodies are burned every day along the Gange River.",
    '5',
    );

var question6 = new Question (
    "From which italian region are they from?",
    "Sicily",
    './img/cannoli.jpg',
    "Made of fried pastry dough and filled with delicious fresh ricotta, Cannoli are one of those things to absolutely try during a trip in Italy.",
    '6',
     );

var question7 = new Question (
    "How many meters was it?",
    "24",
    "",
    "Welcome to Nazaré!<br> This spot in Portugal is well known for a reason: it produces the largest waves on planet Earth.<br> Recently the Brazilian surfer Rodrigo Koxa set a new record for the biggest wave ever surfed.",
    '7',
    );

var question8 = new Question (
    "Who is this character?",
    "Homer Simpson",
    './img/quesiton-mark.jpg',
    "And to finish with a toast, a wise man once said:<br> 'Here's to alcohol: the cause of, and solution to, all of life's problems'",
    '8',
    );


var questionsArray = [question1, question2, question3, question4, question5, question6, question7, question8]

