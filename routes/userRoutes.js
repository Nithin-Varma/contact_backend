import express from 'express'
import { Router } from 'express' 
import { currentUser, loginUser, registerUser } from '../controllers/userController.js';
import { validateToken } from '../middleware/validatetTokenHandler.js';

const router = Router();

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/current", validateToken, currentUser)

export default router;