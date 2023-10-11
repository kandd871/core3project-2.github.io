// // Get the specific paragraph to scroll into focus
// var targetParagraph = document.querySelector('.text p:nth-child(3)');

// // Function to scroll the target paragraph into focus and black out the rest
// function scrollIntoFocus() {
//     // Scroll the target paragraph into view smoothly
//     targetParagraph.scrollIntoView({ behavior: 'smooth' });

//     // Iterate through all paragraphs and add a blackout class to hide them
//     var allParagraphs = document.querySelectorAll('.text p');
//     allParagraphs.forEach(function (paragraph) {
//         if (paragraph !== targetParagraph) {
//             paragraph.classList.add('blackout');
//         }
//     });
// }

// // Call the function when the content is loaded
// document.addEventListener('DOMContentLoaded', scrollIntoFocus);
