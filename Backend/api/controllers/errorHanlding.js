
import path from 'path';
import fs from 'fs'



export const errorHandling = (req, res) => {
    const jsonStr = JSON.stringify(req.body);
    const filePath = path.join(new URL('../../../Database/Error/error.json', import.meta.url).pathname);


    fs.writeFile(filePath, jsonStr, (err) => {
        if (err) {
            console.error('Error writing to error.json:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        console.log('error.json file created successfully');
        return res.status(200).json({ message: 'error.json file created successfully' });
    });
};




