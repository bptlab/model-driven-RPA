import express from 'express'
import { errorHandling } from '../controllers/errorHanlding.js';
import { runRobot } from '../controllers/runRobot.js';
import { getModels } from '../controllers/getModels.js';


const router = express.Router();

router.post('/run-robot', runRobot);
router.get('/get-models', getModels);
/* router.get('/set-all-models', functionController.getAllAvailableModels);
router.patch('/update-model', functionController.updateModel); */
router.post('/error-handling', errorHandling);


export default router;




