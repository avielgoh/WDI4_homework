/*

1. Generate random word

2. Check whether input of letter matches to the letters of the word (maybe loop check)

3. Return input letter if matches

4. Store input letter - can't be used again

5. Reduce number of turns left

*/

// var words = ["Bourke", "Collins", "Russell", "Flinders", "LaTrobe", "Queen", "King", "William", "Lonsdale", "Exhibition", "Spencer", "Swanston", "Elizabeth", "Spring"]

var words = ["Apple", "Pear", "Orange", "Banana", "Plum", "Grape", "Watermelon", "Strawberry", "Blueberry", "Canteloupe", "Cherry", "Grapefruit", "Kiwi", "Coconut", "Figs", "Mango", "Pineapple", "Pomelo", "Pomegranate", "Dragonfruit", "Guava", "Lime", "Lemon", "Lychee", "Mandarin", "Peach"];
var randomWord;
var guessWord = [];
var correctLetters = [];
var selectedLetters = [];
var turnsRemaining = 15;
var displayTurnsRemaining = document.getElementById('displayTurnsRemaining');
var displaySelectedLetters = document.getElementById('displaySelectedLetters');
var displayGuessWord = document.getElementById('guessWord');

// Function to reset all values at end of game
var clearAll = function() {
  randomWord = "";
  guessWord = [];
  correctLetters = [];
  selectedLetters = [];
  turnsRemaining = 15;
  displayTurnsRemaining.innerHTML = "15";
  displaySelectedLetters.innerHTML = "";
  displayGuessWord.innerHTML = 'AGAIN? CLICK START GAME!';
}

// Function to display game over - executes resetAll()
var gameOver = function() {
  displayGuessWord.innerHTML = 'GAME OVER! The word was ' + randomWord + '!';
  setTimeout(clearAll, 4000);
}


// Function to display user wins - executes resetAll()
var userWins = function() {
  displayGuessWord.innerHTML = 'YOU WIN!';

  setTimeout(clearAll, 2500);
}

// Function to reset all values when user clicks start game
var resetAll = function() {
  randomWord = "";
  guessWord = [];
  correctLetters = [];
  selectedLetters = [];
  turnsRemaining = 15;
  displayTurnsRemaining.innerHTML = "15";
  displaySelectedLetters.innerHTML = "";
}

// Function to get random guess word
var blankWord = function() {

  resetAll(); // resets values if user clicks start game

  randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

  for (var i = 0; i < randomWord.length; i += 1) {
    guessWord.splice(i, 0, '_'); // creates an array with '_' based on the number of characters in guess word
  }

  displayGuessWord.innerHTML = guessWord.join(' '); // display '_' on the screen
  console.log(randomWord);
}

// Function to verify users' letter guess
var guessedLetter = function(letter) {

  // checks if the game has started - if not, kill function (no letter input)
  if (guessWord.length === 0){
    return;
  }

  // checks if letter has been selected before - if so, kill function
  if (_.contains(selectedLetters, letter) === true) {
    return;
  }
  selectedLetters.push(letter); // pushes letter into selected letter array

  // keep track of how many turns remaining
  if (turnsRemaining === 1) {
    displayTurnsRemaining.innerHTML = '0';
    // displayGuessWord.innerHTML = randomWord.join(' ');
    setTimeout(gameOver, 1000);
    return;// come back to this
  } else if (turnsRemaining === 2) {
    turnsRemaining = 1;
    displayTurnsRemaining.innerHTML = 'LAST GUESS!';
  } else {
    turnsRemaining = (turnsRemaining - 1);
    displayTurnsRemaining.innerHTML = turnsRemaining;
  }

  // create array with the index(es) of the correct letter in the guess word
  for (var i = 0; i <= randomWord.length; i += 1) {
    if (letter === randomWord.charAt(i)) {
      correctLetters.push(i);
    }
  }

  // runs a loop on the correctLetters array to replace the '_' in the guessWord array with the selected letter based on the index
  for (var i = 0; i <= correctLetters.length - 1; i += 1) {
    guessWord.splice(correctLetters[i], 1, letter);
  }

  correctLetters = []; // reset value of correctLetters array for next input

  displayGuessWord.innerHTML = guessWord.join(' '); // output guess word blanks and any correct letters to screen
  displaySelectedLetters.innerHTML = selectedLetters.join(' '); // output selected letters to screen

  // checks whether the guessWord array has any blank spaces - if not, userWins
  if (_.contains(guessWord, '_') === false) {
    setTimeout(userWins, 2000);
    return;
  }

};
