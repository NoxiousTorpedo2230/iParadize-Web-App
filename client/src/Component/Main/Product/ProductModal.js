// import React from "react";
// import { Modal, Button } from "react-bootstrap";

// function ProductModal({ show, product, onClose, onAddToCart, onBuyNow }) {
//   return (
//     <Modal
//       show={show}
//       onHide={onClose}
//       size="sm"
//       centered
//       className="custom-modal"
//     >
//       <Modal.Header
//         closeButton
//         className="bg-dark text-white border-0"
//         style={{
//           borderTopLeftRadius: "10px",
//           borderTopRightRadius: "10px",
//         }}
//       >
//         <Modal.Title className="w-100 text-center">
//           <i className="bi bi-star-fill text-warning me-2"></i> {product.name}
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="bg-light text-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="img-fluid rounded shadow mb-3"
//           style={{ maxHeight: "140px" }}
//         />
//         <p className="mb-2">
//           <span className="badge bg-primary px-3 py-2">Price: {product.price}</span>
//         </p>
//         <p className="text-muted mb-2">
//           <b>Features:</b> {product.features}
//         </p>
//         <p className="text-warning fw-bold">Rating: {product.rating}</p>
//       </Modal.Body>
//       <Modal.Footer
//         className="d-flex justify-content-between bg-dark border-0"
//         style={{
//           borderBottomLeftRadius: "10px",
//           borderBottomRightRadius: "10px",
//         }}
//       >
//         <Button variant="success" className="px-4" onClick={() => onBuyNow(product)}>
//           Buy Now
//         </Button>
//         <Button variant="info" className="px-4" onClick={() => onAddToCart(product)}>
//           Add to Cart
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default ProductModal;
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

