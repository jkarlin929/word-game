![wireframe](https://git.generalassemb.ly/jkarlin929/PROJECT-1-PROMPT/blob/master/project1wireframe.JPG "Wireframe")
in the wireframe image, I included the idea for the game.
In the final product, there was no "man" to "hang" included.

![time matrix](https://git.generalassemb.ly/jkarlin929/PROJECT-1-PROMPT/blob/master/timematrix.JPG) "Time Matrix"
-Due to time constraints, I decided not to include a hangman image, and made this a word guessing game.

In this Word Guessing Game:
-User can submit their name for display purposes.
-Form to submit is opaque so have fun finding it.
-User has 7 turns to guess the word.
-To begin guessing the word, the user clicks on a letter.
-If the letter is in the solution, it will appear after the letter was clicked.
-To win, the user must guess all the letters in the solution.
-To lose, the user must not guess all the letters in the solution.

Technologies used:
-jquery
-html
-css
-javascript

MVP:
-my MVP in this project includes:
    -Win logic
    -Letters to click on
    -Spaces for the correct letters to appear onto
    -a title

POST MVP:
-my POST MVP in this project includes:
    -adding a hangman image that increments by the amount of wrong guesses guessed.
    -a background image that fits the theme
    -making the clicked letters "disappear" or use an image to cover them

Functional Components:
Component   Priority    Estimated Time  Time Invetsted  Actual Time
Win logic   High        9hrs            9hrs           4hrs
Letters to  High        1hr                            5hrs
click
Spaces for  High        2hrs            1hr            3hr
letters to
appear
Array of    High        1hour           20min          20min
Words
Add hangman Medium      5hrs            -               -      
image
Background  Medium      1hour           1hrs          30 mins
Image
Clicked     Medium      3hrs            4hrs            4hrs
Letters
Vanish

Helper Functions:
Function                    Description
Lowercase                   Downcases the letter
Push                        Adds a string to an array
.html                       changes html in an element
indexOf                     selects the index of an array item

Code Snippet:
$($letters[j]).css({'visibility': 'hidden'});
It felt good to have a successful method work
in my event listener. 

jQuery Discoveries:
Some jQuery discoveries made in this project are:
.ready - event occurs when the DOM has been loaded.
.reload - used to reload the current document.
.indexOf - returns the indexed position of an array or string

Issues and Resolutions
I did have a few issues with using Class so I did shy away from using them.
I ended up using jQuery for my functionality, which was comfortable for me to use.

I did experience some TypeErrors during my project.
I believe I ended up console-logging a lot.