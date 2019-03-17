
// Global Functions?
//Works, but pulls two words on the first run through.
function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

  function splitter(wordthing) {
    var splitty = wordthing.split("");
    return splitty;
  }

// Replaced with currentWord above. var wordChoice = wordList[Math.floor(Math.random() * wordList.length)];

// Variables
var numGuess = 15;
var wins = 0;
// Creates an array that gives a library of words.
var wordList = ["fluffy", "bunny", "cat", "mouse", "deadpan", "snowflake", "butter", "cookie"];
// Current word chosen by computer.
var wordChoice = randomNoRepeats(wordList);
 
// Splits the current word into an array that can be searched.
var wordSplit = splitter(wordChoice);
// Displays underscores until letters are chosen. NEED TO ASSIGN LENGTH BASED ON wordSplit.length.
var displayWord = [];
// Creates an array that holds all letters guessed by the player.
var lettersGuessed = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winCount = document.getElementById("win-count");
var currentWord = document.getElementById("current-word");
var guessCount = document.getElementById("guess-count");
var lettersGuessed = document.getElementById("letters-guessed");




for (i = 0; i < wordSplit.length; i++) {
    displayWord.push("_");
};
console.log (wordChoice);
console.log(wordSplit);

currentWord.textContent = displayWord;


document.onkeyup = function(event) {

    
// Determines which key was pressed.
    var currentGuess = event.key.toLowerCase();
// Determines if user has guessed this before. THIS SHOULD ONLY HAPPEN IF THE LETTER IS WRONG.
// If letter is right, it is not added to the array and the guess count is not decremented.
    for (var i = 0; i < wordSplit.length; i++) {
        if (currentGuess === wordSplit[i]) {
            // change underscore to letter.
        }else { 
            for (var i = 0; i < lettersGuessed.length; i++) {
              if (currentGuess !== lettersGuessed[i]) {
                lettersGuessed.push(currentGuess);
                numGuess--;
                } else {
                    break;
                }
            }
        }
        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.


        winCount = wins;
        currentWord.textContent = displayWord;
        guessCount.textContent = numGuess;
        lettersGuessed.textContent = lettersGuessed;
        
    }
    };