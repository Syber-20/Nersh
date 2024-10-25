function showSuggestions() {
    const input = document.getElementById('search-box').value; // No need to convert to lowercase here
    const suggestionsList = document.getElementById('suggestions-list');

    // Clear existing suggestions
    suggestionsList.innerHTML = '';

    if (input === '') {
        suggestionsList.style.display = 'none';
        return;
    }

    // Determine the first letter of the input
    const firstLetter = input.charAt(0).toLowerCase(); // Keep it lowercase for directory

    // Fetch the relevant JSON file based on the first letter
    fetch(`./terms/${firstLetter}/terms.json`)
        .then(response => response.json())
        .then(data => {
            // Normalize input for filtering (e.g., remove spaces and underscores)
            const normalizedInput = input.replace(/[_\s]/g, ''); // Remove underscores and spaces

            const filteredTerms = data.terms.filter(term => {
                // Normalize the term to compare with the input
                return term.replace(/[_\s]/g, '').toLowerCase().startsWith(normalizedInput.toLowerCase());
            });
            
            if (filteredTerms.length > 0) {
                filteredTerms.forEach(term => {
                    const listItem = document.createElement('li');
                    listItem.textContent = term;
                    listItem.onclick = () => selectTerm(term);
                    suggestionsList.appendChild(listItem);
                });
                suggestionsList.style.display = 'block';
            } else {
                suggestionsList.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error loading terms:', error);
            suggestionsList.style.display = 'none';
        });
}

function selectTerm(term) {
    // Redirect to the term.html file in the term folder
    const formattedTerm = term.toLowerCase().replace(/ /g, '_'); // Ensure correct formatting
    const firstLetter = term.charAt(0).toLowerCase(); // Keep this in lowercase for the path
    window.location.href = `./terms/${firstLetter}/${formattedTerm}.html`;
}
