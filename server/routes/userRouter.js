import express from 'express';
import { getCartItems, getUserData } from '../controllers/userController.js';
import { userAuth } from '../middleware/userAuth.js';

const userRouter = express.Router();

// To get the user Data
userRouter.get('/data', userAuth, getUserData);

// To get the Cart Data using UserID
userRouter.get('/cart/:userId',userAuth, getCartItems);

export default userRouter;