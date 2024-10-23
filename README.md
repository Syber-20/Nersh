
# Nersh

Nersh is a search engine designed for programmers and tech enthusiasts. It allows users to search for programming-related terms and view detailed definitions and explanations. The project is structured in a way that contributors can easily add new terms and corresponding HTML files, all while maintaining an organized and accessible search functionality.

## Features
- **Dynamic Search Suggestions**: As users type in the search box, suggestions are displayed based on matching terms.
- **Pre-generated HTML for Terms**: Each term has its own pre-generated HTML page, following a template.
- **JSON-based Term Storage**: Terms are stored in a JSON file for easy retrieval and dynamic search functionality.
- **Nerdy Button**: An "I'm Feeling Nerdy" button that takes users to a random tech-related term.

## Project Structure
```
/terms
  /a
    - Algorithms.html
    - API.html
    - Asynchronous_Programming.html
    - terms.json
  /b
    - Binary_Search.html
    - terms.json
/styles.css
/index.html
/script.js
```
- **/terms**: Contains directories for each letter of the alphabet. Each directory stores the HTML pages for terms starting with that letter as well as a `terms.json` file that lists all terms.
- **/styles.css**: The main CSS file for styling the entire project.
- **/index.html**: The homepage with the search functionality.
- **/script.js**: Contains JavaScript for dynamic search suggestions and term navigation.

## How to Add New Terms
To add a new term to the search engine, follow these steps:
1. Create a new HTML file for the term inside the appropriate `/terms/<letter>` directory. Follow the template structure used in the existing HTML files.
2. Update the corresponding `terms.json` file in the same directory to include the new term.
3. Use the provided Java program to automate the process of adding terms and creating the required HTML files.

### Automated Term Addition (Java Program)
We provide a Java program that can automate the addition of new terms. The program:
- Creates a new HTML file for the term in the appropriate directory.
- Updates the `terms.json` file with the new term.

#### Usage:
```bash
java AddTerm <TERM_NAME> <TERM_DESCRIPTION>
```

This command will:
- Create a new HTML file for `<TERM_NAME>` in the appropriate folder.
- Append the term to the `terms.json` file.

## How to Contribute
1. Fork this repository.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Implement your changes and commit them to your branch.
5. Push your changes to your forked repository.
6. Create a pull request to the main repository.

### Contribution Guidelines:
- Follow the existing structure and style conventions in both HTML and CSS.
- Ensure that all terms added to the JSON file are unique and properly formatted.

## License
This project is open-source under the MIT License.
