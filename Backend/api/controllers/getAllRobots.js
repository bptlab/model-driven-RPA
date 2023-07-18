import path from 'path';
import fs from 'fs';
let robotsPath = '../database/robot/robotLocation.json'


/**
 * @swagger
 * /all-robots:
 *     get:
 *       summary: Retreives from the database all robots to show them on the frontend
 *       operationId: get-all-robots
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
 *                       robotName:
 *                         type: string
 *                         example: payroll
 *         500:
 *           description: Error
 */

export const getAllRobots = async (req, res) => {    
    try {
        let rawdata = fs.readFileSync('../database/robot/robotLocation.json');
        let robotLocation = JSON.parse(rawdata);
        let folderPath = robotLocation.robotsPath
        let robots = [];
        fs.readdirSync(folderPath).forEach((file) => {
            let filePath = path.join(folderPath, "/", file);
            let fileExtension = path.extname(filePath);
            if (fileExtension === '.robot') {
                try {
                    let robotName = path.parse(filePath).name
                    let robotObject = {
                        robotName: robotName
                    }
                    let jsonRobot = JSON.stringify(robotObject)
                    robots.push(jsonRobot);
                } catch (error) {
                    console.error(`Error parsing JSON file: ${file}`);
                    console.error(error);
                }
            }
        });
        res.send(robots);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Error' });
    }
};