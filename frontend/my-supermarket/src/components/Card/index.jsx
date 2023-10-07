import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import { formatCurrency } from "../../utilities/formatCurrency";

function CardComponent({ products }) {
  const quantity = 1;
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

  return (
    <Row>
      {products.map((product) => (
        <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="mt-4">
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
                <Button variant="primary" className="w-100">
                  Add to shopping card
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
                    <Button>-</Button>
                    <div>
                      <span className="fs-3">{quantity}</span> in cart
                    </div>
                    <Button>+</Button>
                  </div>
                  <Button
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
      ))}
    </Row>
  );
}

export default CardComponent;
