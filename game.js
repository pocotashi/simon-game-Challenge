var userClickPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

$(".btn").click(function() {
      var userChosenColour = $(this).attr("id");
      userClickPattern.push(userChosenColour);
      console.log(userClickPattern);


      function playSound(name) {
        var audio = new Audio("sounds/" + ("#" + userChosenColour) + ".mp3");
        audio.play(name);

        }
 });

function nextSequence(){

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
