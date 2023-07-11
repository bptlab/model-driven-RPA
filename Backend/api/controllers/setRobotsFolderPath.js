import path from 'path';
import fs from 'fs'
const folderPath = '../Database/UiModel';

export const setRobotsFolderPath = (req, res) => {
    try {
        const pathJSON = req.body;
        const pathObject = JSON.stringify(pathJSON)
        fs.writeFile('../Database/Robot/robotLocation.json', pathObject, (err) => {
            if (err) {
                console.error('Error writing to model:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
        })
        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Error' });
    }
};