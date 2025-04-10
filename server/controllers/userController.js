import { cartModel, userModel } from '../models/userModel.js';

//To get UserData
export const getUserData = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId);
        if (user) {
            return res.status(200).json({ success: true, user: { _id: user._id, name: user.name, email: user.email } });
        } else {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Get Cart Items
export const getCartItems = async (req, res) => {
    const { userId } = req.params;
  
    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is required" });
    }
  
    try {
      const cart = await cartModel.findOne({ userId });
  
      if (!cart || cart.items.length === 0) {
        return res.status(404).json({ success: false, message: "Cart is empty" });
      }
  
      const totalPrice = cart.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const totalItems = cart.items.reduce(
        (count, item) => count + item.quantity,
        0
      );
  
      return res.status(200).json({
        success: true,
        cartItems: cart.items,
        totalPrice,
        totalItems,
      });
    } catch (error) {
      console.error("Error retrieving cart items:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
};
  