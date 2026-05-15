import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlistItems");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Toggle Wishlist
  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      // Remove if exists
if (exists) {

  toast.success(
    `${product.name} removed from wishlist`
  );

  return prev.filter(
    (item) => item.id !== product.id
  );
}
      // Add new
      toast.success(
  `${product.name} added to wishlist ❤️`
);
      return [...prev, product];
    });
  };

  // Check if product exists
  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  // Count
  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

// Custom Hook
export function useWishlist() {
  return useContext(WishlistContext);
}
