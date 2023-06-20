import path from 'path';
import fs from 'fs';
let folderPath = '../Database/UiModel';

export const getModels = async (req, res) => {
    try {  
        let jsonFiles = [];
        fs.readdirSync(folderPath).forEach((file) => {
            let filePath = path.join(folderPath, "/", file);
            let fileExtension = path.extname(filePath);
            if (fileExtension === '.json') {
                try {
                    let jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                    jsonFiles.push(jsonData);
                } catch (error) {
                    console.error(`Error parsing JSON file: ${file}`);
                    console.error(error);
                }
            }
        });
        res.send(jsonFiles);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Error' });
    }
};