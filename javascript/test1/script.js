

document.addEventListener('DOMContentLoaded', function () {

    // 1. Grab the paragraph where we want to show the text
    let outputParagraph = document.getElementById('p');

    // 2. Grab a list of ALL the buttons on the page
    let allButtons = document.querySelectorAll('button');

    // 3. Loop through that list of buttons...
    allButtons.forEach(function (button) {

        // 4. Give EACH button a click listener
        button.addEventListener('click', function () {

            // 5. Delete, clear or add the text of the clicked button to the paragraph
            if (button.id === 'delete') {
                outputParagraph.textContent = outputParagraph.textContent.slice(0, -1);
            } else if (button.id === 'clear') {
                outputParagraph.textContent = '';
            } else {
                outputParagraph.textContent += button.textContent;
            }

        });
    });
});


