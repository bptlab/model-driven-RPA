import path from 'path';
import fs from 'fs'
let robotsPath = '../Database/Robot/robotLocation.json'

export const getRobotsFolderPath = (req, res) => {
    try {  
        let robotLocation = JSON.parse(fs.readFileSync(robotsPath, 'utf8'));
        console.log(robotLocation)
        res.send(robotLocation);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Error' });
    }
};