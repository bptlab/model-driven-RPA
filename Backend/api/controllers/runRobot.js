import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
let folderPath = '../Database/Error';

// req.body looks like this: {"robotName": "exampleName"}
export const runRobot = (req, res) => {
    const robot_name = req.body;

    const robotFilePath = './Robot';
    
    const command = `robot  ${robotFilePath}`;

    try{
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
        

    }catch(error){
        return res.status(500).json({ error: 'Internal server error' });
    }

   
};