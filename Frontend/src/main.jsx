import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/shared/ScrollToTop";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import { WishlistProvider } from "./context/WishlistContext";
import Wishlist from "./pages/Wishlist";
import { Toaster } from "react-hot-toast";

import "./index.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <CartProvider>
    <WishlistProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 1400,

            style: {
              background: "#ffffff",
              color: "#253D4E",
              border: "1px solid #E5E7EB",
              padding: "14px 18px",
              borderRadius: "16px",
              fontWeight: "600",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            },

            success: {
              iconTheme: {
                primary: "#3BB77E",
                secondary: "#ffffff",
              },
            },

            error: {
              iconTheme: {
                primary: "#EF4444",
                secondary: "#ffffff",
              },
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
  </CartProvider>,
  // </React.StrictMode>,
);
