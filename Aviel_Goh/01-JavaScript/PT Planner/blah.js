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

journeyDetails('Hawthorn','East Richmond');
*/

var listStations = ['Flinders Street', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie','Flagstaff', 'Melbourne Central', 'Parliament','Kooyong', 'Tooronga','Southern Cross', 'South Yarra', 'Prahran', 'Windsor'];

var allStations = {
  "Alamein": ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  "Glen Waverley": ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  'Sandringham': ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}

function journeyDetails(origin, destination) {

  if (origin === destination) {
    console.log('Look up! You are already at ' + origin + '!');
  } else {

  for (i = 0; i < listStations.length; i++) {
    if (listStations.indexOf(origin) >= 10) {
      var originLine = 'Sandringham';
    } else if (listStations.indexOf(origin) >= 5) {
      var originLine = 'Glen Waverley';
    } else if (listStations.indexOf(origin) >= 0) {
      var originLine = 'Alamein';
    }
  }

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

  if (originLine === destinationLine) {
    var numberOfStopsSameLine = Math.abs((allStations[originLine].indexOf(origin) + 1) - (allStations[destinationLine].indexOf(destination)) - 1);

    var throughStationsSameLine = allStations[originLine].slice((allStations[originLine].indexOf(origin) + 1), allStations[destinationLine].indexOf(destination)).join(' - ');

    if (numberOfStopsSameLine === 1) {
      console.log(destination + ' is the next stop.');
    } else {
      console.log('Your journey starting from ' + origin + ' and ending at ' + destination + ' has ' + numberOfStopsSameLine + ' stops.');
      console.log(' You need to go through ' + throughStationsSameLine + ' before arriving at ' + destination + '.');
    }
  } else {

    var numberOfStopsDiffLine = Math.abs((allStations[originLine].indexOf(origin) + 1) - (allStations[originLine].indexOf('Richmond')) - 1) + Math.abs((allStations[destinationLine].indexOf('Richmond') - 1) - (allStations[destinationLine].indexOf(destination)) + 1);

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
