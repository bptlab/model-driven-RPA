import path from 'path';
import fs from 'fs';
let folderPath = '../Database/Robot';

export const getAllRobots = async (req, res) => {
    try {  
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
        console.log(robots)
        res.send(robots);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Error' });
    }
};