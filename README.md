# Trivia Game

Psudeo Code

---HTML---

-Create a container that holds all the action indepentend of the background (to match the design in the image)
-Inside that div, have a static title and...
    -A div that holds the start button to make it easier to hide
    -A div that holds  dynamic elements to add when game started: questions, game scores, 
    -A div that contains the game over screen and a button that gives the option to start again
    -A div that shows the gameOver screen when time is up

---JavaScript (ALL GAME LOGIC)////---jQuery--- (ALL HTML MANIPULATION)

--Vars--
-Make an object with arrays or vice-versa so that questions have multiple answers and each answer has a true/false tag associated with it that the computer sees but the user doesn't
-Set a timner variable with 30 seconds in it
-Set right/wrong variables to 0
-$Use jQuery to make it easy to hide all elements that will display when startGame function is called
    -$Toggles start button using .hide
    -$Prints time left to top of screen using .show
    -$Print questions, available answers, and button choices to main div using .show

--Functions--
-Create a timer function that starts deducting seconds when initialized
    -That function checks time variable and if no time is left, it initializes the endGame function

-Create a startgame function that hides the start button and...
    -Zeros question varialbes out
    -Initializes the timer variable
    -Toggles jQuery functions so '.cont-main' shows up on screen
    -Records answers and writes them to right/wrong variables

-Make a click function that initializes startGame function, .shows '.cont-main' and .hide(s) '.cont-start' when the Start button is clicked

-Create an endGame function that's called when time is up or test is complete, hides '.cont-main' and shows '.cont-over' screen
    -Add a "Retry" button that initializes startGame function again


--If/Else/Logic--






