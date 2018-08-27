// BUSINESS LOGIC
 function page(){
   location.reload()
 }


var randomize = function(){
  var randomNumber = Math.floor((Math.random() * 6) + 1);
   return randomNumber;
}


// USER LOGIC
$(document).ready(function(){
  // Player 1
var dice1= 0;
var summation1 = 0;
var totalscore1 = 0;
  $("#player1-roll").click(function(){
    dice1 = randomize();

    summation1 += dice1;


    $(".rollscore1").text(dice1);
    $(".summation1").text(summation1);
  });

    $("#player1-hold").click(function(){
      // $("#player1-hold").toggle();
      totalscore1+= summation1;
      $(".results1").text(totalscore1);


    });


  // Player 2
  var dice2= 0;
  var summation2 = 0;
  var totalscore2 =0;
  $("#player2-roll").click(function(){
    dice2= randomize();
    summation2 += dice2;

    $(".rollscore2").text(dice2);
    $(".summation2").text(summation2);
  })

    $("#player2-hold").click(function(){
      totalscore2 += summation2;
      $(".results2").text(totalscore2);


    });


   $("#new-game").click(function(){
     page();

   });
});
