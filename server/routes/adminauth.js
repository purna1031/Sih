import express from 'express';
const router = express.Router();
import {loginAdmin} from '../ctrl/adminauth';
router.post('/login-admin',loginAdmin);
export default router;
