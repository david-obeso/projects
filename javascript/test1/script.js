

document.addEventListener('DOMContentLoaded', function () {

    // 
    let count = 0
    let isDarkMode = false;
    // Grab the number display
    let numberDisplay = document.getElementById('number-display');
    // Grab a list of ALL the buttons on the page
    let allButtons = document.querySelectorAll('button');
    let addButton = document.getElementById('add-btn');
    let subButton = document.getElementById('sub-btn');
    let themeButton = document.getElementById('theme-btn');

    // Loop through that list of buttons...
    allButtons.forEach(function (button) {

        // Give EACH button a click listener
        button.addEventListener('click', function () {
            // Add or subtract from the count
            if (button.id === 'add-btn') {
                count++;
            } else if (button.id === 'sub-btn') {
                count--;
            } else if (button.id === 'theme-btn') {
                isDarkMode = !isDarkMode;
            }
            // Update the number display
            numberDisplay.textContent = count;
            // Check if dark mode
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode');
                numberDisplay.classList.add('dark-mode');
                numberDisplay.classList.remove('light-mode');
                themeButton.textContent = 'Light Mode';
            } else {
                document.body.classList.add('light-mode');
                document.body.classList.remove('dark-mode');
                numberDisplay.classList.add('light-mode');
                numberDisplay.classList.remove('dark-mode');
                themeButton.textContent = 'Dark Mode';
            }
            // Check if count negative
            if (count < 0) {
                numberDisplay.style.color = 'red';
            }
            else {
                numberDisplay.style.color = '';
            }
            // Check if count >= 10
            if (count >= 10) {
                addButton.disabled = true;
            }
            // Check if count <= -10
            else if (count <= -10) {
                subButton.disabled = true;
            }
            // Enable both buttons
            else {
                addButton.disabled = false;
                subButton.disabled = false;
            }

        });
    });

});
