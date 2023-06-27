import path from 'path';
import fs from 'fs'
import { exec } from 'child_process';

// req.body looks like this: {"robotName": "exampleName"}
export const runRobot = (req, res) => {
    const robot_name = req.body;

    const robotFilePath = '/Users/alihussainkazmi/Desktop/Model_Driven_RPA/Backend/Robot';
    const command = `robot  ${robotFilePath}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Robot Framework: ${error.message}`);
            return res.statuss(500).json({ error: 'Internal server error' });
        }
        if (stderr) {
            console.error(`Robot Framework execution error: ${stderr}`);
            return res.status(400).json({ error: 'Bad request' });
        }
        console.log(`Robot Framework execution successful:\n${stdout}`);
        return res.status(200).json({ message: 'Robot Framework execution successful' });
    });
};