// Variables

var answerRight = 0;
var answerWrong = 0;
var unanswered = 0;

// Timer 



$(document).ready(function() {

    $("#right-answers").html("Right Answers: " + answerRight);
    $("#wrong-answers").html("Wrong Answers: " + answerWrong);
    $("#unanswered").html("Unanswered: " + unanswered);

    $(".cont-game").hide();
    $(".cont-over").hide();

    $("#start").click(function() {
        $(".cont-start").hide(); // Modify this once timer is in place
        $(".cont-game").show(); // Modify this once timer is in place
        $(".cont-over").show(); // Modify this once timer is in place

        
    });

});