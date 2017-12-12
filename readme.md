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
    -change the restart button to restart the game and not the page.
    -changing the amount of letters in each word


Functional Components:
Win Logic: High Priority, Estimated time-9hrs, Time Invested-5hrs, Actual Time- 5 hrs.
Letters to Click: High Priority, Estimated time-1hr, Time Invested 4hrs, Actualy Time-5hrs.
Spaces for Letters: High Priority, Estimated time-2hrs, Time invested-3hr, Actual Time-3hrs.
Array of Words: High Priority, Estimated time-1hr, Time invested-20mins, Actual time-20mins.
Hangman Image: Medium Priority, Estimated time-5hrs, Time invested-n/a, Actual time-n/a.
Background Image: Medium Priority, Estimated time-1hr, Time invested-30mins, Actual time-30mins.
Clicked Letters Vanish: Medium Priority, Estimated time-3hrs, Time invested-4hrs, Actual time-4hrs.

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