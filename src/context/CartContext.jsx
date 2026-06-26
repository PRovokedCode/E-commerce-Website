import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const clearCart = () => {
    setCartItems([]);
  };

  const [lastAddedTime, setLastAddedTime] = useState(0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add To Cart
  const addToCart = (product, quantity = 1) => {
    const now = Date.now();

    if (now - lastAddedTime < 250) {
      toast.error("Please slow down a bit 😅", {
        id: "cart-limit",
      });

      return;
    }

    setLastAddedTime(now);
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      toast.success(`${product.name} added to cart`);

      // Already exists
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      // New item
      return [
        ...prev,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // Unique Product Count
  const cartCount = cartItems.length;

  // Total Price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook
export function useCart() {
  return useContext(CartContext);
}
