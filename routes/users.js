import express from "express";
import { allUsers, createUser, singleUser, deleteUser } from "../controllers/users.js";

const router = express.Router();

router.get('/',allUsers)
router.post('/create',createUser)
router.get('/:id',singleUser)
router.delete('/:id',deleteUser)

export default router