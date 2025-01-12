#!/bin/bash

# Function to create default HTML content
create_default_html() {
    local term=$1
    local file_path=$2
    cat <<EOF > "$file_path"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$term</title>
</head>
<body>
    <h1>$term</h1>
    <p>Description of $term goes here.</p>
</body>
</html>
EOF
}

# Ask user for term input
read -p "Enter the term: " term

# Run Java program to update JSON
java AddTerm "$term"

# Determine directory and file path
first_letter=$(echo "${term:0:1}" | tr '[:upper:]' '[:lower:]')
terms_directory="terms/$first_letter/"
html_file_path="${terms_directory}${term}.html"

# Create directory if it doesn't exist
mkdir -p "$terms_directory"

# Ask user if they want to use an editor
read -p "Do you want to edit the HTML file? (nano/vim/none): " editor_choice

case $editor_choice in
    nano|vim)
        # Create a temporary file for editing
        temp_file=$(mktemp)
        create_default_html "$term" "$temp_file"
        $editor_choice "$temp_file"
        # Move the edited file to the final location
        mv "$temp_file" "$html_file_path"
        ;;
    none|*)
        # Create default HTML file
        create_default_html "$term" "$html_file_path"
        ;;
esac

echo "HTML file created at $html_file_path"
echo "Done!"