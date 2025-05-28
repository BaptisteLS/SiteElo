// JavaScript logic for the first page
document.addEventListener('DOMContentLoaded', function() {
    const correctCode = 'brets'; // Code pour accéder à la page 2
    const wrongCode = 'lactalis';  // Mot de passe qui mène à la page d'erreur
    const inputField = document.getElementById('codeInput');
    const submitButton = document.getElementById('validateButton');

    submitButton.addEventListener('click', function() {
        const userInput = inputField.value;
        if (userInput === correctCode) {
            window.location.href = 'page2.html'; // Redirige vers la deuxième page
        } else if (userInput === wrongCode) {
            window.location.href = 'error.html'; // Redirige vers la page d'erreur
        } else {
            alert('Code incorrect, veuillez réessayer.');
        }
    });
});

<script src="src/scripts/page1.js"></script>