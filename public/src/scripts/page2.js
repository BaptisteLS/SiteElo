// This file contains the JavaScript logic for the second page, managing code validation and navigation to the third page.

document.addEventListener('DOMContentLoaded', function() {
    const correctCode = 'loco loca'; // Remplace par le code réel de la page 2
    const inputField = document.getElementById('codeInput');
    const submitButton = document.getElementById('validateButton'); // Correction ici

    submitButton.addEventListener('click', function() {
        const userInput = inputField.value;
        if (userInput === correctCode) {
            window.location.href = 'page3.html'; // Redirige vers la troisième page
        } else {
            alert('Code incorrect, veuillez réessayer.');
        }
    });
});