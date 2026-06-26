import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import "./index.css";

import ScrollToTop from "./components/shared/ScrollToTop";
import Loader from "./components/shared/Loader";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import PageTransition from "./components/shared/PageTransition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/shop"
          element={
            <PageTransition>
              <Shop />
            </PageTransition>
          }
        />

        <Route
          path="/product/:id"
          element={
            <PageTransition>
              <ProductDetails />
            </PageTransition>
          }
        />

        <Route
          path="/cart"
          element={
            <PageTransition>
              <Cart />
            </PageTransition>
          }
        />

        <Route
          path="/checkout"
          element={
            <PageTransition>
              <Checkout />
            </PageTransition>
          }
        />

        <Route
          path="/order-success"
          element={
            <PageTransition>
              <OrderSuccess />
            </PageTransition>
          }
        />

        <Route
          path="/wishlist"
          element={
            <PageTransition>
              <Wishlist />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

        <Route
          path="/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div id="top">
      <BrowserRouter>
        <ScrollToTop />

        <Toaster
          position="top-right"
          containerStyle={{
            top:90,
            right:20,
          }}
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

        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <WishlistProvider>
      <AppContent />
    </WishlistProvider>
  </CartProvider>,
);
