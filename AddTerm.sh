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
    <style>
        body {
            background-color: #0a0e17;
            color: #e8eaed;
            font-family: 'Courier New', monospace;
            margin: 0;
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0e17 0%, #1a1f35 100%);
            background-attachment: fixed;
            position: relative;
        }

        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232e5bad' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            opacity: 0.8;
            z-index: -1;
        }

        .term-content {
            font-family: 'Courier New', monospace;
            max-width: 800px;
            margin: 80px auto 30px;
            padding: 30px;
            background: rgba(10, 14, 23, 0.8);
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 191, 255, 0.1);
            border: 1px solid rgba(0, 191, 255, 0.2);
            line-height: 1.6;
        }

        .term-content h1 {
            color: #00bfff;
            border-bottom: 1px solid rgba(0, 191, 255, 0.3);
            padding-bottom: 10px;
            text-shadow: 0 0 10px rgba(0, 191, 255, 0.3);
            font-size: 28px;
        }

        .term-content p {
            color: #e8eaed;
            text-align: justify;
        }

        .term-content code {
            background: rgba(0, 0, 0, 0.3);
            padding: 2px 5px;
            border-radius: 3px;
            color: #00bfff;
            font-family: 'Courier New', monospace;
            border: 1px solid rgba(0, 191, 255, 0.2);
        }

        @media (max-width: 768px) {
            .term-content {
                padding: 20px;
                margin: 70px auto 20px;
            }
        }

        @media (max-width: 480px) {
            .term-content {
                padding: 15px;
                margin: 60px auto 15px;
            }
            
            .term-content h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="term-content">
        <h1>$term</h1>
        <p>Description of $term goes here.</p>
    </div>
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
formatted_term=$(echo "$term" | sed 's/ /_/g')
html_file_path="${terms_directory}${formatted_term}.html"

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

# Execute the commit.sh to request for commit action
bash commit.sh
