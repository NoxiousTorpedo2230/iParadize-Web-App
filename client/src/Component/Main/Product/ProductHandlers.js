import axios from "axios";


// Add To Cart
export const addToCart = async (userId, product, setCartItems) => {
  if (!userId) {
    console.error("User is not logged in");
    alert("Please log in to add items to your cart!");
    return;
  }

  if (!product || !product.name || !product.price) {
    console.error("Invalid product data:", { userId, product });
    return;
  }
  const formattedPrice = typeof product.price === 'string' 
    ? parseFloat(product.price.replace(/[^\d.-]/g, ""))
    : product.price;

  let discountedPrice = formattedPrice;
  if(product.discount){
    const discountPercent = parseInt(product.discount.replace(/%/g, ""));
    const discountAmount = (formattedPrice * discountPercent) / 100;
    discountedPrice = formattedPrice - discountAmount;
  }

  try {
    const response = await axios.post(
      "http://localhost:4000/api/auth/add",
      {
        userId,
        name: product.name,
        price: discountedPrice,
        imageName: product.image,
        quantity: 1,
      },
      { withCredentials: true }
    );
    
    console.log("Added To Cart Successfully");
    if (response.data.success) {
      if (response.data.cart && response.data.cart.items) {
        setCartItems(response.data.cart.items);
      }
    }
  } catch (error) {
    console.error("Error adding product to cart:", error.response?.data || error);
  }
};

// View Cart
export const viewCart = async (userId, setCartItems) => {
  if (!userId) {
    console.error("Missing userId for viewCart");
    return;
  }

  try {
    const response = await axios.get(
      `http://localhost:4000/api/user/cart/${userId}`, 
      { withCredentials: true }
    );
    
    console.log("Cart Items Response:", response.data);
    if (response.data.success) {
      setCartItems(response.data.cartItems || []);
    }
  } catch (error) {
    console.error("Error fetching cart items:", error);
    // Print more detailed error information
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
    }
    // If cart is empty or error, set empty array
    setCartItems([]);
  }
};

// Remove product from cart
export const removeFromCart = async (productId, setCartItems, handleCloseCartModal) => {
  const userId = localStorage.getItem("userId");

  if (!userId || !productId) {
    alert("User or product details are missing. Please refresh and try again.");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:4000/api/auth/remove",
      { userId, productId },
      { withCredentials: true }
    );

    if (response.data.success) {
      console.log("Product removed successfully!");
      
      // Update the cart state with the new cart data
      setCartItems(response.data.cart || []);
    } else {
      alert(response.data.message || "Failed to remove product.");
    }
  } catch (error) {
    console.error("Error during remove operation:", error.response?.data || error);
    alert("An error occurred while removing the product. Please try again.");
  }
};

// To View the Full details 
export const handleViewDetails = (
  product,
  setSelectedProduct,
  setShowModal
) => {
  setSelectedProduct(product);
  setShowModal(true);
};

// To Close the modal
export const handleCloseModal = (setShowModal, setSelectedProduct) => {
  setShowModal(false);
  setSelectedProduct(null);
};

// To buy the product
export const handleBuyNow = (product, handleCloseModal) => {
  alert(`Buying now: ${product.name}`);
  handleCloseModal();
};
