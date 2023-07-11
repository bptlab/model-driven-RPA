import path from 'path';
import fs from 'fs';
let filePath = '../Database/Error/error.json';

export const setAllErrors = async (req, res) => {
    try {
        const jsonArray = req.body;
        fs.writeFile(filePath, JSON.stringify(jsonArray), (err) => {
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