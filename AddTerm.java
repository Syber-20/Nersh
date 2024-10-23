import java.io.*;
import java.nio.file.*;
import java.util.*;

public class AddTerm {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java AddTerm <TERM_NAME> <TERM_DESCRIPTION>");
            return;
        }

        String termName = args[0];
        String termDescription = args[1];
        String firstLetter = termName.substring(0, 1).toLowerCase();
        String termsDirectory = "terms/" + firstLetter + "/";
        String htmlFilePath = termsDirectory + termName.toLowerCase() + ".html";
        String jsonFilePath = termsDirectory + "terms.json";

        try {
            // Create terms directory if it doesn't exist
            Files.createDirectories(Paths.get(termsDirectory));

            // Create term HTML file with the pre-designed structure
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(htmlFilePath))) {
                writer.write("<!DOCTYPE html>\n");
                writer.write("<html lang=\"en\">\n<head>\n");
                writer.write("    <meta charset=\"UTF-8\">\n");
                writer.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
                writer.write("    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n");
                writer.write("    <title>" + termName + " - Definition</title>\n");
                writer.write("    <link rel=\"stylesheet\" href=\"../../styles.css\">\n"); // Link to existing CSS
                writer.write("</head>\n<body>\n");
                writer.write("    <div class=\"container\">\n"); // Container div
                writer.write("        <header>\n"); // Header
                writer.write("            <h1>" + termName + "</h1>\n");
                writer.write("        </header>\n");

                writer.write("        <div class=\"term-definition\">\n"); // Term definition section
                writer.write("            <h2>Definition</h2>\n"); // Title: Definition
                writer.write("            <p>" + termDescription + "</p>\n"); // The actual definition
                writer.write("        </div>\n");

                writer.write("        <footer>\n"); // Footer
                writer.write("            <p>Part of the Nersh Tech Terms Project</p>\n");
                writer.write("        </footer>\n");

                writer.write("    </div>\n</body>\n</html>");
            }

            // Update JSON file with the new term
            List<String> termsList = new ArrayList<>();
            if (new File(jsonFilePath).exists()) {
                // Read existing terms from the JSON file
                try (BufferedReader reader = new BufferedReader(new FileReader(jsonFilePath))) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        if (line.contains("\"")) { // Only add valid term entries
                            termsList.add(line.trim().replace(",", "").replace("\"", ""));
                        }
                    }
                }
            }

            // Add new term if not already present
            if (!termsList.contains(termName)) {
                termsList.add(termName);
                Collections.sort(termsList); // Sorting the terms alphabetically

                // Write updated terms to JSON file
                try (BufferedWriter jsonWriter = new BufferedWriter(new FileWriter(jsonFilePath))) {
                    jsonWriter.write("{\n    \"terms\": [\n");
                    for (int i = 0; i < termsList.size(); i++) {
                        jsonWriter.write("        \"" + termsList.get(i) + "\"");
                        if (i < termsList.size() - 1) jsonWriter.write(",");
                        jsonWriter.write("\n");
                    }
                    jsonWriter.write("    ]\n}");
                }
            }

            System.out.println("Term added successfully!");

        } catch (IOException e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }
}