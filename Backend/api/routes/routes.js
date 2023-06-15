

import express from 'express'
import { errorHandling } from '../controllers/errorHanlding.js';
import { runRobot } from '../controllers/runRobot.js';


const router = express.Router();

/* router.post('/run-robot', runRobot);
router.post('/receive-ui-model', functionController.receiveUiModel);
router.get('/get-models', functionController.getAllAvailableModels);
router.patch('/update-model', functionController.updateModel); */
router.post('/error-handling', errorHandling);


export default router;




