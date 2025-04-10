import React from "react";
import {  Navbar,  Modal,  Form,  Button,  InputGroup,  Dropdown,} from "react-bootstrap";
import {  FaApple,  FaSearch,  FaTh,  FaUserCircle,  FaShoppingCart,} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

// Navbar
export const NavigationBar = () => {
  return (
    <Navbar.Brand as={Link} to="" className="header-brand">
      <FaApple className="header-icon" />
      <span style={{ color: "whitesmoke", verticalAlign: "bottom",
          fontWeight: "bold",
        }}
      >
        iParadize
      </span>
    </Navbar.Brand>
  );
};

// Searchbar
export const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Form className="header-search d-flex me-4">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search..."
          className="header-search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button className="header-search-btn">
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  );
};

// ProductMenu
export const ProductMenu = () => {
  return (
    <Dropdown className="me-4">
      <Dropdown.Toggle
        className="header-dropdown-toggle no-caret"
        id="product-dropdown"
      >
        <FaTh size={22} />
      </Dropdown.Toggle>
      <Dropdown.Menu className="header-dropdown-menu">
        <Dropdown.Item as={Link} to="/mac">
          Mac
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/ipad">
          iPad
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/iphone">
          IPhone
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/airpod">
          I-Airpod
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/watch">
          I-Watch
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/iAccessories">
          I-Accessories
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/allProduct">
          All Products
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

// UserDropDown
export const UserDropDown = ({ currentUser, handleUserLogout }) => {
  return (
    <Dropdown align="end" className="ms-3">
      <Dropdown.Toggle
        className="header-dropdown-toggle no-caret"
        id="user-dropdown"
      >
        <FaUserCircle size={22} />
      </Dropdown.Toggle>
      <Dropdown.Menu className="header-dropdown-menu">
        {currentUser ? (
          <Dropdown.Header>Welcome, {currentUser.name}!</Dropdown.Header>
        ) : (
          <Dropdown.Header>Welcome, Guest!</Dropdown.Header>
        )}
        {<Dropdown.Item onClick={handleUserLogout}>Logout</Dropdown.Item>}
      </Dropdown.Menu>
    </Dropdown>
  );
};

// Cart Modal
export const CartModal = ({
  showCartModal,
  handleCloseCartModal,
  cartItems,
  setCartItems,
  handleRemoveFromCart,
}) => {
  const totalPrice = React.useMemo(() => {
    return cartItems && cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      : 0;
  }, [cartItems]);

  // Calculate total number of items
  const totalItems = React.useMemo(() => {
    return cartItems && cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
      : 0;
  }, [cartItems]);

  // Handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  return (
    <Modal 
      show={showCartModal} 
      onHide={handleCloseCartModal} 
      centered
      size="md"
      className="cart-modal"
    >
      <Modal.Header className="border-0 pb-0" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="w-100 d-flex justify-content-between align-items-center">
          <Modal.Title className="fw-bold fs-5 text-white">
            Your Cart {totalItems > 0 && <span className="text-primary ms-1">({totalItems})</span>}
          </Modal.Title>
          <Button 
            variant="link" 
            className="p-0 text-white" 
            onClick={handleCloseCartModal}
            aria-label="Close cart"
          >
            <i className="bi bi-x-circle"></i>
          </Button>
        </div>
      </Modal.Header>
      
      <Modal.Body className="px-3 py-2" style={{ backgroundColor: '#0a0a0a', color: 'white' }}>
        {cartItems && cartItems.length > 0 ? (
          <>
            <div 
              className="cart-items-container custom-scrollbar" 
              style={{ 
                maxHeight: "300px",
                overflowY: "auto",
                overflowX: "hidden",
                paddingRight: "5px"
              }}
            >
              {cartItems.map((item) => (
                <div
                  key={item.productId}
                  className="d-flex flex-column p-2 mb-2 rounded shadow-sm"
                  style={{ backgroundColor: '#1a1a1a', color: 'white', transition: 'all 0.2s ease' }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center flex-grow-1">
                      <div 
                        className="cart-img-container rounded p-1 me-2 d-flex align-items-center justify-content-center" 
                        style={{ 
                          width: "55px",
                          height: "55px",
                          minWidth: "55px",
                          backgroundColor: "#2a2a2a",
                          border: "1px solid #333"
                        }}
                      >
                        <img
                          src={item.image || "/images/placeholder-image.jpg"}
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                          onError={(e) => {
                            console.log("Image failed to load:", item.image);
                            e.target.src = "/images/placeholder-image.jpg";
                            e.target.onerror = null;
                          }}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="fw-bold" style={{ fontSize: "0.9rem" }}>{item.name}</span>
                        <span className="text-primary" style={{ fontSize: "0.85rem" }}>₹{item.price.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center ms-2">
                      <div className="quantity-control d-flex align-items-center bg-dark rounded">
                        <button 
                          className="btn d-flex align-items-center justify-content-center p-0 fw-bold"
                          style={{ 
                            width: "24px",
                            height: "24px",
                            minWidth: "24px",
                            fontSize: "14px",
                            borderRadius: "4px",
                            backgroundColor: "#333",
                            color: "white"
                          }}
                          onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="mx-2 fw-bold" style={{ fontSize: "0.85rem" }}>{item.quantity}</span>
                        <button 
                          className="btn d-flex align-items-center justify-content-center p-0 fw-bold"
                          style={{ 
                            width: "24px",
                            height: "24px",
                            minWidth: "24px",
                            fontSize: "14px",
                            borderRadius: "4px",
                            backgroundColor: "#333",
                            color: "white"
                          }}
                          onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Remove button row */}
                  <div className="d-flex justify-content-between align-items-center mt-2 pt-1 border-top border-dark">
                    <span className="text-light small">Subtotal: <span className="text-primary">₹{(item.price * item.quantity).toFixed(2)}</span></span>
                    <button
                      className="btn btn-sm py-0 px-2 btn-danger"
                      style={{ fontSize: "0.7rem" }}
                      onClick={() => handleRemoveFromCart(item.productId, setCartItems)}
                    >
                      <i className="bi bi-trash me-1"></i> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-3 pt-2 border-top border-secondary">
              <div className="d-flex justify-content-between mb-1" style={{ fontSize: "0.9rem" }}>
                <span className="text-light">Subtotal:</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-1" style={{ fontSize: "0.9rem" }}>
                <span className="text-light">Shipping:</span>
                <span>{totalPrice > 500 ? <span className="text-success">Free</span> : "₹50.00"}</span>
              </div>
              <div className="d-flex justify-content-between mt-2 pt-2 border-top border-secondary">
                <span className="fw-bold text-white">Total:</span>
                <span className="fw-bold text-primary">
                  ₹{(totalPrice > 500 ? totalPrice : totalPrice + 50).toFixed(2)}
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <i className="bi bi-cart-x fs-3 text-secondary mb-2"></i>
            <h6 className="text-white mb-2">Your cart is empty!</h6>
            <p className="text-light small mb-3">Add some items to start shopping</p>
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleCloseCartModal}
            >
              <i className="bi bi-bag me-1"></i>Browse Products
            </Button>
          </div>
        )}
      </Modal.Body>
      
      {cartItems && cartItems.length > 0 && (
        <Modal.Footer className="border-0 pt-0 px-3 pb-3" style={{ backgroundColor: '#0a0a0a' }}>
          <div className="w-100 d-flex justify-content-between gap-2">
            <Button 
              variant="light"
              size="sm"
              onClick={handleCloseCartModal}
            >
              Continue Shopping
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => alert("Proceeding to checkout!")}
            >
              Checkout <i className="bi bi-arrow-right ms-1"></i>
            </Button>
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
};


// CartButton
export const CartButton = ({ handleOpenCartModal, cartItemsCount }) => {
  const itemCount =
    cartItemsCount && Array.isArray(cartItemsCount) ? cartItemsCount.length : 0;

  return (
    <Button
      className="header-icon-btn position-relative"
      onClick={handleOpenCartModal}
    >
      <FaShoppingCart size={22}  />
      {itemCount > 0 && (
        <span className="header-badge">
          {itemCount}
        </span>
      )}
    </Button>
  );
};
