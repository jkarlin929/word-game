$('document').ready(function() {// console.log("Here we go");

//id from form element
const form = $('#form-entry');
//id from input element in form
const nameSet = $('#name')
//get input from form and use .val to store it in top-left id
//maybe a start button?
//set variable to create array of words as possible solutions
let turnsRemaining = 7;
let words = ["cosmos", "rabbit", "valley", "flakes", "assign", "monkey", "forest", "tissue", "office", "growth", "minute", "create", "button", "jaguar", "dinner", "museum", "permit", "search"];
//randomize through array of words and set that to randomized solutions variable
let solutions = words[Math.floor(Math.random() * words.length)];
//split randomized word into characters
let characters = [...solutions];
console.log(characters);
const $spaces = $("#spaces");
const $letters = $(".letters");
let answersArray = [];
let $turns = ('#turns');
let $alert = ('#alert');

//set form
form.submit(grabForm);
function grabForm(event) {
  event.preventDefault();
  const value = $('#player-name');
  nameSet.html(value.val());
}
  //add click event for each letter
  for (let j = 0; j < $letters.length; j++) {
    $($letters[j]).click(function() {
      if(turnsRemaining > 0) {
        turnsRemaining -= 1
        //if my letter class is equal to a letter in the solution make innerHTML/display appear in spaces class
        $($turns).html(turnsRemaining);
        //set the html in each letter to a variable
        let guessedLetter = $letters[j].innerHTML;
        //set each letter to a lowercase to account for a match
        let lowerCaseGuessed = guessedLetter.toLowerCase()
        //hide the display OR visibility of the letter clicked
        $($letters[j]).css({'visibility': 'hidden'});
        //loop through each letter and if the letter is not in the array push the letter into the answers array
        if (characters.indexOf(lowerCaseGuessed) !== -1) {
          let indexOfLetter = characters.indexOf(lowerCaseGuessed);
          for (let k = 0; k < characters.length; k++) {
            if (characters[k] === lowerCaseGuessed) {
              let $answerSpaces = $('.answer-space');
              $($answerSpaces[k]).html(guessedLetter);
              answersArray.push(guessedLetter);
            }
          }
        }
        //call checkWin function and alert if they lost
        checkWin(answersArray);
      } else {
        $($alert).html('You Lose!');
      }
    })
  }

//check for a winner by seeing if the letters in spaces class is equal to 6
function checkWin(array) {
  if (array.length === 6) {
    $($alert).html('You Won!');
  }
}


//create a button to reload the page
    let button = $("button");
  $(document).ready(function(){
        $("button").click(function(){
            location.reload(true);
        });
    });
})