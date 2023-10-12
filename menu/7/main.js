var timeSpentDiv = document.getElementById("timer");
var paragraphs = document.querySelectorAll('.text p'); // Select all paragraphs with class 'text'
var fontSizeIncrement = 1; // Define the font size increment in vw

var startTime = new Date().getTime(); // Set the start time
var baseFontSize = 4.75; // Set the base font size in vw

paragraphs.forEach(function(paragraph, index) {
    var fontSize = (baseFontSize + index * fontSizeIncrement)/2.5; // Calculate font size for each paragraph
    paragraph.style.fontSize = fontSize + 'vw'; // Set font size for the paragraph
});

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
    var targetFontSize = 2 + (0.00004 * totalSeconds); // You can adjust the multiplier for font size as needed
    timeSpentDiv.style.fontSize = targetFontSize + 'vw';

}, 1000);
