import path from 'path';
import fs from 'fs'
const folderPath = '../Database/UiModel';


/**
 * @swagger
 * /set-all-models:
 *     parameters:
 *       - name: locator
 *         in: path
 *         description: models that we need to save in array of object
 *         required: true
 *         content:
 *           application/json: 
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
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
 *     post:
 *       summary: Gets all models from frontend and saves them to database
 *       operationId: set-all-models
 *       responses:
 *         200:
 *           description: OK
 *         500:
 *           description: Error
 */
export const setAllModels = (req, res) => {
    try {
        const jsonArray = req.body;
        jsonArray.map((model) => {
            fs.writeFile(path.join(folderPath, model.application_name + ".json"), JSON.stringify(model), (err) => {
                if (err) {
                    console.error('Error writing to model:', err);
                    return res.status(500).json({ error: 'Internal server error' });
                }
            })
        })
        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Error' });
    }
};