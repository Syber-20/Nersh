function showSuggestions() {
    const input = document.getElementById('search-box').value.toLowerCase();
    const suggestionsList = document.getElementById('suggestions-list');
    
    // Clear existing suggestions
    suggestionsList.innerHTML = '';

    if (input === '') {
        suggestionsList.style.display = 'none';
        return;
    }

    // Determine the first letter of the input
    const firstLetter = input.charAt(0);

    // Fetch the relevant JSON file based on the first letter
    fetch(`./terms/${firstLetter}/terms.json`)
        .then(response => response.json())
        .then(data => {
            const filteredTerms = data.terms.filter(term => term.toLowerCase().startsWith(input));
            
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
    const firstLetter = term.charAt(0).toLowerCase();
    window.location.href = `./terms/${firstLetter}/${term}.html`;
}