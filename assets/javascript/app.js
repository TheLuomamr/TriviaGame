$(document).ready(function(){

var panel=$("#quiz");

///Questions and Answer Array///

var questions = [{
    question: "1. Who does Michael hate the most in the Office?",
    answers: ["A. Dwight", "B. Jim", "C. Ryan", "D. Toby"],
    correctAnswer: "D. Toby"
},

{ 
    question: "2. ___ is always pranking ___ at the office.",
    answers: ["A. Pam, Jim", "B. Dwight, Stanley", "C. Jim, Dwight", "D. Ryan, Creed"],
    correctAnswer: "C. Jim, Dwight"
},

{
    question: "3. Who is not a Michael Scott alter-ego?",
    answers: ["A. Michael Klump", "B. Easter Eddie", "C. Caleb Crawdad", "D. Prison Mike"],
    correctAnswer: "B. Easter Eddie"
},

{
    question: "4. Who was usually the head of The Party Planning Commitee?",
    answers: ["A. Pam", "B. Angela", "C. Michael", "D. Andy"],
    correctAnswer: "B. Angela"
},

{
    question: "5. Michael fell into a _____, and got harrassed all day at the Office.",
    answers: ["A. hole", "B. Scranton river", "C. Koi Pond", "D. Elevator shaft"],
    correctAnswer: "C. Koi Pond"
},
];
///create a game countdown timer///
var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 60,
  countdown: function() {
    game.counter--;
    $("#timesUp").html(game.counter);
    if (game.counter === 0) {
      game.done();
    }
  },

  ///start function to begin game with a counter/timer//
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#timer").prepend("<h2>Time Remaining: <span id='timesUp'>60</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<div <button id='done'>Done</button></div>");
  },
  
///function for what happens when answering( keeping score)///

  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
 
///results to be shown when done/time runs out///
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#timer").remove();
    panel.html("<h2>Complete!</h2>");
    panel.append("<h2>Correct Answers: " + this.correct + "</h2>");
    panel.append("<h2>Incorrect Answers: " + this.incorrect + "</h2>");
    panel.append("<h2>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h2>");
  }
};

//// click events /////
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});

});

