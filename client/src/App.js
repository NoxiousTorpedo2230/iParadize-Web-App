import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

//Component Imports
import HomeHeader from "./Component/Navbar/Header/HomeHeader";
import MainHeader from "./Component/Navbar/Header/MainHeader";
import Footer from "./Component/Navbar/Footer/Footer";
import Home from "./Component/Home/Home";

//Welcome Message Components
import WelcomeMessage from "./Component/Main/Welcome/WelcomeMessage.js";

//Product Components
import Airpod from "./Component/Main/Product Dropdown/Airpod";
import Iaccessories from "./Component/Main/Product Dropdown/Iaccessories";
import Ipad from "./Component/Main/Product Dropdown/Ipad";
import Iphone from "./Component/Main/Product Dropdown/Iphone";
import Watch from "./Component/Main/Product Dropdown/Watch";
import Mac from "./Component/Main/Product Dropdown/Mac";
import Allproduct from "./Component/Main/Product Dropdown/Allproduct.js";

function App() {
  // State for modals
  const [modalState, setModalState] = useState({
    login: false,
    register: false,
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  // Effect to show welcome message when user logs in
  useEffect(() => {
    if (currentUser && isLoggedIn) {
      setShowWelcomeMessage(true);
    }
  }, [currentUser, isLoggedIn]);

  const handleShowModal = (type) => {
    setModalState({
      login: type === "login",
      register: type === "register",
    });
  };

  const handleCloseModal = () => {
    setModalState({ login: false, register: false });
  };

  // Logout Handler
  const logoutUser = async () => {
    try {
      await axios.post("http://localhost:4000/api/auth/logout");
      setIsLoggedIn(false);
      setCurrentUser(null);
      setShowWelcomeMessage(false);
      localStorage.removeItem("userId");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Handler for dismissing welcome message
  const handleCloseWelcomeMessage = () => {
    setShowWelcomeMessage(false);
  };

  return (
    <Router>
      <div className="wrapper">
        <header>
          {isLoggedIn ? (
            <MainHeader
              currentUser={currentUser}
              logoutUser={logoutUser}
              cartItems={cartItems}
              setCartItems={setCartItems}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setCurrentUser={setCurrentUser}
            />
          ) : (
            <HomeHeader />
          )}
        </header>

        {showWelcomeMessage && currentUser && (
          <WelcomeMessage 
            currentUser={currentUser} 
            isLoggedIn={isLoggedIn} 
            onClose={handleCloseWelcomeMessage}
          />
        )}

        <main>
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <Home
                  showLoginModal={modalState.login}
                  handleShowLoginModal={() => handleShowModal("login")}   
                  handleCloseLoginModal={handleCloseModal}
                  showRegisterModal={modalState.register}
                  handleShowRegisterModal={() => handleShowModal("register")}
                  handleCloseRegisterModal={handleCloseModal}
                  setIsLoggedIn={setIsLoggedIn}
                  setCurrentUser={setCurrentUser}
                />
              }
            />

            {/* Product Route */}
            <Route path="/airpod" element={<Airpod searchTerm={searchTerm} setCartItems={setCartItems} cartItems={cartItems}/>}/>
            <Route path="/iAccessories" element={<Iaccessories searchTerm={searchTerm} setCartItems={setCartItems} cartItems={cartItems}/>}/>
            <Route path="/iPad" element={<Ipad searchTerm={searchTerm} setCartItems={setCartItems} cartItems={cartItems}/>}/>
            <Route path="/iPhone" element={<Iphone searchTerm={searchTerm} setCartItems={setCartItems} cartItems={cartItems}/>}/>
            <Route path="/mac" element={<Mac searchTerm={searchTerm} setCartItems={setCartItems} cartItems={cartItems}/>}/>
            <Route path="/watch" element={<Watch searchTerm={searchTerm} setCartItems={setCartItems} cartItems={cartItems}/>}/>
            
            {/* AllProduct Route */}
            <Route path="/allProduct" element={<Allproduct searchTerm={searchTerm} setCartItems={setCartItems} cartItems={cartItems}/>}/>

            <Route path="*" element={<div></div>} />
            
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;