function ProductModal({ show, product, onClose, onAddToCart, onBuyNow }) {
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    if (show) {
      setTimeout(() => setAnimateIn(true), 100);
    } else {
      setAnimateIn(false);
    }
  }, [show]);
  
  const calculateDiscountedPrice = () => {
    if (!product) return { originalPrice: 0, discountedPrice: 0 };
    
    const originalPrice = parseFloat(product.price.toString().replace(/,/g, '')) || 0;
    const discountStr = product.discount || "0%";
    const discountPercent = parseInt(discountStr.replace(/%/g, "")) || 0;
    const discountAmount = (originalPrice * discountPercent) / 100;
    const discountedPrice = originalPrice - discountAmount;
    const formatPrice = (price) => {
      return price.toLocaleString('en-IN');
    };
    return {
      originalPrice: formatPrice(originalPrice),
      discountedPrice: formatPrice(discountedPrice)
    };
  };
  const { originalPrice, discountedPrice } = calculateDiscountedPrice();
  if (!product) return null;

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      dialogClassName="modal-dialog-custom"
      contentClassName="shadow-none border-0 bg-transparent"
      backdrop="static"
    >
      <div 
        className={`product-card ${animateIn ? 'animated' : ''}`}
        style={{
          background: "#0f0f0f",
          borderRadius: "24px",
          overflow: "hidden",
          position: "relative",
          maxWidth: "450px",
          margin: "0 auto",
          transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)"
        }}
      >
        {/* Close button */}
        <button 
          className="position-absolute" 
          onClick={onClose}
          style={{
            top: "20px",
            right: "20px",
            background: "rgba(255,255,255,0.15)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            backdropFilter: "blur(4px)",
            cursor: "pointer"
          }}
        >
          <i className="bi bi-x-lg" style={{ color: "white" }}></i>
        </button>

        {/* Discount Tag */}
        <div 
          className="discount-tag position-absolute"
          style={{
            top: "20px",
            left: "20px",
            background: "#FF3366",
            borderRadius: "30px",
            padding: "8px 16px",
            fontSize: "0.85rem",
            color: "white",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0 4px 12px rgba(255, 51, 102, 0.3)",
            zIndex: 5
          }}
        >
          {product.discount} OFF
        </div>

        {/* Product Image Section */}
        <div 
          className="product-hero position-relative"
          style={{
            height: "240px",
            background: "linear-gradient(45deg, #8E2DE2, #4A00E0)",
            overflow: "hidden"
          }}
        >
          {/* Animated background patterns */}
          <div className="animated-patterns">
            <div 
              className="pattern-circle"
              style={{
                position: "absolute",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                top: "-50px",
                left: "-50px",
                animation: "float 8s infinite ease-in-out"
              }}
            ></div>
            <div 
              className="pattern-circle"
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                bottom: "30px",
                right: "20px",
                animation: "float 6s infinite ease-in-out reverse"
              }}
            ></div>
          </div>
          
          {/* Product Image with glow effect */}
          <div 
            className="product-image-container d-flex align-items-center justify-content-center"
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
              zIndex: 2
            }}
          >
            <div 
              className="glow-effect" 
              style={{
                position: "absolute",
                width: "120px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.4)",
                filter: "blur(20px)",
                transform: "scale(2)",
                bottom: "10px"
              }}
            ></div>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              style={{
                maxHeight: "200px",
                maxWidth: "85%",
                objectFit: "contain",
                transform: "translateY(-10px)",
                transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                animation: "float 4s infinite ease-in-out"
              }}
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div 
          className="product-info position-relative px-4 pt-4 pb-5"
          style={{
            background: "#0f0f0f",
            color: "white"
          }}
        >
          {/* Product name and rating row */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h3 
              className="product-name m-0"
              style={{
                fontWeight: "700",
                fontSize: "1.75rem"
              }}
            >
              {product.name}
            </h3>
            
            {/* Price section moved to right side */}
            <div 
              className="price-container ms-3"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end"
              }}
            >
              <span 
                className="original-price"
                style={{
                  textDecoration: "line-through",
                  color: "#999",
                  fontSize: "0.9rem"
                }}
              >
                ₹{originalPrice}
              </span>
              <span 
                className="current-price"
                style={{
                  fontWeight: "800",
                  fontSize: "1.4rem",
                  color: "#FF3366"
                }}
              >
                ₹{discountedPrice}
              </span>
            </div>
          </div>
          
          {/* Rating stars */}
          <div className="rating mb-4 d-flex align-items-center">
            <div className="stars d-flex me-2" style={{color: "gold"}}>
              {[...Array(5)].map((_, i) => (
                <i 
                  key={i}
                  className={`bi ${i < Math.floor(product.rating) ? "bi-star-fill" : i < product.rating ? "bi-star-half" : "bi-star"}`}
                  style={{
                    color: "gold",
                    fontSize: "18px",
                    marginRight: "2px"
                  }}
                ></i>
              ))}
            </div>
            <span 
              style={{
                color: "gold",
                fontSize: "0.9rem"
              }}
            >
              {product.rating}
            </span>
          </div>
          
          {/* Features */}
          <div 
            className="features mb-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "16px",
              borderRadius: "16px"
            }}
          >
            <h6 
              className="mb-2"
              style={{
                color: "#999",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
            >
              Features
            </h6>
            <p 
              className="mb-0"
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.6"
              }}
            >
              {product.features}
            </p>
          </div>
          
          {/* Limited time offer banner */}
          <div 
            className="offer-banner mb-4 d-flex align-items-center"
            style={{
              background: "linear-gradient(90deg, rgba(255,51,102,0.15) 0%, rgba(255,51,102,0) 100%)",
              borderLeft: "4px solid #FF3366",
              padding: "10px 16px",
              borderRadius: "8px",
              fontSize: "0.9rem"
            }}
          >
            <i 
              className="bi bi-clock me-2"
              style={{
                color: "#FF3366"
              }}
            ></i>
            <span>Limited time offer! Discount ends soon</span>
          </div>
          
          {/* Action buttons */}
          <div className="actions d-flex gap-3">
            <button 
              className="btn-add-cart flex-grow-1"
              onClick={() => onAddToCart(product)}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
                borderRadius: "14px",
                padding: "12px",
                fontSize: "0.95rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              <i className="bi bi-bag-plus me-2"></i>
              Add to Cart
            </button>
            <button 
              className="btn-buy-now flex-grow-1"
              onClick={() => onBuyNow(product)}
              style={{
                background: "linear-gradient(45deg, #8E2DE2, #4A00E0)",
                border: "none",
                color: "white",
                borderRadius: "14px",
                padding: "12px",
                fontSize: "0.95rem",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 6px 15px rgba(138, 44, 226, 0.3)",
                transition: "all 0.3s ease"
              }}
            >
              <i className="bi bi-lightning-fill me-2"></i>
              Buy Now
            </button>
          </div>
        </div>

        {/* Add CSS for animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          .product-card {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          
          .product-card.animated {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          
          .btn-add-cart:hover {
            background: rgba(255,255,255,0.1);
          }
          
          .btn-buy-now:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(138, 44, 226, 0.4);
          }
        `}</style>
      </div>
    </Modal>
  );
}

export default ProductModal;