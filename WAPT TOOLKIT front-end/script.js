document.addEventListener("DOMContentLoaded", function() {
    console.log("Page is fully loaded and the background image is fixed.");

    const descriptionButton = document.getElementById('descriptionButton');
    const toolsButton = document.getElementById('toolsButton');
    const descriptionContainer = document.getElementById('descriptionContainer');
    const flashcardsContainer = document.getElementById('flashcardsContainer');

    // Flashcard content containers
    const sqlInjectionContent = document.getElementById('sqlInjectionContent');
    const xssContent = document.getElementById('xssContent');
    const csrfContent = document.getElementById('csrfContent');

    // Back buttons for each content div
    const backButton = document.querySelectorAll('#backButton');

    descriptionButton.addEventListener('click', function() {
        if (descriptionContainer.style.display === 'none' || descriptionContainer.style.display === '') {
            descriptionContainer.style.display = 'block';
            flashcardsContainer.style.display = 'none'; // Hide flashcards when description is shown
            sqlInjectionContent.style.display = 'none'; // Hide flashcard content when description is shown
            xssContent.style.display = 'none';
            csrfContent.style.display = 'none';
        } else {
            descriptionContainer.style.display = 'none';
        }
    });

    toolsButton.addEventListener('click', function() {
        if (flashcardsContainer.style.display === 'none' || flashcardsContainer.style.display === '') {
            flashcardsContainer.style.display = 'block';
            descriptionContainer.style.display = 'none'; // Hide description when flashcards are shown
            sqlInjectionContent.style.display = 'none'; // Hide flashcard content when flashcards are shown
            xssContent.style.display = 'none';
            csrfContent.style.display = 'none';
        } else {
            flashcardsContainer.style.display = 'none';
        }
    });

    const flashButtons = {
        "SQL Injection": sqlInjectionContent,
        "XSS": xssContent,
        "CSRF": csrfContent
    };

    document.querySelectorAll('#flashButton').forEach(button => {
        button.addEventListener('click', function() {
            const contentDiv = flashButtons[this.textContent];
            flashcardsContainer.style.display = 'none';
            contentDiv.style.display = 'block';
        });
    });

    // Add event listener to all back buttons
    backButton.forEach(button => {
        button.addEventListener('click', function() {
            sqlInjectionContent.style.display = 'none';
            xssContent.style.display = 'none';
            csrfContent.style.display = 'none';
            flashcardsContainer.style.display = 'flex';
        });
    });
});
