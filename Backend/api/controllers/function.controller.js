exports.runRobot = (req, res) => {
    const jsonStr = JSON.stringify(req.body);
    fs.writeFile(path.join(__dirname, 'test.json'), jsonStr, (err) => {
        if (err) {
            console.error('Error writing to test.json:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }


        const robotCommand = '/usr/local/bin/robot';
        const robotFilePath = '/Users/alihussainkazmi/Desktop/my-rsb-robot';

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

exports.receiveUiModel = async (req, res) => {
    uiModel = req.body
    try {
        //Save model
        return res.status(200).json({ message: "UI Model data saved" })
    } catch (error) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Internal server error' });
    }



}

exports.getAllAvailableModels = async (req, res) => {
    try {
        const models = "get models";
        return models;
    } catch (err) {
        console.error(`Error: ${error.message}`)
        return res.status(500).json({ error: 'Internal server error' });
    }
}

exports.updateModel = (req, res) => {
    const { currentMode } = req.body;

    // currentMode ? 

}