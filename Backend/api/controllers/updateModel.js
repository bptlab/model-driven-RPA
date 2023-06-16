import path from 'path';
import fs from 'fs'
const folderPath = '../Database/UiModel';

export const updateModel = (req, res) => {
    try {
        const jsonUpdate = req.body;
        let jsonFile = fs.readFileSync(path.join(folderPath, jsonUpdate.application_id + ".json"), "utf-8");
        jsonFile = JSON.parse(jsonFile)
        jsonFile.pages.map((page) => {
            if (page.page_id == jsonUpdate.page_id) {
                page.ui_elements.map((el) => {
                    el.current_mode = jsonUpdate.current_mode
                    fs.writeFile(path.join(folderPath, jsonFile.application_name + ".json"), JSON.stringify(jsonFile), (err) => {
                        if (err) {
                            console.error('Error writing to model:', err);
                            return res.status(500).json({ error: 'Internal server error' });
                        }
                    })
                })
            }
        })
        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Error' });
    }
};