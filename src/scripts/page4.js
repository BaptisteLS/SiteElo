// This file contains the JavaScript logic for the final page, handling the PDF download.

document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('download-button');

    downloadButton.addEventListener('click', function() {
        window.location.href = '../pdf/document.pdf';
    });
});