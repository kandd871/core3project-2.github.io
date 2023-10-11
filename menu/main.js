const numberOfImages = 7;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayRandomImages() {
    const body = document.body;

    for (let i = 0; i < numberOfImages; i++) {
        const anchor = document.createElement('a');
        anchor.href = (i+1)+'/index.html'; // Set the link URL

        const image = document.createElement('img');
        image.src = 'buffer.png'; // Set the path to your image file
        image.style.width = '28px'; // Set the width of the image
        image.style.height = '28px'; // Set the height of the image

        // Set random positions for both anchor and image elements
        anchor.style.position = 'absolute';
        anchor.style.top = getRandomNumber(0, window.innerHeight - 100) + 'px';
        anchor.style.left = getRandomNumber(0, window.innerWidth - 100) + 'px';

 
        // Append the image element to the anchor element
        anchor.appendChild(image);

        // Append the anchor element to the body
        body.appendChild(anchor);
    }
}

window.onload = displayRandomImages;
