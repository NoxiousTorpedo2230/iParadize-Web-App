import express from 'express';
import { register, login, logout , addToCart, removeFromCart } from '../controllers/authController.js';
import { userAuth } from '../middleware/userAuth.js';


const authRouter = express.Router();

//Register
authRouter.post('/register', register);

//Login
authRouter.post('/login', login);

//Logout
authRouter.post('/logout', logout);

//Add-To-Cart
authRouter.post('/add', userAuth, addToCart);

//Remove-From-Cart
authRouter.post('/remove', userAuth, removeFromCart);


export default authRouter;