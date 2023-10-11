var body = document.querySelector('body');
var timer = document.querySelector('.timer');
var text = document.querySelector('.text');
var countdownElement = document.getElementById('countdown');
var popupElement = document.getElementById('popup');

var countdownDuration = 30; // Initial countdown duration

var possibleTexts = [
    "Hold on. Have you been blinking? Let's take a few seconds...",
    "Are you staying hydrated? You should drink some water right now...",
    "You've been sitting here for quite a while. Let's get up & stretch...",
    "Stop! Close your eyes, take a deep breath, & do nothing for a little bit...",
    // Add more text options as needed
];

function getRandomText() {
    var randomIndex = Math.floor(Math.random() * possibleTexts.length);
    return possibleTexts[randomIndex];
}

function updateCountdown(duration) {
    var countdownText = document.querySelector('.countdown');
    var secondsStr = String(duration).padStart(2, '0');
    countdownText.textContent = secondsStr;
    countdownText.style.border = '1px solid black';
    countdownText.style.borderRadius = '50%';
    countdownText.style.textAlign = 'center';
}

function startCountdown(duration, callback) {
    var countdownInterval = setInterval(function() {
        duration--;
        updateCountdown(duration);
        if (duration <= 0) {
            clearInterval(countdownInterval);
            if (callback) {
                callback(); // Call the callback function once the countdown is complete
            }
        }
    }, 1000);
}

function showPopup() {
    var popupText = getRandomText();
    var countdownText = countdownDuration;
    popupText = popupText.replace('...', '...' + '<span class="countdown">' + countdownText + '</span>');
    popupElement.innerHTML = popupText;
    timer.style.visibility = 'hidden';
    text.style.visibility = 'hidden';
    document.body.style.background = 'black';
    popupElement.style.display = 'block';
    updateCountdown(countdownDuration); // Update countdown display with initial duration
    startCountdown(countdownDuration, function() {
        popupElement.style.display = 'none';
        timer.style.visibility = 'visible';
        text.style.visibility = 'visible';
        document.body.style.background = 'white';
        setTimeout(showPopup, 60000); // Call showPopup every one minute after the countdown finishes
    });
}

// Call showPopup function after one minute
setTimeout(showPopup, 60000);
