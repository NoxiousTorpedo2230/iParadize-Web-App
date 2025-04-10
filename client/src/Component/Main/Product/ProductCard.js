// import React from "react";
// import { Card, Button, Badge } from "react-bootstrap";

// function ProductCard({ product, onAddToCart, onViewDetails, onBuyNow }) {
//   return (
//     <Card className="h-100 shadow border-0" style={{ width: "16rem", margin: "0 auto" }}>
//       <div className="position-relative">
//         <Card.Img
//           variant="top"
//           src={product.image}
//           alt={product.name}
//           className="card-img-top-rounded"
//           style={{ maxHeight: "180px", objectFit: "contain" }}
//         />
//         {product.discount && (
//           <Badge
//             bg="success"
//             className="position-absolute top-0 start-0 m-2 p-2"
//             style={{ fontSize: "0.8rem" }}
//           >
//             {product.discount} OFF
//           </Badge>
//         )}
//       </div>
//       <Card.Body className="text-center d-flex flex-column align-items-center" style={{ padding: "1.2rem", justifyContent: "flex-start" }}>
//         <Card.Title className="text-primary fw-bold" style={{ fontSize: "1.1rem", textAlign: "center" }}>
//           {product.name}
//         </Card.Title>
//         <Card.Text style={{ fontSize: "0.9rem", marginBottom: "auto" }}>
//           <b>Price:</b> <span className="text-success">₹{product.price}</span>
//         </Card.Text>
//         <a
//           href="#!"
//           className="text-primary mb-3"
//           onClick={() => onViewDetails(product)}
//           style={{ fontWeight: "bold", textDecoration: "none", fontSize: "0.9rem" }}
//         >
//           View Details
//         </a>
//         <div className="button-group d-flex justify-content-around w-100">
//           <Button variant="success" onClick={() => onBuyNow(product)}>
//             Buy Now
//           </Button>
//           <Button variant="primary" onClick={() => onAddToCart(product)}>
//             Add to Cart
//           </Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ProductCard;

import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

function ProductCard({ product, onAddToCart, onViewDetails, onBuyNow }) {
  // Calculate the discounted price if a discount exists
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
  const { discountedPrice } = calculateDiscountedPrice();
  if (!product) return null;

  return (
    <Card className="h-100 shadow border-0" style={{ width: "16rem", margin: "0 auto" }}>
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="card-img-top-rounded"
          style={{ maxHeight: "180px", objectFit: "contain" }}
        />
        {product.discount && (
          <Badge
            bg="success"
            className="position-absolute top-0 start-0 m-2 p-2"
            style={{ fontSize: "0.8rem" }}
          >
            {product.discount} OFF
          </Badge>
        )}
      </div>
      <Card.Body className="text-center d-flex flex-column align-items-center" style={{ padding: "1.2rem", justifyContent: "flex-start" }}>
        <Card.Title className="text-primary fw-bold" style={{ fontSize: "1.1rem", textAlign: "center" }}>
          {product.name}
        </Card.Title>
        <Card.Text className="me-2" style={{ fontSize: "0.9rem", marginBottom: "auto" }}>
          {product.discount ? (
            <>
              <b>Price: </b>{""}
              <span className="text-decoration-line-through text-muted me-2">
                ₹{product.price}
              </span>{""}
              <span className="text-success fw-bold">₹{discountedPrice}</span>
            </>
          ) : (
            <>
              <b>Price:</b> <span className="text-success">₹{product.price}</span>
            </>
          )}
        </Card.Text>
        <a
          href="#!"
          className="text-primary mb-3"
          onClick={(e) => {
            e.preventDefault();
            onViewDetails(product);
          }}
          style={{ fontWeight: "bold", textDecoration: "none", fontSize: "0.9rem" }}
        >
          View Details
        </a>
        <div className="button-group d-flex justify-content-around w-100">
          <Button variant="success" onClick={() => onBuyNow(product)}>
            Buy Now
          </Button>
          <Button variant="primary" onClick={() => onAddToCart(product)}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;