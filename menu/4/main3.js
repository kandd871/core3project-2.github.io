// Function to create a black rectangle div with random width and height
function createBlackRectangle() {
    var blackRectangle = document.createElement('div');
    blackRectangle.className = 'black-rectangle';
    var randomWidth = Math.floor(Math.random() * 10) + 10; // Random width between 10vw and 20vw
    blackRectangle.style.width = randomWidth + 'vw';

    // Add event listener to remove the rectangle when clicked
    blackRectangle.addEventListener('click', function() {
        var maxWidth = window.innerWidth - blackRectangle.offsetWidth;
        var maxHeight = window.innerHeight - blackRectangle.offsetHeight;
        var randomPositionX = Math.floor(Math.random() * maxWidth);
        var randomPositionY = Math.floor(Math.random() * maxHeight);

        blackRectangle.style.left = randomPositionX + 'px';
        blackRectangle.style.top = randomPositionY + 'px';
    });

    return blackRectangle;
}

// Function to embed black rectangles randomly within paragraphs
function embedBlackRectangles() {
    var paragraphs = document.querySelectorAll('.text p');
    paragraphs.forEach(function(paragraph) {
        var numRectangles = Math.floor(Math.random() * 20) + 1; // Random number of rectangles (1 to 5)
        for (var i = 0; i < numRectangles; i++) {
            var blackRectangle = createBlackRectangle();
            var maxWidth = paragraph.offsetWidth - blackRectangle.offsetWidth;
            var maxHeight = paragraph.offsetHeight - blackRectangle.offsetHeight;
            var randomPositionX = Math.floor(Math.random() * maxWidth)/1.22;
            var randomPositionY = Math.floor(Math.random() * maxHeight);

            // Ensure rectangles don't go beyond the width of the paragraph
            randomPositionX = Math.min(randomPositionX, maxWidth);
            randomPositionY = Math.min(randomPositionY, maxHeight);

            blackRectangle.style.left = randomPositionX + 'px';
            blackRectangle.style.top = randomPositionY + 'px';
            paragraph.appendChild(blackRectangle);
        }
    });
}

// Call the function to embed black rectangles when the content is loaded
document.addEventListener('DOMContentLoaded', function() {
    embedBlackRectangles();
});
