

// Global Variables
var numGuess = 15;
var wins = 0;
var losses = 0;
// Creates an array that gives a library of words.
var wordList = ["yellowstone", "grandcanyon", "yosemite", "bigbend", "glacier", "zion", "badlands", "craterlake", "mesaverde"];
// Current word chosen by computer.
var wordChoice = "";
// Displays underscores until letters are chosen. NEED TO ASSIGN LENGTH BASED ON wordSplit.length.
var displayWord = [];
// Creates an array that holds all letters guessed by the player.
var prevGuesses = [];
var joinedDisplay = "";
var wordSplit = [];




// Variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");
var currentWord = document.getElementById("current-word");
var guessCount = document.getElementById("guess-count");
var lettersGuessed = document.getElementById("letters-guessed");






// Random choice of words in wordList array.
wordChoice = wordList[Math.floor(Math.random() * wordList.length)];

// Splits the current word into an array that can be searched.
wordSplit = wordChoice.split("");

// To generate the underscores to display on screen:
for (i = 0; i < wordSplit.length; i++) {
    displayWord.push("_");
};


// Converts array into string with characters separated by a space.
joinedDisplay = displayWord.join(" ");

// Initial Display on Page
currentWord.textContent = joinedDisplay;
guessCount.textContent = numGuess;

//Testing
console.log (wordChoice);

// FUNCTIONS

// Works
function guessCompare(g, array1, array2) {
    var present = 0;
    for (var i = 0; i < array1.length; i++) {
        
        if (g === array1[i]) {
            array2.splice(i, 1, g);
            joinedDisplay = array2.join(" ");
            present++;
        }
    }     
    return present;
}

//Works
function pushToArray(n, array) {
    var inArray = 0;
    if (array.length === 0) {
        array.push(n);
        numGuess--;
    }
    for (var i = 0; i < array.length; i++) {
        if (n === array[i]) {
            inArray++;
        }
    }

    if (inArray === 0) {
        array.push(n);
        numGuess--;
    }
    }

// Works
function checkWin(array) {
    var noWin = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "_") {
           noWin++;
        }
    }
    if (noWin === 0) {
        wins++;
        resetGame();
    }
}

function resetGame(){
    displayWord = [];
    prevGuesses = [];
    wordChoice = wordList[Math.floor(Math.random() * wordList.length)];
    wordSplit = wordChoice.split("");
    for (i = 0; i < wordSplit.length; i++) {
        displayWord.push("_");
    }
    joinedDisplay = displayWord.join(" ");
    numGuess = 15;
    //whomp whomp music?
}

function filterAlpha(n){    //     THIS DOESN'T WORK ON THE 1ST NON-LETTER CHARACTER ENTERED.
    if (event.which <= 90 && event.which >= 65){ 
    return n;
    }
}

// Processing User Input

document.onkeyup = function(event) {
    var currentGuess = "";
    var chosenKey = "";
    chosenKey = event.key.toLowerCase();
    currentGuess = filterAlpha(chosenKey);
//    console.log (currentGuess);
    var guessCorrect = 0;
    guessCorrect = guessCompare(currentGuess, wordSplit, displayWord);

        
    if (guessCorrect === 0) {
        pushToArray(currentGuess, prevGuesses);
    }else {
       checkWin(displayWord);
    }


    //End of Game
    if (numGuess <= 0) {
        losses++;
        resetGame();
    }
   
    
    // Hide the directions
    directionsText.textContent = "";

    // Display the updated info on the page.
    winCount.textContent = wins;
    lossCount.textContent = losses;
    currentWord.textContent = joinedDisplay;
    guessCount.textContent = numGuess;
    lettersGuessed.textContent = prevGuesses;   
    

}