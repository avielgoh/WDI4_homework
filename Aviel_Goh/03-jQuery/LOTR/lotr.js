var hobbits = [
"Frodo Baggins",
"Samwise 'Sam' Gamgee",
"Meriadoc \"Merry\" Brandybuck",
"Peregrin 'Pippin' Took"
];

var buddies = [
"Gandalf the Grey",
"Legolas",
"Gimli",
"Strider",
"Boromir"
];

var baddies = [
"Sauron",
"Saruman",
"The Uruk-hai",
"Orcs"
];

var lands = ["The Shire", "Rivendell", "Mordor"];

// ## 1

function makeMiddleEarth(lands) {
  // create a section tag with an id of middle-earth
  var $newSection = $('<section>').attr("id", "middle-earth");
  $newSection.appendTo('body');

  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  for (i = 0; i < lands.length; i += 1) {
    var $newLands = ($('<article>').attr("id", lands[i])).append($('<h1>').html(lands[i]));
    $newLands.appendTo('section');
  }
};

makeMiddleEarth(lands);

// ## 2

function makeHobbits(hobbits) {
  // display an unordered list of hobbits in the shire
  var $newUL = $('<ul>').attr("class", "hobbit");
  $newUL.appendTo($('article').eq(0));

  // give each hobbit a class of hobbit
  for (i = 0; i < hobbits.length; i += 1) {
    var $newList = $('<li>').html(hobbits[i]).attr("class", "hobbit");
    $newList.appendTo('ul');
  }
};

makeHobbits(hobbits);

// ## 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // add the ring as a child of Frodo
  var $newDiv = $('<div>').attr("id", "the-ring");
  $newDiv.appendTo($('.hobbit').eq(0));
}

keepItSecretKeepItSafe();

// ## 4

function makeBaddies(baddies) {
  // display an unordered list of baddies in Mordor
  var $newUL = $('<ul>');
  $newUL.appendTo($('article').eq(2));

  for (i = 0; i < baddies.length; i += 1) {
    var $newList = $('<li>').html(baddies[i]);
    $newList.appendTo($('ul').eq(1));
  }
};

makeBaddies(baddies);

// ## 5

function makeBuddies(buddies) {
  // create an aside tag
  var $newAside = $('<aside>');
  $newAside.appendTo('body');

  // display an unordered list of buddies in the aside
  var $newUL = $('<ul>').attr("class", "buddies");
  $newUL.appendTo($('aside'));

  for (i = 0; i < buddies.length; i += 1) {
    var $newList = $('<li>').html(buddies[i]).attr( {id: buddies[i], class: 'buddies'} );
    $newList.appendTo($('ul').eq(2));
  }

  // Make the Gandalf text node have a grey background
  $('#Gandalf\\ the\\ Grey').css("background-color", "grey");
};

makeBuddies(buddies);

// ## 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var $moveList = $('.hobbit').eq(0);
  $moveList.appendTo($('article').eq(1));
};

leaveTheShire();

// ## 7

function beautifulStranger() {
  // change the buddy 'Strider' textnode to "Aragorn"
  $('#Strider').text('Aragorn');

};

beautifulStranger();

// ## 8

function forgeTheFellowShip() {
  // move the hobbits and the buddies to Rivendell
  var $moveList = $('.buddies').eq(0);
  $moveList.appendTo($('article').eq(1));

  // create a new div called 'the-fellowship'
  var $newDiv = $('<div>').attr("id", "the-fellowship");
  $newDiv.appendTo($('article').eq(1));

  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  for (i = 0; i < hobbits.length; i += 1) {
    var $joinFellowship = $('li.hobbit').eq(0);
    $joinFellowship.appendTo($('div').eq(1));
    alert();
  };

  for (i = 0; i < buddies.length; i += 1) {
    var $joinFellowship = $('li.buddies').eq(0);
    $joinFellowship.appendTo($('div').eq(1));
    alert();
  };
};

forgeTheFellowShip();


// ## 9


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  $('#Gandalf\\ the\\ Grey').text('Gandalf the White');
  // apply style to the element
  $('#Gandalf\\ the\\ Grey').css("fontWeight", "bold");
  // make the background 'white', add a grey border
  $('#Gandalf\\ the\\ Grey').css("background-color", "white");
  $('#Gandalf\\ the\\ Grey').css("border", "1px solid grey");
};

theBalrog();


// ## 10
// ```
// function hornOfGondor() {
//   // pop up an alert that the horn of gondor has been blown
//   // Boromir's been killed by the Uruk-hai!
//   // put a linethrough on boromir's name
//   // Remove the Uruk-Hai from the Baddies on the page
//   // Remove Boromir from the Fellowship
//   // Put Boromir in the Footer
// }
// ```
//
// ## 11
// ```
// function itsDangerousToGoAlone(){
//   // take Frodo and Sam out of the fellowship and move them to Mordor
//   // add a div with an id of 'mount-doom' to Mordor
// }
// ```
//
// ## 12
// ```
// function weWantsIt() {
//   // Create a div with an id of 'gollum' and add it to Mordor
//   // Remove the ring from Frodo and give it to Gollum
//   // Move Gollum into Mount Doom
// }
// ```
//
// ## 13
// ```
// function thereAndBackAgain() {
//   // remove Gollum and the Ring from the document
//   // remove all the baddies from the document
//   // Move all the hobbits back to the shire
// }
// ```
