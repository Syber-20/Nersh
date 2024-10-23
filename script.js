document.querySelector("#search-input").addEventListener("input", function (event) {
  const input = event.target.value.trim();

  if (input.length > 0) {
      const firstLetter = input.charAt(0).toUpperCase();
      const filePath = `./terms/${firstLetter}.json`;

      // Fetch the terms from the corresponding JSON file
      fetch(filePath)
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  throw new Error('JSON file not found');
              }
          })
          .then(data => {
              const searchTerms = data.terms;
              displaySuggestions(searchTerms, input);
          })
          .catch(error => {
              console.error("Error fetching the terms: ", error);
          });
  } else {
      clearSuggestions();
  }
});

function displaySuggestions(terms, input) {
  const suggestions = terms.filter(term => term.toLowerCase().startsWith(input.toLowerCase()));
  const suggestionsContainer = document.querySelector("#suggestions-container");
  suggestionsContainer.innerHTML = "";

  if (suggestions.length > 0) {
      suggestionsContainer.style.display = "block";
      suggestions.forEach(term => {
          const suggestionItem = document.createElement("div");
          suggestionItem.classList.add("suggestion-item");
          suggestionItem.textContent = term;

          // Add click event to redirect to term.html
          suggestionItem.addEventListener("click", function () {
              window.location.href = `terms/${term}.html`;
          });

          suggestionsContainer.appendChild(suggestionItem);
      });
  } else {
      suggestionsContainer.style.display = "none";
  }
}

function clearSuggestions() {
  const suggestionsContainer = document.querySelector("#suggestions-container");
  suggestionsContainer.innerHTML = "";
  suggestionsContainer.style.display = "none";
}