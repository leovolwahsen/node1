import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";

function CardComponent({ products }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

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
    <div>
      {products.map((product) => (
        <Card style={{ width: "18rem" }} key={product._id}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{`The cost is ${product.price}€`}</Card.Text>
            <Button variant="primary">Add to shopping card</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardComponent;
