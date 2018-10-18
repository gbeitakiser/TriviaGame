// Variables

var answerRight = 0;
var answerWrong = 0;
var unanswered = 10;

// Timer 

var timeLeft = 30;

function timer() {
    timeLeft -= 1;
    $("#timer").text("Seconds Remaining: " + timeLeft);
    if (timeLeft <= 0) {
        gameOver();
    }
}

// Check Score



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
        
        // Timer and Timer Display
        // var counter = setInterval(timer, 1000);
        $("#timer").text("Seconds Remaining: " + timeLeft);

        // Hides start and end screen so only game screen shows
        $(".cont-start").hide();
        $(".cont-game").show();
        $(".cont-over").hide();

        // Ensures only one checkbox can be clicked at a time
        // $(".answer").on('click', 'input[type="checkbox"', function() {      
        //     $('input[type="checkbox"]').not(this).prop('checked', false);      
        // });

        // 
        // Listens for checked boxes and adds response to Questions Right or Questions Wrong depending on which checkbox is clicked
        var checkboxesF = $('input[name="false"]');
        checkboxesF.change(function() {
            answerWrong++;
            unanswered--;
            console.log("False " + this.checked);
            console.log("Wrong Answers: " + answerWrong);
            console.log("Unanswered: " + unanswered);
        });

        var checkboxesT = $('input[name="true"]');
        checkboxesT.change(function() {
            answerRight++;
            unanswered--;
            console.log("True " + this.checked);
            console.log("Right Answers: " + answerRight);
            console.log("Unanswered: " + unanswered);
        });

        // Code Here


        


        // Code Here



        // 
           

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