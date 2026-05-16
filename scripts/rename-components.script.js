import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the absolute path to the /src/components/ui directory relative to this script file.
const __filename = fileURLToPath(import.meta.url),
    __dirname = path.join(path.dirname(__filename), "../src/components/ui");

fs.readdir(__dirname, (error, files) => {
    // If an error occurs while reading the directory, exit the function early.
    if (error) return;

    // Iterate over each file in the /src/components/ui directory to process renaming if needed
    files.forEach((file) => {
        if (!file.endsWith(".ui.tsx")) {
            const oldpath = path.join(__dirname, file);
            const newpath = path.join(__dirname, file.replace(".tsx", ".ui.tsx"));
            fs.rename(oldpath, newpath, (error) => error);
        }
    });
});
