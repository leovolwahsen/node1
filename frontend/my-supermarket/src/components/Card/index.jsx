import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import { formatCurrency } from "../../utilities/formatCurrency";

function CardComponent({ products }) {
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
          <Card
            style={{ width: "100%" }}
            className="mt-auto"
          >
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>The cost is {formatCurrency(product.price)}</Card.Text>
              <Button variant="primary">Add to shopping card</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardComponent;
