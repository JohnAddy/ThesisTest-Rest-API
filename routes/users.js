import express from "express";
import { createUser, getUser, getUsers, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// all routes (getUsers) starts with slash users
router.get('/', getUsers);

// routes for createuser 
router.post('/', createUser);
  
// routes for single user 
router.get('/:id', getUser);

// routes for deleting user
router.delete('/:id', deleteUser);

// routes for updating user
router.patch('/:id', updateUser);


export default router;










