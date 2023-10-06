import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarElement from "./components/Navbar";
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
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <NavbarElement />
    <div id="main-container">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  </>
  );
}

export default App;
