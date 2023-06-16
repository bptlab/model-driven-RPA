import path from 'path';
import fs from 'fs'

export const runRobot = (req, res) => {
    const jsonStr = JSON.stringify(req.body);
    fs.writeFile(path.join(__dirname, 'test.json'), jsonStr, (err) => {
        if (err) {
            console.error('Error writing to test.json:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        const robotFilePath = '../Database/Robot';

        exec(`robot ${robotFilePath}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Robot Framework: ${error.message}`);
                return res.status(500).json({ error: 'Internal server error' });
            }
            if (stderr) {
                console.error(`Robot Framework execution error: ${stderr}`);
                return res.status(400).json({ error: 'Bad request' });
            }
            console.log(`Robot Framework execution successful:\n${stdout}`);
            return res.status(200).json({ message: 'Robot Framework execution successful' });
        });
    });
};