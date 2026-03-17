
document.addEventListener("DOMContentLoaded", function () {
    let feedbackMessage = document.getElementById("feedback-message");
    let secretAnswer = Math.floor(Math.random() * 10) + 1;
    let button = document.getElementById("guess-btn");

    button.addEventListener("click", function () {
        let userGuessInput = document.getElementById("user-guess").value;



        if (Number(userGuessInput) === secretAnswer) {
            feedbackMessage.textContent = "You win!";
        } else if (userGuessInput < secretAnswer) {
            feedbackMessage.textContent = "Too low!";
        } else {
            feedbackMessage.textContent = "Too high!";
        }
    });
});