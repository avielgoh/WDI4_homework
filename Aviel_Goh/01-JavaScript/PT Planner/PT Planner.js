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

var listStations = ['Flinders Street', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie','Flagstaff', 'Melbourne Central', 'Parliament','Kooyong', 'Tooronga','Southern Cross', 'South Yarra', 'Prahran', 'Windsor'];

var allStations = {
  "Alamein": ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  "Glen Waverley": ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  'Sandringham': ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}

var originInputBox = document.getElementById('originInputBox');
var destinationInputBox = document.getElementById('destinationInputBox');
var routeButton = document.getElementById('routeButton');
var origin;
var destination;


var findRoute = function () {
  origin = originInputBox.value;
  destination = destinationInputBox.value;
  journeyDetails(origin, destination);
}

routeButton.addEventListener('click', findRoute);

function journeyDetails(origin, destination) {

  // var origin = prompt('Where are you?');
  // var destination = prompt('Where do you want to go?');

  // determine whether origin and destination are the same
  if (origin === destination) {
    console.log('Look up! You are already at ' + origin + '!');
  } else {

  // determine what line the origin is on
  for (i = 0; i < listStations.length; i++) {
    if (listStations.indexOf(origin) >= 10) {
      var originLine = 'Sandringham';
    } else if (listStations.indexOf(origin) >= 5) {
      var originLine = 'Glen Waverley';
    } else if (listStations.indexOf(origin) >= 0) {
      var originLine = 'Alamein';
    }
  }

  // determine what line the destination is on
  for (i = 0; i < listStations.length; i++) {
    if (destination === 'Richmond') {
      var destinationLine = originLine;
    } else if (listStations.indexOf(destination) >= 10) {
      var destinationLine = 'Sandringham';
    } else if (listStations.indexOf(destination) >= 5) {
      var destinationLine = 'Glen Waverley';
    } else if (listStations.indexOf(destination) >= 0) {
      var destinationLine = 'Alamein';
    }
  }

  // if origin and destination are on the same line
  if (originLine === destinationLine) {
    var numberOfStopsSameLine = Math.abs((allStations[originLine].indexOf(origin) + 1) - (allStations[destinationLine].indexOf(destination)) - 1);

// check this! something is not working correctly

  var throughStationsSameLine;

    if (allStations[originLine].indexOf(origin) < allStations[destinationLine].indexOf(destination)) {
      throughStationsSameLine = allStations[originLine].slice((allStations[originLine].indexOf(origin) + 1), allStations[destinationLine].indexOf(destination)).join(' - ');
    } else if (allStations[originLine].indexOf(origin) > allStations[destinationLine].indexOf(destination)) {
      throughStationsSameLine = allStations[originLine].slice((allStations[destinationLine].indexOf(destination) + 1), (allStations[originLine].indexOf(origin))) .join(' - ');
    }

    // var throughStationsSameLine = allStations[originLine].slice((allStations[originLine].indexOf(origin) + 1), allStations[destinationLine].indexOf(destination)).join(' - ');


    if (numberOfStopsSameLine === 1) {
      console.log(destination + ' is the next stop.');
    } else {
      console.log('Your journey starting from ' + origin + ' and ending at ' + destination + ' has ' + numberOfStopsSameLine + ' stops.');
      console.log(' You need to go through ' + throughStationsSameLine + ' before arriving at ' + destination + '.');
    }
  }

  // if destination and origin are NOT on the same line
  else {

    var numberOfStopsDiffLine = Math.abs((allStations[originLine].indexOf(origin) + 1) - (allStations[originLine].indexOf('Richmond')) - 1) + Math.abs((allStations[destinationLine].indexOf('Richmond') - 1) - (allStations[destinationLine].indexOf(destination)) + 1);

    // if (allStations[originLine].indexOf(origin) > allStations[originLine].indexOf('Richmond')) {
    //   var throughStationsOriginLine = allStations[originLine].slice((allStations[originLine].indexOf(origin) + 1), allStations[originLine].indexOf('Richmond')).join(' - ');
    // } else {
    //   var throughStationsOriginLine = allStations[originLine].slice((allStations[originLine].indexOf('Richmond') + 1), allStations[originLine].indexOf(origin)).join(' - ');
    // }


    var throughStationsOriginLine = allStations[originLine].slice((allStations[originLine].indexOf(origin) + 1), allStations[originLine].indexOf('Richmond')).join(' - ');

    var throughStationsDestinationLine = allStations[destinationLine].slice((allStations[destinationLine].indexOf('Richmond') + 1), allStations[destinationLine].indexOf(destination)).join(' - ');

    console.log('Your journey starting from ' + origin + ' and ending at ' + destination + ' has ' + numberOfStopsDiffLine + ' stops.');

    if (throughStationsOriginLine === '') {
      console.log('You need to change at Richmond to the ' + destinationLine + ' line and continue through ' + throughStationsDestinationLine + ' before arriving at ' + destination + '.');
    } else {
      console.log('You need to go through ' + throughStationsOriginLine + ' and change at Richmond to the ' + destinationLine + ' line and continue through ' + throughStationsDestinationLine + ' before arriving at ' + destination + '.');
    }
  }
  }
}

// Alamein line only

/*
var Alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
function journeyDetails(origin, destination) {

  var numberOfStops = Math.abs(Alamein.indexOf(origin) - Alamein.indexOf(destination) - 1);
  var throughStations = Alamein.splice(Alamein.indexOf(origin), Alamein.indexOf(destination));

  if (numberOfStops === 0) {
    console.log(destination + ' is the next stop.');
  } else {
    console.log('Your journey starting from ' + origin + ' and ending at ' + destination + ' has ' + numberOfStops + ' stops. You need to go through ' + throughStations + '.');
  }
}
*/


// var stations = [fdsafdsafdsa];
//
// var start = "Flinders";
// var finish = "fdsa";
//
// var startIndex = stations.indexOf(start);
// var finishIndex = stations.indexOf(finish);
//
// var journey = stations.slice(startIndex, finishIndex + 1);
