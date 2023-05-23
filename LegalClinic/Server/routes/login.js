import express from "express";
const loginRouter=express.Router();

import { loginStudents } from "../controllers/login.js";
import {loginLawyers} from '../controllers/login.js'

loginRouter.post("/students",loginStudents)

loginRouter.post("/lawyers",loginLawyers)

export default loginRouter