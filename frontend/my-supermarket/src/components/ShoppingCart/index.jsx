import React from 'react';
import { useShoppingCart } from '../../context/ShoppingCartContext';

function MyComponent() {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    openCart,
    closeCart,
  } = useShoppingCart();

  
}

export default MyComponent;
