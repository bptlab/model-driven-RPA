import path from 'path';
import fs from 'fs';
let folderPath = '../Database/UiModel';

/**
 * @swagger
 * /all-models:
 *     get:
 *       summary: Retreives from the database all models to show them on the frontend
 *       operationId: get-all-models
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json: 
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                       application_id:
 *                         type: string
 *                         example: 1
 *                       application_name:
 *                         type: string
 *                         example: Outlook
 *                       pages:
 *                         type: array
 *                         items:
 *                           type: object 
 *         500:
 *           description: Error
 */

export const getAllModels = async (req, res) => {
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