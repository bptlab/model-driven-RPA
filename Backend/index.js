const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const functionRouter = require("./api/routes/function.routes")


app.use(cors());
app.use(bodyParser.json());

app.use('/', functionRouter)


app.listen(8000, () => {
  console.log('Server started on port 8000');
});
