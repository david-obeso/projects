document.addEventListener("DOMContentLoaded", () => {
    const darkModeBtn = document.getElementById("darkModeBtn");
    const body = document.body;
    const greetingBtn = document.getElementById("greetingBtn");
    const greeting = document.getElementById("greeting");

    darkModeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "Light mode";
        } else {
            darkModeBtn.textContent = "Dark mode";
        }
    });

    greetingBtn.addEventListener("click", () => {
        greeting.classList.toggle("hidden");
    });
});