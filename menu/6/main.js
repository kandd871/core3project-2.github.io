var timeSpentDiv = document.getElementById("timer");
var imgcontainer = document.getElementById('imgcontainer');
var wholetext = document.querySelector('.wholetext');
var body = document.querySelector('body');
var patience = document.getElementById('patience');
var startTime = new Date().getTime(); // Set the start time

setInterval(function() {
    var currentTime = new Date().getTime();
    var timeSpent = Math.floor((currentTime - startTime) / 1000); // Total time spent in seconds

    var hours = Math.floor(timeSpent / 3600);
    var minutes = Math.floor((timeSpent % 3600) / 60);
    var seconds = timeSpent % 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeSpentDiv.textContent = hours + ":" + minutes + ":" + seconds;

    // Convert total time spent into seconds
    var totalSeconds = timeSpent;

    // Calculate font size based on total seconds
    var targetFontSize = 4.75 + (0.000078125 * totalSeconds); // You can adjust the multiplier for font size as needed
    timeSpentDiv.style.fontSize = targetFontSize + 'vw';

    // Check if 1 second has passed and hide img1
    if (timeSpent >= 10) {
        document.getElementById('img1').style.opacity = '0';
        document.getElementById('img1').style.visibility = 'hidden';
    }
    if (timeSpent >= 18) {
        document.getElementById('img2').style.opacity = '0';
        document.getElementById('img2').style.visibility = 'hidden';
    }
    if (timeSpent >= 22) {
        document.getElementById('img3').style.opacity = '0';
        document.getElementById('img3').style.visibility = 'hidden';
    }
    if (timeSpent >= 28) {
        document.getElementById('img4').style.opacity = '0';
        document.getElementById('img4').style.visibility = 'hidden';
    }
    if (timeSpent >= 34) {
        document.getElementById('img5').style.opacity = '0';
        document.getElementById('img5').style.visibility = 'hidden';
    }
    if (timeSpent >= 40) {
        document.getElementById('img6').style.opacity = '0';
        document.getElementById('img6').style.visibility = 'hidden';
    }
    if (timeSpent >= 49) {
        document.getElementById('img7').style.opacity = '0';
        document.getElementById('img7').style.visibility = 'hidden';
    }
    if (timeSpent >= 53) {
        document.getElementById('img8').style.opacity = '0';
        document.getElementById('img8').style.visibility = 'hidden';
    }
    if (timeSpent >= 56) {
        document.getElementById('img9').style.opacity = '0';
        document.getElementById('img9').style.visibility = 'hidden';
    }
}, 1000);

for (var i = 1; i <= 9; i++) {
    var imageElement = document.createElement('img');
    imageElement.src = 'photos/' + i + '.JPG';
    imageElement.id = 'img' + i;
    imgcontainer.appendChild(imageElement);

    // Add event listeners for touch interactions
imageElement.addEventListener('mouseover', function(event) {
    wholetext.style.visibility = 'hidden';
    body.style.cursor = 'url(buffer.png) 10 10, auto';
    timeSpentDiv.style.color = 'white';
    timeSpentDiv.style.border = '1px solid white';
    patience.style.visibility = 'visible';


});

imageElement.addEventListener('mouseout', function(event) {
    wholetext.style.visibility = 'visible';
    body.style.cursor = 'auto';
    timeSpentDiv.style.color = 'black';
    timeSpentDiv.style.border = '1px solid black';
    patience.style.visibility = 'hidden';
    scroll.style.display = 'block';
});

}


