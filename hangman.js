$('document').ready(function() {// console.log("Here we go");
//get input from form and use .val to store it in top-left id
//use innerHTML from .val to put it into top-left id

//maybe a start button?
//set variable to create array of words as possible solutions
let turnsRemaining = 7;
let words = ["cosmos", "rabbit", "valley", "flakes", "assign", "monkey", "forest"];
//randomize through array of words and set that to randomized solutions variable
let solutions = words[Math.floor(Math.random() * words.length)];
// console.log(words);
console.log(solutions);
//split randomized word into characters(maybe?)
let characters = [...solutions];
console.log(characters);

let answers = [];
let $spaces = $(".spaces");
console.log($spaces);
// console.log(answers);

for(let i = 0; i < solutions.length; i++) {
  answers[i] = " ";
}
console.log(answers);

let $letters = $(".letters");

  //add click event for each letter
  for (let j = 0; j < $letters.length; j++) {
    $($letters[j]).click(function() {
      console.log($letters[j]);
      turnsRemaining -= 1
      //if my letter class is equal to a letter in the solution make innerHTML/display appear in spaces class
      console.log("this is characters:", characters, "this is letters[j].innerHTML:", $letters[j].innerHTML);
      //if ($letters[j] === characters){
        let guessedLetter = $letters[j].innerHTML;

        console.log(guessedLetter);
        console.log($spaces);

        function changeText(){

        }
        if (characters.indexOf(guessedLetter.toLowerCase()) !== -1) {
            // console.log($letters[j]);
          $($letters[j]).css({'visibility': 'hidden'});

      }
      //
      // }
  })
}


let $letterA = $("#a");
let $letterB = $("#b");
let $letterC = $("#c");
let $letterD = $("#d");
let $letterE = $("#e");
let $letterF = $("#f");
let $letterG = $("#g");
let $letterH = $("#h");
let $letterI = $("#i");
let $letterJ = $("#j");
let $letterK = $("#k");
let $letterL = $("#l");
let $letterM = $("#m");
let $letterN = $("#n");
let $letterO = $("#o");
let $letterP = $("#p");
let $letterQ = $("#q");
let $letterR = $("#r");
let $letterS = $("#s");
let $letterT = $("#t");
let $letterU = $("#u");
let $letterV = $("#v");
let $letterW = $("#w");
let $letterX = $("#x");
let $letterY = $("#y");
let $letterZ = $("#z");





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




//if guessed letter is a match manipulate display css property from hidden to inline/block if character is in solution
//after each click event, if letter is in solution use innerHTML to make it appear in solution
//if letter is not in solution, animate the div of that letter disappear and number of turns decreases by one
//if turns is 0 then indicate game over
//have the letter change once it is clicked so the user cannot use it again
//if number of turns is over (At 0) then innerHTML appears(game over)
//if the solution is solved(all innerHTML matches the solution) then display you've won!
//write a function to check for a winner to see if all divs have a display of block instead of hidden OR set a variable that holds the total number of correct guesses and check if that number is equal to the total number of letters in words
})

