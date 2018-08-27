// BUSINESS LOGIC
 function page(){
   location.reload()
 }

  var arrays = [];
var originScore = function(numbers){
  var tempscore = 0;


        if (numbers === 1) {
          totalScore = arrays.length = 0;
      return "Sorry You rolled a 1. Score is zero"

    }

    else {
      arrays.push(numbers);

      totalScore =  arrays.reduce((a,b)=>a+b);

      // tempscore += numbers;
      // ++tempscore;
        if (totalScore >= 100) {
          return "WINNER!!"
        }
          return totalScore;
    }
}

function Dice(){
  var tempScore = 0;
   var gameScore = 0;
}

var randomize = function(){
  var randomNumber = Math.floor((Math.random() * 6) + 1);
   return randomNumber;
}

var randNumber = randomize();

var playerScore = function(player){
  var roll = randNumber;
  var tempScore = 0;
  var arrays = [];

  if (roll === 1) {
    return 0;
  }
  else {
    arrays.push(roll);
    for (var i = 0; i < arrays.length; i++) {
      var total = tempScore + roll;
      return total;
    }


  }
}

// USER LOGIC

  $("#player1-hold").click(function(){
    $("#player1-hold").toggle();
  });
  $("#player2-hold").click(function(){
    $("#player2-hold").toggle();
  });

  // Player 1

  $("#player1-roll").click(function(){
    var player1 = randomize();
    $(".results1").text(player1);
    var score1 = originScore(player1);
    $(".rollscore1").text(score1);
  });

  // Player 2

  $("#player2-roll").click(function(){
    var player2 = randomize();
      $(".results2").text(player2);
      var score2 = originScore(player2);
      $(".rollscore2").text(score2);

  })

   $("#new-game").click(function(){
     page();

   });



});
