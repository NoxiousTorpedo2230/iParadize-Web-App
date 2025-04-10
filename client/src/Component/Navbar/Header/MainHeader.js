import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import axios from "axios";
import {   NavigationBar,   Searchbar,  ProductMenu,   CartButton,   UserDropDown,   CartModal } from './HeaderHandler';
import { viewCart, removeFromCart } from '../../Main/Product/ProductHandlers';
import HomeHeader from './HomeHeader'

function MainHeader({ currentUser, setCurrentUser, searchTerm, setSearchTerm }) {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const userId = localStorage.getItem("userId");

  const handleOpenCartModal = () => {
    if (userId) {
      viewCart(userId, setCartItems);
    }
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => setShowCartModal(false);

  useEffect(() => {
    if (userId) {
      viewCart(userId, setCartItems);
    } else {
      setCartItems([]);
    }
  }, [userId]);

  const handleUserLogout = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/logout',
        {},
        { withCredentials: true }
      );

      if (response.data.success) {
        localStorage.removeItem('userId');
        setCurrentUser(null);
        setCartItems([]);
        navigate('/');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleRemoveFromCart = async (productId, setCartItems) => {
    await removeFromCart(productId, setCartItems);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/api/user/data',
          { withCredentials: true }
        );

        if (response.data && response.data.success && response.data.user) {
          setCurrentUser(response.data.user);
          localStorage.setItem("userId", response.data.user._id);
        } else {
          console.error("User data not found or invalid format");
          setCurrentUser(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          setCurrentUser(null);
          localStorage.removeItem("userId");
        }
      }
    };

    if (!currentUser) {
      fetchUser();
    }
  }, [setCurrentUser, currentUser]);

  return (
    <>
      {!currentUser ? (
        <HomeHeader/>
      ) : (
        <Navbar expand="lg" className="header-navbar" fixed="top">
          <Container fluid>
            <NavigationBar />
            <Navbar.Toggle aria-controls="navbar-content" />
            <Navbar.Collapse id="navbar-content">
              <Nav className="ms-auto align-items-center">
                <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                
                {/* Responsive Product Menu */}
                <div className="d-lg-none mobile-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-light" className="w-100 no-caret">
                      Products
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/mac">Mac</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/ipad">iPad</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/iphone">IPhone</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/airpod">I-Airpod</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/watch">I-Watch</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/iAccessories">I-Accessories</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/allProduct">All Products</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                
                {/* Large Screen Product Menu */}
                <div className="d-none d-lg-block">
                  <ProductMenu />
                </div>
                
                {/* Responsive Cart Button */}
                <div className="d-lg-none mobile-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-light" className="w-100 position-relative no-caret">
                      View Cart 
                      {cartItems && cartItems.length > 0 && (
                        <span className="mobile-badge">{cartItems.length}</span>
                      )}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleOpenCartModal}>
                        View Cart Items ({cartItems ? cartItems.length : 0})
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                
                {/* Large Screen Cart Button */}
                <div className="d-none d-lg-block">
                  <CartButton
                    handleOpenCartModal={handleOpenCartModal}
                    cartItemsCount={cartItems}
                  />
                </div>
                
                {/* Responsive User Dropdown */}
                <div className="d-lg-none mobile-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-light" className="w-100 no-caret">
                      User Profile
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {currentUser ? (
                        <>
                          <Dropdown.Header>Welcome, {currentUser.name}!</Dropdown.Header>
                          <Dropdown.Item onClick={handleUserLogout}>Logout</Dropdown.Item>
                        </>
                      ) : (
                        <Dropdown.Header>Welcome, Guest!</Dropdown.Header>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                
                {/* Large Screen User Dropdown */}
                <div className="d-none d-lg-block">
                  <UserDropDown
                    currentUser={currentUser}
                    handleUserLogout={handleUserLogout}
                  />
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      <CartModal
        showCartModal={showCartModal}
        handleCloseCartModal={handleCloseCartModal}
        cartItems={cartItems}
        setCartItems={setCartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </>
  );
}

export default MainHeader;

