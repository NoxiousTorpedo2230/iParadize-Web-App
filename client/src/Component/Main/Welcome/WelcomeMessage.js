// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaApple } from "react-icons/fa";
// import "./User.css";

// const WelcomeMessage = ({ currentUser, isLoggedIn, onClose }) => {
//   const navigate = useNavigate();
//   const [show, setShow] = React.useState(true);

//   const handleExplore = () => {
//     setShow(false);
//     if (localStorage.getItem("justRegistered")) {
//       localStorage.removeItem("justRegistered");
//     }

    
//     if (onClose) {
//       onClose();
//     }

//     setTimeout(() => {
//       navigate("/allProduct");
//     }, 100); 
//   };

//   if (!currentUser || !isLoggedIn || !show) {
//     return null;
//   }

//   const justRegistered = localStorage.getItem("justRegistered") === "true";
//   const userDisplayName = currentUser?.name || currentUser?.email || "User";

//   return (
//     <div className="welcome-overlay">
//       <div className="welcome-container">
//         <div className="welcome-content">
//           <div className="apple-logo">
//             <FaApple style={{ fontSize: "40px", color: "white" }} />
//             <span style={{fontSize: '30px', verticalAlign:'center', fontWeight:'bold'}}>iParadize</span>
//           </div>

//           <h3 className="welcome-heading">
//             {justRegistered ? (
//               <>
//                 Welcome, <span className="user-name">{userDisplayName}</span>!
//               </>
//             ) : (
//               <>
//                 Welcome Back,{" "}
//                 <span className="user-name">{userDisplayName}</span>!
//               </>
//             )}
//           </h3>

//           <p className="welcome-text">
//             {justRegistered
//               ? "Thank you for registering with our store. We hope you enjoy your shopping experience!"
//               : "Great to see you again! Check out our latest products and offers."}
//           </p>

//           <button className="explore-button" onClick={handleExplore}>
//             Explore
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomeMessage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import "./User.css";

const WelcomeMessage = ({ currentUser, isLoggedIn, onClose }) => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(true);

  // Check if the user has just registered
  const justRegistered = localStorage.getItem("justRegistered") === "true";

  // Handle the "Explore" button click
  const handleExplore = () => {
    setShow(false);

    // Clear the `justRegistered` flag for the next session
    if (justRegistered) {
      localStorage.removeItem("justRegistered");
    }

    // Trigger onClose callback if provided
    if (onClose) {
      onClose();
    }

    // Navigate to "/allProduct" after a short delay
    setTimeout(() => {
      navigate("/allProduct");
    }, 100);
  };

  // If no current user, user is not logged in, or message is dismissed
  if (!currentUser || !isLoggedIn || !show) {
    return null;
  }

  const userDisplayName = currentUser?.name || currentUser?.email || "User";

  // Customize the welcome message and text based on user type
  const welcomeMessage = justRegistered
    ? `Welcome, ${userDisplayName}!`
    : `Welcome Back, ${userDisplayName}!`;

  const welcomeText = justRegistered
    ? "Thank you for joining iParadize! We're thrilled to have you here. Start exploring our amazing range of products and enjoy the best deals we have to offer!"
    : "Great to see you again! Check out our latest products and exclusive offers tailored just for you.";

  return (
    <div className="welcome-overlay">
      <div className="welcome-container">
        <div className="welcome-content">
          {/* Apple logo and app name */}
          <div className="apple-logo">
            <FaApple style={{ fontSize: "40px", color: "white" }} />
            <span
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                verticalAlign: "center",
              }}
            >
              iParadize
            </span>
          </div>

          {/* Welcome heading */}
          <h3 className="welcome-heading">{welcomeMessage}</h3>

          {/* Welcome text */}
          <p className="welcome-text">{welcomeText}</p>

          {/* Explore button */}
          <button className="explore-button" onClick={handleExplore}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
