import React, { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext({});

function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const getStoreQuantity = (id) => {
    return cartItems.find((storeItem) => storeItem.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === id) == null) {
        return [...prev, { id, quantity: 1 }];
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === id) == null) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItemsFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getStoreQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemsFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
