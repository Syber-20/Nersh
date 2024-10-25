import java.io.*;
import java.nio.file.*;
import java.util.*;

public class AddTerm {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java AddTerm <TERM_NAME> <TERM_DESCRIPTION>");
            return;
        }

        // Replace spaces with underscores in the term name
        String termName = args[0].replace(" ", "_");
        String termDescription = args[1];
        String firstLetter = termName.substring(0, 1).toLowerCase();
        String termsDirectory = "terms/" + firstLetter + "/";
        String markdownFilePath = termsDirectory + termName.toLowerCase() + ".html";
        String jsonFilePath = termsDirectory + "terms.json";

        try {
            // Create terms directory if it doesn't exist
            Files.createDirectories(Paths.get(termsDirectory));

            // Create the Markdown (HTML) file for the term
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(markdownFilePath))) {
                writer.write("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n");
                writer.write("<meta charset=\"UTF-8\">\n");
                writer.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
                writer.write("<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n");
                writer.write("<title>" + termName + "</title>\n");
                writer.write("<link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n");
                writer.write("<body>\n<div class=\"term-page\">\n");
                writer.write("<header><h1>" + termName + "</h1></header>\n");
                writer.write("<section class=\"term-definition\">\n");
                writer.write("<h2>Definition</h2>\n");
                writer.write("<p>" + termDescription + "</p>\n</section>\n");
                writer.write("<footer><p>&copy; 2024 Nersh Tech Dictionary</p></footer>\n");
                writer.write("</div>\n</body>\n</html>");
            }

            // Read and update the JSON file
            List<String> termsList = new ArrayList<>();
            if (new File(jsonFilePath).exists()) {
                // Read the existing terms from the JSON file
                try (BufferedReader reader = new BufferedReader(new FileReader(jsonFilePath))) {
                    String line;
                    StringBuilder jsonContent = new StringBuilder();
                    while ((line = reader.readLine()) != null) {
                        jsonContent.append(line);
                    }

                    // Parse the JSON content
                    String content = jsonContent.toString();
                    int startIndex = content.indexOf("[") + 1;
                    int endIndex = content.indexOf("]");
                    String termsString = content.substring(startIndex, endIndex).trim();
                    
                    if (!termsString.isEmpty()) {
                        String[] existingTerms = termsString.replace("\"", "").split(",");
                        termsList.addAll(Arrays.asList(existingTerms));
                    }
                }
            }

            // Add new term to the list if not already present
            if (!termsList.contains(termName)) {
                termsList.add(termName);
            }

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

            System.out.println("Term added successfully!");

        } catch (IOException e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }
}
