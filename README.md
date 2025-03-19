# Nersh

Nersh is a search engine designed for programmers and tech enthusiasts. It allows users to search for programming-related terms and view detailed definitions and explanations. The project is structured in a way that contributors can easily add new terms and corresponding HTML files, all while maintaining an organized and accessible search functionality.

## Features 💫
- **Dark Theme UI**: Modern dark gradient interface with geometric pattern overlay for a true nerdy experience
- **Dynamic Search**: Real-time suggestions as users type with enhanced error handling
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Pre-generated HTML for Terms**: Each term has its own styled HTML page with consistent theming
- **JSON-based Term Storage**: Terms are stored in JSON files for easy retrieval and search functionality
- **"I'm Feeling Nerdy" Button**: Takes users to a random tech-related term

## Project Structure
```
/terms
  /a
    - a_term.html
  /b
    - b_term.html
/styles
  - styles.css
/scripts
  - script.js
/index.html
/AddTerm.sh
/AddTerm.java
```
- **/terms**: Contains directories for each letter of the alphabet with HTML pages and JSON files
- **/styles/styles.css**: The main CSS file for styling the entire project
- **/scripts/script.js**: Contains JavaScript for search functionality and term navigation
- **/index.html**: The homepage with the search functionality
- **/AddTerm.sh**: A shell script to automate the process of adding new terms with built-in styling
- **/AddTerm.java**: A Java program to update the JSON file with new terms

---

## How to Add New Terms

To add a new term to the search engine, you can use the provided **shell script** (`AddTerm.sh`) or the **Java program** (`AddTerm.java`). Both tools automate the process of adding terms and creating the required HTML files.

### **Using the Shell Script (`AddTerm.sh`)**
The shell script provides an interactive way to add new terms and create HTML files with built-in styling. It also allows you to edit the HTML file using your preferred text editor.

#### Steps:
1. Run the script:
   ```bash
   bash AddTerm.sh
   ```
2. Enter the term name when prompted.
3. Choose whether to edit the HTML file using nano, vim, or skip editing.
4. The script will:
   - Create a styled HTML file in the appropriate directory
   - Update the terms.json file with the new term
   - Optionally commit the changes to Git

Example:
```
$ bash AddTerm.sh
Enter the term: Machine Learning
New term added successfully to JSON!
Do you want to edit the HTML file? (nano/vim/none): nano
HTML file created at terms/m/Machine_Learning.html
Do you want to commit the new term added? (yes/no): yes
Changes committed.
Done!
```

### **Using the Java Program (`AddTerm.java`)**

The Java program updates the JSON file with new terms, ensuring no duplicates and maintaining alphabetical order.

#### Steps:
1. Compile the Java program:
   ```
   javac AddTerm.java
   ```

2. Run the program with the term name as an argument:
   ```
   java AddTerm <TERM_NAME>
   ```

3. The program will:
   - Update the `terms.json` file in the appropriate directory
   - Print a success message if the term is added

Example:
```
$ java AddTerm "Artificial Intelligence"
New term added successfully to JSON!
```

## Search Functionality

The search function provides real-time suggestions as you type:
1. Enter a term in the search box
2. Select from the dropdown of suggestions or press Enter
3. If the term exists, you'll be redirected to the term's page
4. Use the "I'm Feeling Nerdy" button to discover random tech terms

## How to Contribute
1. Fork this repository
2. Clone your forked repository to your local machine
3. Create a new branch for your feature or bug fix
4. Implement your changes and commit them to your branch
5. Push your changes to your forked repository
6. Create a pull request to the main repository

### Contribution Guidelines:
- Follow the existing structure and style conventions
- Ensure that all terms added to the JSON file are unique and properly formatted
- Use the provided tools (`AddTerm.sh` or `AddTerm.java`) to add new terms
- Test your changes locally before submitting a pull request

## License
This project is open-source under the MIT License.
