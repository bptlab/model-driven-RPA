import express from 'express'

const registerRouter=express.Router();

import { postStudents } from '../controllers/register.js';
import {postLawyers} from '../controllers/register.js'

registerRouter.post("/students",postStudents)
registerRouter.post("/lawyers",postLawyers)

export default registerRouter;