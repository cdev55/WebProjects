import  express from "express";
const router=express.Router();
import {refrenceChecker} from '../controllers/refrence-checker.js'

router.post('/',refrenceChecker)

export default router;

