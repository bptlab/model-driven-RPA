import path from 'path';
import fs from 'fs'
const folderPath = '../Database/UiModel';

export const setAllModels = (req, res) => {
    try {
        const jsonArray = req.body;
        jsonArray.map((model) => {
            fs.writeFile(path.join(folderPath, model.application_name + ".json"), JSON.stringify(model), (err) => {
                if (err) {
                    console.error('Error writing to model:', err);
                    return res.status(500).json({ error: 'Internal server error' });
                }
            })
        })
        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Error' });
    }
};