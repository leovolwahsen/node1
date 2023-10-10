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

  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load cart data from localStorage
    try{
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    } catch (error) {
      console.error("Error while loading chart data from localStorage:", error);
    }
    

    // Simulate loading, you can remove this timeout in your real app
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Save cart data to localStorage whenever the cart changes
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch(error) {
      console.error("Error saving cart data to localStorage:", error)
    }
    
  }, [cart]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <Row>
      {products.map((product) => {
        const id = product._id;
        const quantity = getItemQuantity(id);

        const addToCart = () => {
          const existingProduct = cart.find((item) => item.id === id);

          if (existingProduct) {
            // If the product is already in the cart, update the quantity
            setCart((prevCart) =>
              prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
              )
            );
          } else {
            // If the product is not in the cart, add it
            setCart((prevCart) => [
              ...prevCart,
              { id, quantity: 1, ...product },
            ]);
          }
        };

        const removeFromCartHandler = () => {
          // Remove the product from the cart
          setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        };

        const increaseQuantityHandler = () => {
          // Increase the quantity of the product in the cart
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
          );
        };

        const decreaseQuantityHandler = () => {
          // Decrease the quantity of the product in the cart
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.id === id && item.quantity > 0
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          );
        };

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
                      <Button onClick={() => decreaseCartQuantity(id)}>
                        -
                      </Button>
                      <div>
                        <span className="fs-3">{quantity}</span> in cart
                      </div>
                      <Button onClick={() => increaseCartQuantity(id)}>
                        +
                      </Button>
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
