import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import NavbarComponent from "./components/Navbar";

import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
     <NavbarComponent />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/store" element={<Store products={products} />} />
          <Route path="/about" element={<About products={products} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
