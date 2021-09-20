var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickPattern = [];

var level = 0;

var started = false;

// Starting the game.
$(document).keydown(function(){
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    start = true;
  }
});

// button clicks actions.
$(".btn").click(function() {

      var userChosenColour = $(this).attr("id");
      userClickPattern.push(userChosenColour);
      // console.log(userClickPattern);

      playSound(userChosenColour);

      animatePress(userChosenColour);

      checkAnswer(userClickPattern);

});

// Functions

// function for the game pattern.
function nextSequence(){
  level++;
  $("#level-title").text("Level " + level);
  userClickPattern = [];


  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}

// function for playing the sounds.
function playSound(name) {
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
      };

// function to add the animation class
function animatePress(currentColour) {
             $("#" + currentColour).addClass("pressed");

             setTimeout(function() {
               $("#" + currentColour).removeClass("pressed");
             }, 100);
        }

// function to check user answer with the game pattern.
function checkAnswer(currentLevel) {
  var userClickLast = userClickPattern[userClickPattern.length - 1];
  var gameClickLast = gamePattern[gamePattern.length -1];

  if (userClickLast === gameClickLast) {
    setTimeout(function() {
      nextSequence(); }, 1000);
  }
  if (userClickLast == gameClickLast) {
    console.log("user click " + userClickPattern);
    console.log("game click " + gamePattern);
    console.log("success");
  } else {
    var wrongSound = new Audio("sounds/wrong.mp3")
    wrongSound.play();
    $('body').addClass('game-over');
    setTimeout(function(){
      $('body').removeClass('game-over');
    }, 200);
    $('h1').text("Game Over, Press Any Key to Restart");
    startOver();
    console.log("user click " + userClickPattern);
    console.log("game click " + gamePattern);
    console.log("wrong");
    
  }
}

// function to start over.
function startOver(){
  level = 0;
  started = false;
  gamePattern = [];
}
