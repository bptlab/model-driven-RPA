import express from 'express'
import { errorHandling } from '../controllers/errorHanlding.js';
import { runRobot } from '../controllers/runRobot.js';
import { getModels } from '../controllers/getModels.js';
import { setAllModels } from '../controllers/setAllModels.js';
import { updateModel } from '../controllers/updateModel.js';
import { getAllRobots } from '../controllers/getAllRobots.js';


const router = express.Router();

router.post('/run-robot', runRobot);
router.get('/get-all-robots', getAllRobots);
router.get('/get-models', getModels);
router.post('/set-all-models', setAllModels);
router.patch('/update-model', updateModel);
router.post('/error-handling', errorHandling);


export default router;




