import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShoppingCartProvider>
  </React.StrictMode>
);
