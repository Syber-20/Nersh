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
        .then(response => {
            if (!response.ok) {
                throw new Error('No terms found');
            }
            return response.json();
        })
        .then(data => {
            if (!data || !data.terms) {
                suggestionsList.style.display = 'none';
                return;
            }

            const normalizedInput = input.replace(/[_\s]/g, '').toLowerCase();
            const filteredTerms = data.terms.filter(term =>
                term.replace(/[_\s]/g, '').toLowerCase().includes(normalizedInput)
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
    const formattedTerm = term.replace(/ /g, '_');
    const firstLetter = term.charAt(0).toLowerCase();
    window.location.href = `./terms/${firstLetter}/${formattedTerm}.html`;
}

// Add event listener to handle Enter key in search box
document.getElementById('search-box').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const searchValue = this.value.trim();
        if (searchValue) {
            selectTerm(searchValue);
        }
    }
});

// Function to get a random term
async function getRandomTerm() {
    try {
        // Get all letter directories
        const response = await fetch('./terms/');
        if (!response.ok) {
            throw new Error('Failed to fetch terms directory');
        }
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const links = Array.from(doc.querySelectorAll('a'))
            .map(a => a.href)
            .filter(href => href.match(/\/terms\/[a-z]\/$/));

        if (links.length === 0) {
            console.error('No term directories found');
            return;
        }

        // Get a random letter directory
        const randomLetterDir = links[Math.floor(Math.random() * links.length)];
        const letter = randomLetterDir.match(/\/terms\/([a-z])\/$/)[1];

        // Get terms from the random letter directory
        const termsResponse = await fetch(`./terms/${letter}/terms.json`);
        if (!termsResponse.ok) {
            throw new Error('Failed to fetch terms file');
        }
        const termsData = await termsResponse.json();

        if (termsData.terms && termsData.terms.length > 0) {
            const randomTerm = termsData.terms[Math.floor(Math.random() * termsData.terms.length)];
            selectTerm(randomTerm);
        } else {
            console.error('No terms found in directory');
        }
    } catch (error) {
        console.error('Error getting random term:', error);
    }
}

// Add click event listener for the nerdy button
document.getElementById('nerdy-button').addEventListener('click', getRandomTerm);

// Add click outside listener to close suggestions
document.addEventListener('click', function(event) {
    const suggestionsList = document.getElementById('suggestions-list');
    const searchBox = document.getElementById('search-box');
    
    if (!searchBox.contains(event.target) && !suggestionsList.contains(event.target)) {
        suggestionsList.style.display = 'none';
    }
});