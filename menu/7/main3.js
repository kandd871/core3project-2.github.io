document.addEventListener('DOMContentLoaded', function() {
    // Get the button element and all paragraphs with ellipses
    var toggleButton = document.getElementById('toggleButton');
    var paragraphs = document.querySelectorAll('.text p');

    // Loop through paragraphs containing ellipses
    paragraphs.forEach(function(paragraph) {
        // Check if the paragraph text contains an ellipsis
        if (paragraph.textContent.trim().includes('...')) {
            // Replace ellipses with <span> elements
            paragraph.innerHTML = paragraph.innerHTML.replace(/\.\.\./g, '<span class="ellipsis">...</span>');
        }
    });

    // Get all ellipsis spans after they have been added
    var ellipsisSpans = document.querySelectorAll('.ellipsis');

    // Add event listener to the button
    toggleButton.addEventListener('click', function() {
        // Loop through all ellipsis spans and toggle the 'noellipsis' class
        ellipsisSpans.forEach(function(span) {
            // Check if the 'noellipsis' class is present or not, and toggle it
            span.classList.toggle('noellipsis');
        });
    });
});
var toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    toggleButton.classList.toggle('active');
});
