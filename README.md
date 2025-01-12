# Nersh

Nersh is a search engine designed for programmers and tech enthusiasts. It allows users to search for programming-related terms and view detailed definitions and explanations. The project is structured in a way that contributors can easily add new terms and corresponding HTML files, all while maintaining an organized and accessible search functionality.

## Features💫
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
- **/addterm.sh**: A shell script to automate the process of adding new terms and creating HTML files.
- **/AddTerm.java**: A Java program to update the JSON file with new terms.

---

## How to Add New Terms

To add a new term to the search engine, you can use the provided **shell script** (`addterm.sh`) or the **Java program** (`AddTerm.java`). Both tools automate the process of adding terms and creating the required HTML files.

### **Using the Shell Script (`addterm.sh`)**
The shell script provides an interactive way to add new terms and create HTML files. It also allows you to edit the HTML file using your preferred text editor.

#### Steps:
1. Run the script:
   ```bash
   bash addterm.sh

~Enter the term name when prompted.

    Choose whether to edit the HTML file using nano, vim, or skip editing.
    The script will:
        - Create the HTML file in the appropriate directory.
        - Update the terms.json file with the new term.
        - Optionally commit the changes to Git.

Example:
```
        $ bash addterm.sh
Enter the term: Machine Learning
New term added successfully to JSON!
Do you want to edit the HTML file? (nano/vim/none): nano
HTML file created at terms/m/Machine_Learning.html
Do you want to commit the new term added? (yes/no): yes
Changes committed.
Done!
```
## Using the Java Program `(AddTerm.java)`

The Java program updates the JSON file with new terms, ensuring no duplicates and maintaining alphabetical order.
Steps:

    1. Compile the Java program:
    ```
       javac AddTerm.java
   ```

   2. Run the program with the term name as an argument:
  ```
       java AddTerm <TERM_NAME>
  ```
  3. The program will:
    Update the `terms.json` file in the appropriate directory.
    Print a success message if the term is added.

 Example:
    ```
    $ java AddTerm "Artificial Intelligence"
    New term added successfully to JSON!
   ```
## How to Contribute
    Fork this repository.
    Clone your forked repository to your local machine.
    Create a new branch for your feature or bug fix.
    Implement your changes and commit them to your branch.
    Push your changes to your forked repository.
    Create a pull request to the main repository.

## Contribution Guidelines:
    Follow the existing structure and style conventions in both HTML and CSS.
    Ensure that all terms added to the JSON file are unique and properly formatted.

    Use the provided tools (`addterm.sh` or `AddTerm.java`) to add new terms.
## License
This project is open-source under the MIT License.
