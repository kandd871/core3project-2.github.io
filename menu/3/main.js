var timeSpentDiv = document.getElementById("timer");
var paragraphs = document.querySelectorAll('.text p');
var nameInput = document.getElementById('nameInput');
var text = document.querySelector('.text');

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
    var targetFontSize = 1.75 + (0.0625 * totalSeconds); // You can adjust the multiplier for font size as needed
    timeSpentDiv.style.fontSize = targetFontSize + 'vw';
}, 1000);

var paragraphs = document.querySelectorAll('.paragraph');

paragraphs.forEach(function(paragraph) {
    paragraph.draggable = true;

    paragraph.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    });

    paragraph.addEventListener('dragover', function(event) {
        event.preventDefault();
        event.target.classList.add('dragged-over');
    });

    paragraph.addEventListener('dragleave', function(event) {
        event.target.classList.remove('dragged-over');
    });
    paragraph.addEventListener('mouseover', function() {
        paragraphs.forEach(function(para) {
            if(para !== paragraph) {
                para.style.color = 'black'; // Set opacity to half for non-hovered paragraphs
            }
        });
    });
    paragraph.addEventListener('mouseleave', function() {
        paragraphs.forEach(function(para) {
            para.style.color = 'white'; // Reset opacity for all paragraphs
        });
    });

    paragraph.addEventListener('drop', function(event) {
        event.preventDefault();
        var draggedId = event.dataTransfer.getData('text/plain');
        var draggedParagraph = document.getElementById(draggedId);
        var dropTarget = event.target;

        if (dropTarget.classList.contains('paragraph') && dropTarget !== draggedParagraph) {
            // Swap the paragraphs in the DOM
            var temp = document.createElement('div');
            draggedParagraph.parentNode.insertBefore(temp, draggedParagraph);
            dropTarget.parentNode.insertBefore(draggedParagraph, dropTarget);
            temp.parentNode.insertBefore(dropTarget, temp);
            temp.parentNode.removeChild(temp);
        }

        // Reset styles to original properties after dropping
        paragraphs.forEach(function(para) {
            para.classList.remove('dragged-over');
        });
    });
});

// Select all paragraphs
var paragraphs = document.querySelectorAll('.paragraph');

// Convert NodeList to an array
var paragraphsArray = Array.from(paragraphs);

// Randomize the order of paragraphs
paragraphsArray.sort(function() {
    return 0.5 - Math.random();
});

// Append paragraphs back to the parent element in the randomized order
var parentElement = document.querySelector('.text');
paragraphsArray.forEach(function(paragraph) {
    parentElement.appendChild(paragraph);
});

var instructElement = document.getElementById('instruct');
var instructElement1 = document.getElementById('instruct1');

function showInstruct() {
    setTimeout(function() {
        instructElement.style.opacity = '1';
        instructElement1.style.opacity = '1';
        text.style.opacity = '1';
    }, 100); // Delay the appearance by 100ms for a smooth transition
}


// Hide #instruct element after 10 seconds
setTimeout(function() {
    instructElement.style.opacity = '0';
    instructElement1.style.opacity = '0';
    setTimeout(function() {
        instructElement.style.visibility = 'hidden';
        instructElement1.style.opacity = '0';
    }, 3000); // Delay the disappearance by 1 second for a smooth transition
}, 5000); // Disappear after 10 seconds

// Call the function to show the instruct element
showInstruct();


var paragraphs = document.querySelectorAll('.paragraph');
var index = 0;

function showParagraphs() {
    if (index < paragraphs.length) {
        paragraphs[index].style.opacity = '1';
        index++;
        setTimeout(showParagraphs, 700); // Set the delay between paragraphs here (0.5s)
    }
}

// Initially hide all paragraphs
paragraphs.forEach(function(paragraph) {
    paragraph.style.opacity = '0';
    // paragraph.style.transition = 'opacity 3s ease-in-out';
});

// Call the function to show paragraphs after a delay
setTimeout(showParagraphs, 10); // Delay the appearance of the first paragraph by 1 second



