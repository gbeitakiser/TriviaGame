// Variables

var answerRight = 0;
var answerWrong = 0;
var unanswered = 10;

// // Timer 

// var timeLeft = 5;

// function timer() {
//     timeLeft -= 1;
//     $("#timer").text("Seconds Remaining: " + timeLeft);
//     if (timeLeft <= 0) {
//         gameOver();
//     }
// }

// // Check Score
// function checkScore() {
//     var checkboxesF = $('input[name="false"]');
//         checkboxesF.change(function() {
//             answerWrong++;
//             unanswered--;
//             writeAnswers();
//             console.log("Right Answers: " + answerRight);
//             console.log("Wrong Answers: " + answerWrong);
//             console.log("Unanswered: " + unanswered);
//             console.log("--------------");
//         });

//         var checkboxesT = $('input[name="true"]');
//         checkboxesT.change(function() {
//             answerRight++;
//             unanswered--;
//             writeAnswers();
//             console.log("Right Answers: " + answerRight);
//             console.log("Wrong Answers: " + answerWrong);
//             console.log("Unanswered: " + unanswered);
//             console.log("--------------");
//         });
// }

// // Displays score on game over screen
// function writeAnswers() {
//     var writeAnswerRight = $("#right-answers").html("Right Answers: " + answerRight);
//     var writeAnswerWrong = $("#wrong-answers").html("Wrong Answers: " + answerWrong);
//     var writeUnanswered = $("#unanswered").html("Unanswered: " + unanswered);
// }



// // Game Over Function
// function gameOver() {
//     checkScore();
//     $(".cont-start").hide();
//     $(".cont-game").hide();
//     $(".cont-over").show();
// }


$(document).ready(function() {

    
    // Hides other screens to show only start screen before Start button pressed
    $(".cont-game").hide();
    $(".cont-over").hide();

    // Starts game when clicked
    $("#start").click(function() {
        
        // Timer and Timer Display

        // Timer 

        var timeLeft = 5;

        function timer() {
            timeLeft -= 1;
            $("#timer").text("Seconds Remaining: " + timeLeft);
            if (timeLeft <= 0) {
                gameOver();
            }
        }

        // var counter = setInterval(timer, 1000); //Uncomment when ready to test timer
        $("#timer").text("Seconds Remaining: " + timeLeft);

        // Hides start and end screen so only game screen shows
        $(".cont-start").hide();
        $(".cont-game").show();
        $(".cont-over").hide();

        ///
        ////
        //////
        // Section Below Needs Work

        // Ensures only one checkbox can be clicked at a time
        // $(document).on('click', 'input[type="checkbox"', function() {      
        //     $('input[type="checkbox"]').not(this).prop('checked', false);      
        // });

        // Code Here
        $(".answer1").click(function() {
            $(".answer1").not(this).prop('checked', false);
        });
        $(".answer2").click(function() {
            $(".answer2").not(this).prop('checked', false);
        });
        $(".answer3").click(function() {
            $(".answer3").not(this).prop('checked', false);
        });
        $(".answer4").click(function() {
            $(".answer4").not(this).prop('checked', false);
        });
        $(".answer5").click(function() {
            $(".answer5").not(this).prop('checked', false);
        });
        $(".answer6").click(function() {
            $(".answer6").not(this).prop('checked', false);
        });
        $(".answer7").click(function() {
            $(".answer7").not(this).prop('checked', false);
        });
        $(".answer8").click(function() {
            $(".answer8").not(this).prop('checked', false);
        });
        $(".answer9").click(function() {
            $(".answer9").not(this).prop('checked', false);
        });
        $(".answer10").click(function() {
            $(".answer10").not(this).prop('checked', false);
        });
        // Code Here

        // Section Above Needs Work
        //////
        ////
        //

        // Listens for checked boxes and adds response to Questions Right or Questions Wrong depending on which checkbox is clicked
        var checkboxesF = $('input[name="false"]');
        checkboxesF.change(function() {
            answerWrong++;
            unanswered--;
            writeAnswers();
            console.log("Right Answers: " + answerRight);
            console.log("Wrong Answers: " + answerWrong);
            console.log("Unanswered: " + unanswered);
            console.log("--------------");
        });

        var checkboxesT = $('input[name="true"]');
        checkboxesT.change(function() {
            answerRight++;
            unanswered--;
            writeAnswers();
            console.log("Right Answers: " + answerRight);
            console.log("Wrong Answers: " + answerWrong);
            console.log("Unanswered: " + unanswered);
            console.log("--------------");
        });
           

        // Displays score on game over screen
        function writeAnswers() {
            var writeAnswerRight = $("#right-answers").html("Right Answers: " + answerRight);
            var writeAnswerWrong = $("#wrong-answers").html("Wrong Answers: " + answerWrong);
            var writeUnanswered = $("#unanswered").html("Unanswered: " + unanswered);
        }

        // Game Over Function
        function gameOver() {
            $(".cont-start").hide();
            $(".cont-game").hide();
            $(".cont-over").show();
        }

        // Sends user to game over screen if they finish early and click button
        $("#done").click(function() {
            writeAnswers();
            gameOver();
        })
    });

});