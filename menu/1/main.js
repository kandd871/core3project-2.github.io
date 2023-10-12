var timeSpentDiv = document.getElementById("timer");
var startTime = new Date().getTime();

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
    var targetFontSize = 1 + (0.0025 * totalSeconds); // You can adjust the multiplier for font size as needed
    timeSpentDiv.style.fontSize = targetFontSize + 'vw';
}, 1000);

// Get the scrollbar elements
const scrollbarThumb = document.querySelector('::-webkit-scrollbar-thumb');

// Function to scroll to the home page
function scrollToHomePage() {
    window.location.href = '../index.html'; // Redirect to the home page
}

scrollbarThumb.addEventListener('click', scrollToHomePage);

