var userClickPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

$(".btn").click(function() {

      playSound(userChosenColour);
      var userChosenColour = $(this).attr("id");
      userClickPattern.push(userChosenColour);
      console.log(userClickPattern);

      animatePress();



      function playSound(name) {
        $(".btn").on("click", function() {
              // var userChosenColour = $(this).attr("id");
              var audio = new Audio("sounds/" + $(this).attr("id") + ".mp3");
              audio.play();
            });
        }


        function animatePress(currentColour) {
          $(".btn").click(function() {
               $("#" + userChosenColour).addClass("pressed");
               setTimeout(animatePress(userChosenColour), 100);

             });
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

// function animatePress(currentColour) {
//   $(".btn").click(function() {
//        var userClickedColour = $(this).attr("id");
//        userClickedColour.addClass("pressed");
//      });
//   }
//
// animatePress(currentColour);
