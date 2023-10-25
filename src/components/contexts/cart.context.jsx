import React, { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    console.log(productToAdd);
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.product_id === productToAdd.product_id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.product_id === productToAdd.product_id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
  });

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}