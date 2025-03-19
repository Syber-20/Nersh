import java.io.*;
import java.nio.file.*;
import java.util.*;

public class AddTerm {
    public static void main(String[] args) {
        if (args.length < 1) {
            System.out.println("Usage: java AddTerm <TERM_NAME>");
            return;
        }

        String originalTerm = args[0].trim(); // Keep original term for JSON
        String formattedTerm = originalTerm.replace(" ", "_"); // Format term for file name
        String firstLetter = formattedTerm.substring(0, 1).toLowerCase(); // Get first letter
        String termsDirectory = "terms/" + firstLetter + "/"; // Directory path
        String jsonFilePath = termsDirectory + "terms.json"; // JSON file path

        try {
            // Create terms directory if it doesn't exist
            Files.createDirectories(Paths.get(termsDirectory));

            // Read and update the JSON file
            Set<String> termsSet = new HashSet<>(); // Use Set to prevent duplicates
            if (new File(jsonFilePath).exists()) {
                try (BufferedReader reader = new BufferedReader(new FileReader(jsonFilePath))) {
                    String line;
                    StringBuilder jsonContent = new StringBuilder();
                    while ((line = reader.readLine()) != null) {
                        jsonContent.append(line);
                    }
                    String content = jsonContent.toString();
                    int startIndex = content.indexOf("[") + 1;
                    int endIndex = content.indexOf("]");
                    String termsString = content.substring(startIndex, endIndex).trim();

                    if (!termsString.isEmpty()) {
                        String[] existingTerms = termsString.replace("\"", "").split(",");
                        for (String term : existingTerms) {
                            termsSet.add(term.trim()); // Add trimmed terms to the set
                        }
                    }
                }
            }

            // Add new term to the set if not already present
            termsSet.add(originalTerm); // Store original term in JSON for display purposes

            // Convert Set to a sorted list
            List<String> termsList = new ArrayList<>(termsSet);
            Collections.sort(termsList, String.CASE_INSENSITIVE_ORDER); // Sort for consistency, case-insensitive

            // Write updated terms to JSON file
            try (BufferedWriter jsonWriter = new BufferedWriter(new FileWriter(jsonFilePath))) {
                jsonWriter.write("{\n  \"terms\": [\n");
                for (int i = 0; i < termsList.size(); i++) {
                    jsonWriter.write("    \"" + termsList.get(i) + "\"");
                    if (i < termsList.size() - 1) jsonWriter.write(",");
                    jsonWriter.write("\n");
                }
                jsonWriter.write("  ]\n}");
            }

            System.out.println("New term added successfully to JSON!");

        } catch (IOException e) {
            System.err.println("An error occurred while processing files: " + e.getMessage());
        }
    }
}