// Variables for DOM elements
var countdownElement = document.getElementById('countdown');
var popupElement = document.getElementById('popup');
var pauseButton = document.getElementById('pauseButton');
var startButton = document.getElementById('startButton');
var endButton = document.getElementById('endButton');
var paragraphContainer = document.getElementById('paragraphContainer');
var patience = document.getElementById('patience');
var audio = document.getElementById('audio');
// Initial countdown duration and typing speed
var countdownDuration = 30;
var typingSpeed = 75;
audio.play();
// Text to type
var textToType = [
    "In the heart of a bustling city, amidst the cacophony of everyday life, there was a quaint little music shop named Harmony Haven. The owner, a wise old musician named Melody, understood the power of music as a refreshing break from the hustle and bustle of the world. People from all walks of life would step into the shop, weary from their daily struggles, seeking solace in the melodies that hung in the air.",
    "Inside Harmony Haven, the atmosphere was serene, with instruments of all kinds adorning the walls. Melody would often invite visitors to pick up an instrument and lose themselves in the music. The enchanting tunes became a sanctuary, a break from the demands of the outside world. Customers would find respite in the soft chords of a guitar or the soothing notes of a piano, their worries melting away with each melody played.",
    "For those brief moments, the strains of music became a bridge to another world, a realm where troubles ceased to exist. Melody believed that in the realm of music, people found not only a break but also a connection – to their emotions, to the rhythm of life, and to the harmony that unites us all. And so, Harmony Haven became more than just a shop; it became a sanctuary where people discovered the beauty of taking a break, immersing themselves in the timeless symphony of life."
];

// Typing variables
var currentTextIndex = 0;
var currentCharacterIndex = 0;
var typingTimeout;

// Flag to track if typing is paused
var isPaused = false;

function typeText() {
    var currentText = textToType[currentTextIndex];
    if (!isPaused && currentTextIndex < textToType.length) {
        if (currentCharacterIndex === 0) {
            paragraphContainer.innerHTML += "<p>";
        }
        paragraphContainer.lastChild.textContent += currentText.charAt(currentCharacterIndex);
        currentCharacterIndex++;
        if (currentCharacterIndex < currentText.length) {
            typingTimeout = setTimeout(typeText, typingSpeed);
        } else {
            currentTextIndex++;
            currentCharacterIndex = 0;
            paragraphContainer.innerHTML += "</p>";
            typingTimeout = setTimeout(typeText, typingSpeed);
        }
    }
}

// Event listener for pause button
pauseButton.addEventListener('click', function() {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? '▶️' : '⏸️';
    if (!isPaused) {
        // Resume typing if not paused
        typeText();
        audio.play();
    } else {
        // Pause typing if clicked while typing
        clearTimeout(typingTimeout);
        audio.pause();
    }
});

// Event listener for start button
startButton.addEventListener('click', function() {
    // Reset typing variables and clear existing content
    currentTextIndex = 0;
    currentCharacterIndex = 0;
    paragraphContainer.innerHTML = "<p></p>";
    audio.currentTime = 0;
    audio.play();
    // Start countdown and typing
    startCountdownAndPopup();
});

var isEndButtonClicked = false;

endButton.addEventListener('click', function() {
    patience.style.visibility = 'visible';

    // Set a timeout to hide the patience element after 1 second (1500 milliseconds)
    setTimeout(function() {
        patience.style.visibility = 'hidden';
    }, 1500);
});

window.onload = function() {
    // Delay the start of typing by 2 seconds
    setTimeout(function() {
        audio.play();
        typeText(); // Start typing when audio starts playing
    }, 3000); // 2000 milliseconds = 2 seconds
};


