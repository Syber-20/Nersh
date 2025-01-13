# Ask user if they want to commit the changes
read -p "Do you want to commit the new term added? (yes/no): " commit_choice

if [[ "$commit_choice" == "yes" ]]; then
     # Request for term name again
     read -p "Enter term again: " term
    # Stage all changes
    git add .

    # Commit with a meaningful message
    commit_message="Add term: $term"
    git commit -m "$commit_message" -m "Added new term '$term' and updated related files."
    echo "Changes committed."
else
    echo "Changes not committed."
fi

echo "Done!"