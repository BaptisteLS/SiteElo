// This file contains the JavaScript logic for the third page, handling code validation and navigation to the final page.

document.addEventListener("DOMContentLoaded", function() {
    const correctCode = "18042025"; // Replace with the actual code
    const codeInput = document.getElementById("codeInput");
    const submitButton = document.getElementById("validateButton"); // Correction ici
    const message = document.getElementById("message");

    submitButton.addEventListener("click", function() {
        if (codeInput.value === correctCode) {
            window.location.href = "page4.html"; // Navigate to the final page
        } else {
            message.textContent = "Code incorrect, veuillez réessayer.";
        }
    });
});