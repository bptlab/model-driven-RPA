import path from 'path';
import fs from 'fs'
const folderPath = '../database/uiModel';

/**
 * @swagger
 * /update-model:
 *     parameters:
 *       - name: locator
 *         in: path
 *         description: element with the updated current mode
 *         required: true
 *         content:
 *           application/json: 
 *             schema:
 *                 type: object
 *                 properties:
 *                   application_id:
 *                     type: string
 *                     example: Email
 *                   page_id:
 *                     type: string
 *                     example: 123
 *                   element_id:
 *                     type: string
 *                     example: Send
 *                   current_mode:
 *                     type: string
 *                     example: path
 *     patch:
 *       summary: updates the current mode of element in model
 *       operationId: update-model
 *       responses:
 *         200:
 *           description: OK
 *         500:
 *           description: Error
 */
export const updateModel = (req, res) => {
    try {
        const jsonUpdate = req.body;
        let jsonFile = fs.readFileSync(path.join(folderPath, jsonUpdate.application_id + ".json"), "utf-8");
        jsonFile = JSON.parse(jsonFile)
        jsonFile.pages.map((page) => {
            if (page.page_id == jsonUpdate.page_id) {
                page.ui_elements.map((el) => {
                    if (el.element_id == jsonUpdate.element_id) {
                        el.current_mode = jsonUpdate.current_mode
                        fs.writeFile(path.join(folderPath, jsonFile.application_name + ".json"), JSON.stringify(jsonFile), (err) => {
                            if (err) {
                                console.error('Error writing to model:', err);
                                return res.status(500).json({ error: 'Internal server error' });
                            }
                        })
                    }
                })
            }
        })
        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Error' });
    }
};