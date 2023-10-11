var timeSpentDiv = document.getElementById("timer");
var paragraphs = document.querySelectorAll('.text p');
var nameInput = document.getElementById('nameInput');
var text = document.querySelector('.text');
var updateButton = document.getElementById('updateNameButton');
var videoElement = document.getElementById('videoElement');
var canvas = document.createElement('canvas');
var end = document.querySelector('.end');
var video = document.getElementById('video')
var context = canvas.getContext('2d');
var videoContainer = document.querySelector('.video-container');
var smile = document.getElementById('smile');
var capturedImageContainer = document.getElementById('capturedImageContainer');
var captureButton = document.getElementById('captureButton');
var nameElement = document.querySelector('.name'); // Assuming you have an element with class 'name'
var down = document.getElementById('down');

var mediaStream;

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
    var targetFontSize = 3.25 + (0.015625 * totalSeconds); // You can adjust the multiplier for font size as needed
    timeSpentDiv.style.fontSize = targetFontSize + 'vw';
}, 1000);

updateButton.addEventListener('click', function() {
    video.style.display = 'block';
    paragraphs.forEach(function(paragraph) {
        if (paragraph.textContent.includes('*Name*')) {
            paragraph.innerHTML = paragraph.innerHTML.replace(/\*Name\*/g, `<span class="bold-name">${nameInput.value}</span>`);
        }
    });
});

navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        videoElement.srcObject = stream;
        mediaStream = stream;
        
        videoElement.onloadedmetadata = function(e) {
            videoElement.play();
        };
    })
    .catch(function(err) {
        console.error('Error accessing camera: ', err);
    });

captureButton.addEventListener('click', function() {
    setTimeout(function() {
        var inputDiv = document.querySelector('.input');
        nameInput.style.visibility = 'hidden';
        updateButton.style.visibility = 'hidden';
        captureButton.style.visibility = 'hidden';
        smile.style.visibility = 'hidden';
        down.style.visibility = 'visible';
    }, 1000);

    text.style.display = 'block';
    end.style.display = 'block';
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    
    // Convert the captured frame to grayscale
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    // Determine the size of the square (use the smaller dimension as the size)
    var size = Math.min(canvas.width, canvas.height);
    
    // Calculate the crop position (centered)
    var offsetX = (canvas.width - size) / 2;
    var offsetY = (canvas.height - size) / 2;
    
    // Clear the canvas and draw the cropped image
    canvas.width = size;
    canvas.height = size;
    context.drawImage(videoElement, offsetX, offsetY, size, size, 0, 0, size, size);
    
    for (var i = 0; i < data.length; i += 4) {
        var brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = brightness;
        data[i + 1] = brightness;
        data[i + 2] = brightness;
    }
    
    context.putImageData(imageData, 0, 0);
    
    // Create a new image element and set its source to the captured image
    var capturedImage = new Image();
    capturedImage.src = canvas.toDataURL('image/png');
    
    // Append the captured image to the capturedImageContainer
    capturedImageContainer.innerHTML = '';
    capturedImageContainer.appendChild(capturedImage);
    
    // Stop the video stream
   if (mediaStream) {
        var tracks = mediaStream.getTracks();
        tracks.forEach(function(track) {
            track.stop();
        });
    }

    // Delay the replacement by 1000 milliseconds
    setTimeout(function() {
        // Create a new image element for the question mark image
        var questionMarkImage = new Image();
        questionMarkImage.src = 'questionmark.png'; // Replace 'questionmark.png' with the actual path to your question mark image

        // Set styles for the question mark image
        questionMarkImage.style.width = '100%'; // Set width to 100% to fill the video container
        questionMarkImage.style.height = '100%'; // Set height to 100% to fill the video container

        // Replace the video element with the question mark image
        videoElement.srcObject = null; // Remove the video stream
        videoElement.style.display = 'none'; // Hide the video element
        videoContainer.appendChild(questionMarkImage); // Append the question mark image to the video container
        videoContainer.style.display = 'block'; // Display the video container with the question mark image
    }, 1000); // Delay the replacement by 1000 milliseconds (1 second)
});

nameElement.addEventListener('mouseover', function() {
    // Display the captured image when the name is hovered over
    capturedImageContainer.style.display = 'block';
});

nameElement.addEventListener('mouseout', function() {
    // Hide the captured image when the mouse moves away from the name
    capturedImageContainer.style.display = 'none';
});
