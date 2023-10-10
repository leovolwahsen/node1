import { createContext, useContext, useState } from "react";
// import { ShoppingCart } from "../components/ShoppingCart"


const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function increaseCartQuantity(id) {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex((item) => item.id === id);
      if (itemIndex === -1) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        const updatedItems = [...currentItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1,
        };
        return updatedItems;
      }
    });
  }

  function decreaseCartQuantity(id) {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const updatedItems = [...currentItems];
        if (updatedItems[itemIndex].quantity === 1) {
          updatedItems.splice(itemIndex, 1);
        } else {
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            quantity: updatedItems[itemIndex].quantity - 1,
          };
        }
        return updatedItems;
      }
      return currentItems;
    });
  }

  function removeFromCart(id) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
