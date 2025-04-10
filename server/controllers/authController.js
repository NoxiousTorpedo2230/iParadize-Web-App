import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cartModel, userModel } from '../models/userModel.js';
import { v4 as uuidv4 } from "uuid";

// User registration
export const register = async (req, res) => {
    const { name, email, password, cnfPassword } = req.body;

    if (!name || !email || !password || !cnfPassword) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    if (password !== cnfPassword) {
        return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: 'User already exists' });
        }

        const hashPass = await bcrypt.hash(password, 10);
        const hashCnfPass = await bcrypt.hash(cnfPassword, 10);
        const user = new userModel({ name, email, password: hashPass, cnfPassword:hashCnfPass });
        const savedUser = await user.save();

        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// User login
export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// User logout
export const logout = (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });
    return res.status(200).json({ success: true, message: 'Logged out successfully' });
};

// Add To Cart
export const addToCart = async (req, res) => {
    const { userId, name, price, imageName, quantity } = req.body;
  
    if (!userId || !name || !price || !imageName || quantity === undefined) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
  
    const productId = uuidv4();
  
    try {
        let userCart = await cartModel.findOne({ userId });
  
        if (userCart) {
            const itemIndex = userCart.items.findIndex((item) => item.productId === productId);
  
            if (itemIndex > -1) {
                userCart.items[itemIndex].quantity += quantity;
            } else {
                userCart.items.push({ productId, name, price, image: imageName, quantity });
            }
        } else {
            userCart = new cartModel({
                userId,
                items: [{ productId, name, price, image: imageName, quantity }],
            });
        }
  
        await userCart.save();
        res.status(200).json({ success: true, message: "Product added to cart successfully", cart: userCart });
    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
  
  // // Remove from Cart
  export const removeFromCart = async (req, res) => {
      const { userId, productId } = req.body;
    
      if (!userId || !productId) {
        return res.status(400).json({ success: false, message: "User ID and Product ID are required" });
      }
    
      try {
        const cart = await cartModel.findOne({ userId });
    
        if (!cart) {
          return res.status(404).json({ success: false, message: "Cart not found" });
        }
    
        cart.items = cart.items.filter(item => item.productId !== productId);
        await cart.save();
    
        return res.status(200).json({ success: true, cart: cart.items });
      } catch (error) {
        console.error("Error removing item from cart:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
      }
  };
  
