
document.addEventListener("DOMContentLoaded", function () {
    let feedbackMessage = document.getElementById("feedback-message");
    let secretAnswer = Math.floor(Math.random() * 10) + 1;
    let button = document.getElementById("guess-btn");
    let userGuess = document.getElementById("user-guess");
    let attempts = 0;
    let attemptsElement = document.getElementById("attempts");

    button.addEventListener("click", function () {
        document.body.classList.remove("win");
        document.body.classList.remove("lose");
        let userGuessInput = Number(userGuess.value);
        if (userGuessInput < 1 || userGuessInput > 10) {
            feedbackMessage.textContent = "Please enter a number between 1 and 10";
            return;
        }
        attempts++;
        attemptsElement.textContent = `Attempts: ${attempts}`;
        feedbackMessage.textContent = "";
        // check if they won
        if (userGuessInput === secretAnswer) {
            feedbackMessage.textContent = "You win!";
            document.body.classList.add("win");
            resetGame();
            // check if they run out of attempts (lost)       
        } else if (attempts === 3) {
            feedbackMessage.textContent = `You lose! The number was ${secretAnswer}`;
            document.body.classList.add("lose");
            resetGame();
            // give hints if they didn't win or lose
        } else if (userGuessInput < secretAnswer) {
            feedbackMessage.textContent = "Too low!";
        } else {
            feedbackMessage.textContent = "Too high!";
        }
    });
    userGuess.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            button.click();
        }
    });
    function resetGame() {
        secretAnswer = Math.floor(Math.random() * 10) + 1;
        userGuess.value = "";
        attempts = 0;
    }
});