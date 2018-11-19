// Variables

var answerRight = 0;
var answerWrong = 0;
var unanswered = 10;


$(document).ready(function() {

    
    // Hides other screens to show only start screen before Start button pressed
    $(".cont-game").hide();
    $(".cont-over").hide();


    // Starts game when clicked
    $("#start").click(function() {

        // Guy Fieri says Flavortown when start button clicked
        var flavorTown = document.createElement("audio");
        flavorTown.setAttribute("src", "assets/images/flavortown.mp3");
        flavorTown.play();
        
        
        // Timer
        var timeLeft = 30;

        function timer() {
            timeLeft -= 1;
            $("#timer").text("Seconds Remaining: " + timeLeft);
            if (timeLeft <= 0) {
                clearInterval(counter)
                gameOver();
            }
        }

        // Initialize and display timer
        var counter = setInterval(timer, 1000);
        $("#timer").text("Seconds Remaining: " + timeLeft);



        // Hides start and end screen so only game screen shows
        $(".cont-start").hide();
        $(".cont-game").show();
        $(".cont-over").hide();


        // Makes sure that only one box in each answer section can be selected
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
        
    
        // Renders the score once the game is over
        function renderScore() {
            $('input[name="true"]').each(function () {
                if (this.checked) {
                    answerRight++;
                    unanswered--;
                    console.log("Inside True")
                }
            });
    
            $('input[name="false"]').each(function () {
                if (this.checked) {
                    answerWrong++;
                    unanswered--;
                    console.log("Inside False")
                }
            });

        }

        // Displays score on game over screen
        function writeAnswers() {
            var writeAnswerRight = $("#right-answers").html("Right Answers: " + answerRight);
            var writeAnswerWrong = $("#wrong-answers").html("Wrong Answers: " + answerWrong);
            var writeUnanswered = $("#unanswered").html("Unanswered: " + unanswered);
        }

        // Game Over Function
        function gameOver() {
            console.log("Inside Game Over")
            renderScore();
            writeAnswers();
            $(".cont-start").hide();
            $(".cont-game").hide();
            $(".cont-over").show();
        }

        // Sends user to game over screen if they finish early and click button
        $("#done").click(function() {
            // writeAnswers();
            gameOver();
            clearInterval(counter)
        })
    });

});