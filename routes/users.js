import express from "express";
import { allUsers, createUser } from "../controllers/users.js";

const router = express.Router();

router.get('/',allUsers)
router.get('/create',createUser)

export default router