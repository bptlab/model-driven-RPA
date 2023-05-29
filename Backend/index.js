const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.post('/run-robot', (req, res) => {
 
  const jsonStr = JSON.stringify(req.body); 
  fs.writeFile(path.join(__dirname, 'test.json'), jsonStr, (err) => {
    if (err) {
      console.error('Error writing to test.json:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }


    const robotCommand = '/usr/local/bin/robot';
    const robotFilePath = '/Users/alihussainkazmi/Desktop/Model_Driven_RPA/my-rsb-robot';

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
});


app.listen(8000, () => {
  console.log('Server started on port 8000');
});
