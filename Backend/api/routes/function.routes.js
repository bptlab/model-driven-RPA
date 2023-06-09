const express = require('express');
const functionController = require("../controllers/function.controller")


const router = express.Router();

router.post('/run-robot', functionController.runRobot);
router.post('/receive-ui-model', functionController.receiveUiModel);
router.get('/get-models', functionController.getAllAvailableModels);
router.patch('/update-model', functionController.updateModel);


module.exports = router;