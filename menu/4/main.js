var timeSpentDiv = document.getElementById("timer");
var imgcontainer = document.getElementById('imgcontainer');
var wholetext = document.querySelector('.wholetext');
var body = document.querySelector('body');
var scroll = document.querySelector("::-webkit-scrollbar");
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
    var targetFontSize = 2.25 + (0.00015625 * totalSeconds); // You can adjust the multiplier for font size as needed
    timeSpentDiv.style.fontSize = targetFontSize + 'vw';

}, 1000);





