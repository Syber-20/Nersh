function showSuggestions() {
    const input = document.getElementById('search-box').value;
    const suggestionsList = document.getElementById('suggestions-list');
    const maxSuggestions = 5; // Limit suggestions

    suggestionsList.innerHTML = '';

    if (input === '') {
        suggestionsList.style.display = 'none';
        return;
    }

    const firstLetter = input.charAt(0).toLowerCase();
    fetch(`./terms/${firstLetter}/terms.json`)
        .then(response => response.json())
        .then(data => {
            const normalizedInput = input.replace(/[_\s]/g, '');
            const filteredTerms = data.terms.filter(term =>
                term.replace(/[_\s]/g, '').toLowerCase().startsWith(normalizedInput.toLowerCase())
            );

            const limitedTerms = filteredTerms.slice(0, maxSuggestions); // Limit suggestions

            if (limitedTerms.length > 0) {
                limitedTerms.forEach(term => {
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
    const formattedTerm = term.toLowerCase().replace(/ /g, '_');
    const firstLetter = term.charAt(0).toLowerCase();
    window.location.href = `./terms/${firstLetter}/${formattedTerm}.html`;
}

// Make "nersh-it" button functional
document.querySelector('.search-button').onclick = function(event) {
    event.preventDefault();
    const searchValue = document.getElementById('search-box').value.trim();
    if (searchValue) {
        selectTerm(searchValue);
    }
};