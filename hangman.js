$('document').ready(function() {// console.log("Here we go");

//set form
const form = $('#form-entry');
const submitButton = $('[type=button');
form.submit(grabForm);
function grabForm(event) {
  event.preventDefault();
  const value = $('input')
  value.val('');
}

//get input from form and use .val to store it in top-left id

//maybe a start button?
//set variable to create array of words as possible solutions
let turnsRemaining = 7;
let words = ["cosmos", "rabbit", "valley", "flakes", "assign", "monkey", "forest"];
//randomize through array of words and set that to randomized solutions variable
let solutions = words[Math.floor(Math.random() * words.length)];
//split randomized word into characters
let characters = [...solutions];
console.log(characters);
const $spaces = $("#spaces");
const $letters = $(".letters");

  //add click event for each letter
  for (let j = 0; j < $letters.length; j++) {
    $($letters[j]).click(function() {
      turnsRemaining -= 1
      //if my letter class is equal to a letter in the solution make innerHTML/display appear in spaces class
        let guessedLetter = $letters[j].innerHTML;
        let lowerCaseGuessed = guessedLetter.toLowerCase()
          $($letters[j]).css({'visibility': 'hidden'});
            if (characters.indexOf(lowerCaseGuessed) !== -1) {
        let indexOfLetter = characters.indexOf(lowerCaseGuessed);

          for (let k = 0; k < characters.length; k++) {
            if (characters[k] === lowerCaseGuessed) {
              let answerSpaces = document.getElementsByClassName('answer-space');
              console.log(answerSpaces);
              answerSpaces[k].innerHTML = guessedLetter;
              console.log(guessedLetter);
            }
          }
        }
      // checkWin;
  })
}
//check for a winner by seeing if the letters in spaces class is equal to 6
// function checkWin(){
//   if(){
//     alert("you did something!");
//   }
// }





// class Letter {
//   constructor(value) {
//     this.value = value;
//     this.hidden = true;
//   }
//   show() {
//     return this.value;
//   }
// }

// class Word {
//   constructor(word) {
//     this.letter = [];
//     this.word = word
//     //this.showLetters = this.showLetters.bind(this)
//   }
//   createLetters() {
//     this.word.split('').forEach(d => {
//       this.letter.push(new Letter(d))
//     })
//     return this.showLetters()
//   }
//   showLetters() {
//     return this.letter[0].show()
//   }
// }

// let word = new Word('hello')
// word.createLetters()

//create a button to reload the page
    let button = $("button");
  $(document).ready(function(){
        $("button").click(function(){
            location.reload(true);
        });
    });

//if guessed letter is a match manipulate display css property from hidden to inline/block if character is in solution
//after each click event, if letter is in solution use innerHTML to make it appear in solution
//if letter is not in solution, animate the div of that letter disappear and number of turns decreases by one
//if turns is 0 then indicate game over
//have the letter change once it is clicked so the user cannot use it again
//if number of turns is over (At 0) then innerHTML appears(game over)
//if the solution is solved(all innerHTML matches the solution) then display you've won!
//write a function to check for a winner to see if all divs have a display of block instead of hidden OR set a variable that holds the total number of correct guesses and check if that number is equal to the total number of letters in words
})

