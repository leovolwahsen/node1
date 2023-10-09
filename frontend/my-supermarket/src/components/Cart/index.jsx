import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";

export function CartComponent({ products }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout is used so that as long as data is fetched from API, it doesnt show an error before data is loaded. Makes for better UX.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  // ther are two return below since the quantity is checked
  return (
    <Row>
      {products.map((product) => {
        // Here I get product's id
        const id = product._id;

        // Get the quantity for this product
        const quantity = getItemQuantity(id);
        
        return (
          <Col key={id} xs={12} sm={6} md={4} lg={3} className="mt-4">
            <Card style={{ width: "100%" }} className="mt-auto">
              <Card.Img
                variant="top"
                src={product.image}
                className="card-image"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                  <span className="fs-3">{product.name}</span>
                  <span className="ms-2 text-muted">
                    {formatCurrency(product.price)}
                  </span>
                </Card.Title>
                {quantity === 0 ? (
                  <Button
                    onClick={() => increaseCartQuantity(id)}
                    variant="primary"
                    className="w-100"
                  >
                    Add to shopping cart
                  </Button>
                ) : (
                  <div
                    className="d-flex align-items-center flex-column"
                    style={{ gap: "0.5rem" }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ gap: "0.5rem" }}
                    >
                      <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                      <div>
                        <span className="fs-3">{quantity}</span> in cart
                      </div>
                      <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                    </div>
                    <Button
                      onClick={() => removeFromCart(id)}
                      variant="danger"
                      size="sm"
                      style={{ display: "block" }}
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default CartComponent;
