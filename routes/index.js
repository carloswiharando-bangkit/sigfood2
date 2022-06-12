import express from "express";
import { refreshToken } from "../controller/refreshToken.js";
import { getUsers, login, logOut, signUp } from "../controller/users.js";
import { verifyToken } from "../middleware/verifyToken.js";


const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/signUp', signUp);
router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', logOut);

export default router;