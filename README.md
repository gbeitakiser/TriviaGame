# Trivia Game


Description:

Welcome to Guy Fieri's world of taste, where your tastebuds will exist in a state of ecstasy. Click start and you have 30 seconds to unleash as much of your Guy Fieri knowledge as you can. If you finish early, click the submit button at the bottom of the page to see your score! If you don't finish in time, you'll see your score anyway.



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









Guy Fieri Questions and Answers:

-What's the name of Guy Fieri's town?
    -W: Guysborough
    -W: Fieriville
    -R: Flavor Town
    -W: Kitchen Sink

-At what age did Guy Fieri start working in the food industry?
    -R: 10
    -W: 22
    -W: 17
    -W: 80 would have been too soon

-How many stars did The New York Times food critic Pete Wells give Guy’s American Kitchen & Bar in Manhattan?
    -W: 5 Stars
    -W: 4 Stars
    -W: 3 Stars
    -W: 2 Stars
    -W: 1 Star
    -R: 0 Stars

-How many gay weddings has Guy Fieri officiated at?
    -W: 28
    -W: 45
    -W: 99
    -R: 101

-From what college did Guy Fieri graduate prior to making it big?
    -W: UCLA
    -W: Harvard
    -R: UNLV
    -W: USC

-What kind of car does Guy Fieri usually drive?

    -R: A classic Chevy Camaro
    -W: The Oscar Mayer Weinermobile
    -W: A classic Ford Mustang
    -W: A classic Chevy Corvette

-Guy Fieri got famous by wining which gameshow?

    -W: Celebrity Chef
    -R: The Next Food Network Star
    -W: The Apprentice
    -W: America's Next Top Model

-How many books has Guy Fieri written?

    -W: Two
    -W: None
    -W: Eighteen
    -R: Four

-Guy Fieri has won the key to which city?

    -W: Flavor Town, Flavor Town
    -W: Chicago, Illinois
    -R: Ferndale, California
    -W: Los Angeles, California

-Where did Guy Fieri attend a foreign exchange program?

    -R: France
    -W: Spain
    -W: Wakanda
    -W: Trick question, he only studied in the USA


#Project Link
https://gbeitakiser.github.io/TriviaGame/ 