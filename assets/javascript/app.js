// Variables

var answerRight = 0;
var answerWrong = 0;
var unanswered = 0;

// Timer 

var count = 2;

function timer() {
    count = count - 1;
    if (count <= 0) {
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

    // Displays score screen for gameOver function
    $("#right-answers").html("Right Answers: " + answerRight);
    $("#wrong-answers").html("Wrong Answers: " + answerWrong);
    $("#unanswered").html("Unanswered: " + unanswered);

    $(".cont-game").hide();
    $(".cont-over").hide();

    $("#start").click(function() {

        // Timer
        var counter = setInterval(timer, 1000);

        $(".cont-start").hide();
        $(".cont-game").show();
        $(".cont-over").hide();

        
    });

});