import path from 'path';
import fs from 'fs';
let folderPath = '../database/error';

export const getAllErrors = async (req, res) => {
    try {  
        let currentErrors;
        fs.readdirSync(folderPath).forEach((file) => {
            let filePath = path.join(folderPath, "/", file);
            let fileExtension = path.extname(filePath);
            if (fileExtension === '.json') {
                try {
                    let errors = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                    currentErrors = errors;
                } catch (error) {
                    console.error(`Error parsing JSON file: ${file}`);
                    console.error(error);
                }
            }
        });
        res.send(currentErrors);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Error' });
    }
};