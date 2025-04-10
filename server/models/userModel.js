import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cnfPassword: { type: String, required: true }
}, { collection: "Register", timestamps: true });

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, 
  quantity: { type: Number, default: 1 },
});

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true }, 
  items: [productSchema],
}, { collection: "Cart" , timestamps: true });

const userModel = mongoose.models['Register'] || mongoose.model('Register', userSchema);
const cartModel = mongoose.models['Cart'] || mongoose.model('Cart', cartSchema);

export { userModel, cartModel };
