import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../Product/ProductCard";
import ProductModal from "../Product/ProductModal";
import { ipadFilter } from "../Product/ProductFilter";
import {  addToCart,  handleViewDetails,  handleCloseModal,  handleBuyNow,} from "../Product/ProductHandlers";

function Ipad({ searchTerm, setCartItems }) {

    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const filteredProducts = ipadFilter({searchTerm});
    const userId = localStorage.getItem("userId");

  return (
    <main className="main-content pt-5">
      <Container className="mt-5">
        <Row className="g-0">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Col key={index} lg={3} md={6} sm={12} className="mb-4">
                <ProductCard
                  product={product}
                  onAddToCart={() => addToCart(localStorage.getItem("userId"), product, setCartItems)}
                  onViewDetails={() =>
                    handleViewDetails(product, setSelectedProduct, setShowModal)
                  }
                  onBuyNow={() =>
                    handleBuyNow(product, () =>
                      handleCloseModal(setShowModal, setSelectedProduct)
                    )
                  }
                />
              </Col>
            ))
          ) : (
            <div className="text-center">
              <p className="text-muted">No products match your search!</p>
            </div>
          )}
        </Row>
        {selectedProduct && (
          <ProductModal
            show={showModal}
            product={selectedProduct}
            onClose={() => handleCloseModal(setShowModal, setSelectedProduct)}
            onAddToCart={() => addToCart( userId, selectedProduct, setCartItems)}
            onBuyNow={() =>
              handleBuyNow(selectedProduct, () =>
                handleCloseModal(setShowModal, setSelectedProduct)
              )
            }
          />
        )}
      </Container>
    </main>
  )
}

export default Ipad