/*
Ruby Squares!

A perfect square is defined as a whole number that when square rooted is a whole number (such as 1, 4, 9, 16, etc.).

Make a new file called get_squares.rb.

Write a method called get_squares that takes an argument, an array of numbers. This method will return a new array of numbers that qualify as perfect squares from the argument array.

Note: The returned array of perfect squares should be in ascending order with no duplicates.

get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]
Done?

Solve it with a JavaScript function!

Store your solution in a new file called getSquares.js and run it in the console.

HINT: Sorting an array of numbers with .sort in JS would produce the following...

getSquares([4, 1, 16, 1, 10, 35, 22]); // => [ 1, 16, 4 ]

What's that all about?!?!?!
*/

var squares = [];
var sortedArray = [];
var removeDuplicatesArray = [];


var getSquares = function(array) {

  sortedArray = array.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < sortedArray.length; i += 1) {
    if (sortedArray[i] !== sortedArray[i + 1]) {
      removeDuplicatesArray.push(sortedArray[i]);
    }
  }

  for (var i = 0; i < removeDuplicatesArray.length; i += 1) {
    if (Math.sqrt(removeDuplicatesArray[i]) % 1 === 0) {
      squares.push(removeDuplicatesArray[i]);
    }
  }
  console.log(squares);
}
