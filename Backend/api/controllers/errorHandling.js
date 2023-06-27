import path from 'path';
import fs from 'fs'
let folderPath = '../Database/Error';

/**
 * @swagger
 * /error-handling:
 *     parameters:
 *       - name: locator
 *         in: path
 *         description: locator that returns the error
 *         required: true
 *         content:
 *           application/json: 
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *               properties:
 *                   model_name:
 *                     type: string
 *                   page_name:
 *                     type: string
 *                   element_name:
 *                     type: string
 *                   locator:
 *                     type: string
 *     post:
 *       summary: Get the locator and writes in error.json all the possible reasons of failure.
 *       operationId: error-handling
 *       responses:
 *         200:
 *           description: error.json file created successfully
 *         500:
 *           description: Error writing to error.json
 */
const POSSIBLE_REASONS = [
    "Color of element was changed", //0
    "Label of element was changed",//1
    "Position of element was changed",//2
    "Font of element was changed",//3
    "Image was changed",//4
    "Layout was changed",//5
    "Content of element was changed",//6
    "Styling of element was changed",//7
    "Language of element was changed",//8
    "Visibility of element was changed",//9
    "Type of element was changed",//10
    "Navigation was changed",//11
    "Input validation of element was changed",//12
    "Data format was changed",//13
    "New fields or elements were added",//14
    "Some fields or elements were removed",//15
    "Browser compatibility was changed",//16
    "Responsive design was changed"//17
]

export const errorHandling = (req, res) => {
    const jsonArray = req.body;
    jsonArray.map((locator) => {
        let reasons = [];
        switch (locator.locator) {
            case "text": reasons = [1, 3, 6, 7, 8].map(index => POSSIBLE_REASONS[index]); break;
            case "tag": reasons = [10, 14, 15].map(index => POSSIBLE_REASONS[index]); break;
            case "path": reasons = [0, 1, 2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17].map(index => POSSIBLE_REASONS[index]); break;
            case "point": reasons = [2].map(index => POSSIBLE_REASONS[index]); break;
            case "region": reasons = [0, 2, 5, 17].map(index => POSSIBLE_REASONS[index]); break;
            case "image": reasons = [2, 4, 5].map(index => POSSIBLE_REASONS[index]); break;
            case "keyboard_shortcut": reasons = [11].map(index => POSSIBLE_REASONS[index]); break;
            default: reasons = [0, 1, 2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17].map(index => POSSIBLE_REASONS[index]); break;
        }
        locator.reasons_for_failure = reasons;
    })
    const filePath = path.join(folderPath, "/", "error.json")
    fs.writeFile(filePath, JSON.stringify(jsonArray), (err) => {
        if (err) {
            console.error('Error writing to error.json:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        console.log('error.json file created successfully');
        return res.status(200).json({ message: 'error.json file created successfully' });
    });
};
