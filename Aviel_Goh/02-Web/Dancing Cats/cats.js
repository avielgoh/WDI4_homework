var movePixels = 10;
var delayMs = 60;
var catTimer = null;
var goRight = true;

var start = document.getElementById('startButton');
var faster = document.getElementById('fasterButton')
var stop = document.getElementById('stopButton');

var catWalk = function() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left, 10);

  if (goRight) {
    img.style.left = (currentLeft + movePixels) + 'px'; // add movePixels to make cat walk right
    img.style.transform = "scaleX(-1)";
  } else {
    img.style.left = (currentLeft - movePixels) + 'px'; // less movePixels to make cat walk left
    img.style.transform = "scaleX(1)";
  }

  if (goRight === true && currentLeft > (window.innerWidth - img.width)) {
    goRight = false; // walk left
  } else if (goRight === false && currentLeft < 0) {
    goRight = true; // walk right again
  }

}

// Start cat walking
var startCatWalk = function() {
  // Clear the catTimer each time
  if (catTimer !== null) {
    return;
  }
  // Change the movePixels back to the original
  if (movePixels !== 10) {
    movePixels = 10;
  }
  catTimer = window.setInterval(catWalk, delayMs);
}
startButton.addEventListener('click', startCatWalk);

// Increase number of pixels the image is moving at
var goFaster = function() {
  movePixels += 5;
}
faster.addEventListener('click', goFaster);

// Stop cat from walking
var stopCatWalk = function() {
  clearInterval(catTimer);
  catTimer = null;
}
stopButton.addEventListener('click', stopCatWalk);
