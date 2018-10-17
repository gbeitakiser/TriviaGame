// Variables

var answerRight = 0;
var answerWrong = 0;
var unanswered = 0;

// Timer 

var timeLeft = 30;

function timer() {
    timeLeft -= 1;
    $("#timer").text("Seconds Remaining: " + timeLeft);
    if (timeLeft <= 0) {
        gameOver();
    }
}

// Game Over Function
function gameOver() {
    $(".cont-start").hide();
    $(".cont-game").hide();
    $(".cont-over").show();
}


$(document).ready(function() {

    
    // Hides other screens to show only start screen
    $(".cont-game").hide();
    $(".cont-over").hide();

    // Starts game when clicked
    $("#start").click(function() {
        
        // Timer
        var counter = setInterval(timer, 1000);
        $("#timer").text("Seconds Remaining: " + timeLeft);

        // Hides start and end screen so only game screen shows
        $(".cont-start").hide();
        $(".cont-game").show();
        $(".cont-over").hide();

        // Ensures only one checkbox can be clicked at a time
        $(document).on('click', 'input[type="checkbox"]', function() {      
            $('input[type="checkbox"]').not(this).prop('checked', false);      
        });


        // Displays score screen for gameOver function
        $("#right-answers").html("Right Answers: " + answerRight);
        $("#wrong-answers").html("Wrong Answers: " + answerWrong);
        $("#unanswered").html("Unanswered: " + unanswered);

        // Sends user to game over screen if they finish early and click button
        $("#done").click(function() {
            gameOver();
        })
    });

});