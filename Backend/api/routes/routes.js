import express from 'express'
import { errorHandling } from '../controllers/errorHandling.js';
import { runRobot } from '../controllers/runRobot.js';
import { getAllModels } from '../controllers/getAllModels.js';
import { setAllModels } from '../controllers/setAllModels.js';
import { updateModel } from '../controllers/updateModel.js';
import { getAllRobots } from '../controllers/getAllRobots.js';

const router = express.Router();

router.post('/run-robot', runRobot);
router.get('/all-robots', getAllRobots);
router.get('/all-models', getAllModels);
router.post('/all-models', setAllModels);
router.patch('/update-model', updateModel);
router.post('/error-handling', errorHandling);


export default router;




