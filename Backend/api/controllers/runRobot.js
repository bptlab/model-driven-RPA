import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
let folderPath = '../Database/Error';

/**
 * @swagger
 * /run-robot:
 *     parameters:
 *       - name: robot name
 *         in: path
 *         description: name of the robot
 *         required: true
 *         content:
 *           application/json: 
 *             schema:
 *               type: object
 *               properties:
 *                 robotName:
 *                   type: string
 *                   example: exampleName
 *     post:
 *       summary: Runs the robot from the list of the robots in database
 *       operationId: run-robot
 *       responses:
 *         200:
 *           description: OK
 *         500:
 *           description: Internal server error
 */
// req.body looks like this: {"robotName": "exampleName"}
export const runRobot = (req, res) => {
    const robot = req.body;
    let rawdata = fs.readFileSync('../Database/Robot/robotLocation.json');
    let robotLocation = JSON.parse(rawdata);
    let folderPath = robotLocation.robotsPath

    const robotFilePath = `"${folderPath}/${robot.robotName}.robot"`;

    console.log(robotFilePath)
    
    const command = `robot  ${robotFilePath}`;

    try {
        const childProcess = exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Robot Framework: ${error.message}`);
                return res.status(500).json({ error: 'Internal server error' });
            }
            // if (stderr) {
            //     console.error(`Robot Framework execution error: ${stderr}`);
            //     return res.status(400).json({ error: 'Bad request' });
            // }

        });
        childProcess.on('exit', (code) => {
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
            return res.status(200).json(currentErrors);
        });


    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }


};