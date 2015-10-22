/*
PT PLANNER

Melbourne Public Transport Journey Planner

There are 3 train lines:

The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.

The Glen Waverley line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.

The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.

All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

Write a JS program that works out display the journey when you give it an origin and destination.
*/

// Object that holds all lines and corresponding stations
var allLines = {
  "Alamein": ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  "Glen Waverley": ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  'Sandringham': ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};

// Variable allStations holds an array of all stations
var allStations = allLines["Alamein"].concat(allLines["Glen Waverley"],allLines["Sandringham"]);

// Variables that hold user input
var originInputBox = document.getElementById('originList');
var destinationInputBox = document.getElementById('destinationList');
var routeButton = document.getElementById('routeButton');
var origin;
var destination;

// Function findRoute listens for mouse click on routeButton and runs journeyDetails function
var findRoute = function() {
  origin = originInputBox.value;
  destination = destinationInputBox.value;
  journeyDetails(origin, destination);
};

// Event listeners for click or enter key
routeButton.addEventListener('click', findRoute);
destinationInputBox.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    findRoute();
  }
});
routeButton.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    findRoute();
  }
});

// Function journeyDetails runs user inputs to determine throughStations and numberOfStops
function journeyDetails(origin, destination) {

  // If user selects same destination as origin
  if (origin === "") {
    alert('Please select origin');
  } else if (destination === "") {
    alert('Please select destination');
  } else if (origin === destination) {
    document.getElementById('routeDetails').innerHTML = 'Look up! You\'re already at ' + origin + '!';
    document.getElementById('routeStops').innerHTML = "";
  } else {

  // Function originLine returns the line of the origin station
  function originLine() {
    for (i = 0; i < allStations.length; i += 1) {
      if (allStations.indexOf(origin) >= 12) {
        return 'Sandringham';
      } else if (allStations.indexOf(origin) >= 6) {
        return 'Glen Waverley';
      } else if (allStations.indexOf(origin) >= 0) {
        return 'Alamein';
      }
    }
  };

  var originLine = originLine();

  // Function destinationLine returns the line of the destination station
  function destinationLine() {
    for (i = 0; i < allStations.length; i += 1) {
      if (allStations.indexOf(destination) >= 12) {
        return 'Sandringham';
      } else if (allStations.indexOf(destination) >= 6) {
        return 'Glen Waverley';
      } else if (allStations.indexOf(destination) >= 0) {
        return 'Alamein';
      }
    }
  };

  var destinationLine = destinationLine();

  // If the origin (or destination) is Richmond, set line to correspond to with destination (or origin)
  if (origin === 'Richmond') {
    originLine = destinationLine;
  } else if (destination === 'Richmond') {
      destinationLine = originLine;
  };

  // Function throughStations returns an array with the names of the stations the user will pass through on their journey
  function throughStations() {

    var originIndex = allLines[originLine].indexOf(origin);
    var originIndexIntersection = allLines[originLine].indexOf('Richmond');
    var destinationIndex = allLines[destinationLine].indexOf(destination);
    var destinationIndexIntersection = allLines[destinationLine].indexOf('Richmond');

    // Returned array depends on the index of the origin and destination stations
    if ((originLine === destinationLine) && (originIndex < destinationIndex)) {
      return allLines[originLine].slice(originIndex, destinationIndex + 1)

    } else if ((originLine === destinationLine) && (originIndex > destinationIndex)) {
      return allLines[originLine].slice(destinationIndex, originIndex + 1).reverse();

    } else if ((originIndex < originIndexIntersection) && (destinationIndex < destinationIndexIntersection)) {
      return allLines[originLine].slice(originIndex, originIndexIntersection + 1).concat(allLines[destinationLine].slice(destinationIndex, destinationIndexIntersection).reverse());

    } else if ((originIndex > originIndexIntersection) && (destinationIndex > destinationIndexIntersection)) {
      return allLines[originLine].slice(originIndexIntersection, originIndex + 1).reverse().concat(allLines[destinationLine].slice(destinationIndexIntersection + 1, destinationIndex + 1));

    } else if ((originIndex < originIndexIntersection) && (destinationIndex > destinationIndexIntersection)) {
      return allLines[originLine].slice(originIndex, originIndexIntersection + 1).concat(allLines[destinationLine].slice(destinationIndexIntersection + 1, destinationIndex + 1));

    } else if ((originIndex > originIndexIntersection) && (destinationIndex < destinationIndexIntersection)) {
      return allLines[originLine].slice(originIndexIntersection, originIndex + 1).reverse().concat(allLines[destinationLine].slice(destinationIndex, destinationIndexIntersection).reverse());
    }
  };

  var throughStations = throughStations(); // check whether you want this to connect
  var numberOfStops = (throughStations.length - 1);

  // Output throughStations and numberOfStops to HTML page
  if (numberOfStops === 1) {
    document.getElementById('routeDetails').innerHTML = destination + ' is the next stop.';
    document.getElementById('routeStops').innerHTML = "";
  } else if (originLine === destinationLine) {
    document.getElementById('routeDetails').innerHTML = 'Your journey starting at ' + origin + ' and ending at ' + destination + ' has ' + numberOfStops + ' stops with no changeovers.';
    document.getElementById('routeStops').innerHTML = throughStations.join(' --- ');
  } else {
    document.getElementById('routeDetails').innerHTML = 'Your journey starting at ' + origin + ' and ending at ' + destination + ' has ' + numberOfStops + ' stops with a changeover at Richmond.';
    document.getElementById('routeStops').innerHTML = throughStations.join(' --- ');
  }
  };
}



// DO SOMETHING AS SOON AS THE STATIONS ARE SELECTED??
