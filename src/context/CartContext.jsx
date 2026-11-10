import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("labamba-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("labamba-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Temporary debugging code
  
//   console.log("Cart items:", cartItems);
//   cartItems.forEach((item) => {

//   console.log({
//     name: item.name,
//     price: item.price,
//     quantity: item.quantity,
//     subtotal: item.price * item.quantity 
//   });
//  });

  const addToCart = (food) => {
    if (food.price === null) return;

    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.id === food.id
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousItems, { ...food, quantity: 1 }];
    });
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        cartCount,
        cartTotal,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}