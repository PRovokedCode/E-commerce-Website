import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewsletterBanner from "../components/home/NewsletterBanner";
import Breadcrumb from "../components/shared/BreadCrumb";

import { cartPageData } from "../data/pageData";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Cart() {
  const [shipping, setShipping] = useState(0);

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <TopBar />
      <Header />
      <Navbar />
      <Breadcrumb items={cartPageData.breadcrumb} />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-black text-dark mb-10">{cartPageData.title}</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-sm">
            <ShoppingBag size={80} className="mx-auto text-primary mb-6" />

            <h2 className="text-3xl font-black text-dark mb-3">
              {cartPageData.emptyState.title}
            </h2>

            <p className="text-gray-500 mb-8">
              {cartPageData.emptyState.description}
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all"
            >
              {cartPageData.emptyState.buttonText}
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Cart Items */}
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-center gap-6"
                >
                  <Link
                    to={`/product/${item.id}`}
                    className="flex items-center gap-6 flex-1"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-2xl hover:scale-105 transition-transform"
                    />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                        {item.category}
                      </p>

                      <h2 className="text-xl font-black text-dark mb-2 hover:text-primary transition-colors">
                        {item.name}
                      </h2>

                      <p className="text-gray-500">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-4 py-2 hover:bg-primary hover:text-white transition-all cursor-pointer"
                    >
                      -
                    </button>

                    <span className="px-4 font-bold">{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-4 py-2 hover:bg-primary hover:text-white transition-all cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right min-w-30">
                    <p className="text-3xl font-extrabold tracking-tight text-dark">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:bg-red-50 p-3 rounded-xl transition-all cursor-pointer"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all"
              >
                <ArrowLeft size={18} />
                {cartPageData.actions.continueShopping}
              </Link>

              <button
                onClick={clearCart}
                className="px-6 py-3 rounded-xl border border-red-200 bg-red-50 text-red-500 font-bold hover:bg-red-500 hover:text-white hover:border-red-500 transition-all cursor-pointer"
              >
                {cartPageData.actions.clearCart}
              </button>
            </div>

            {/* Shipping + Totals */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Shipping */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-black text-dark mb-6">
                  Calculate Shipping
                </h3>

                <p className="text-gray-500 mb-4">
                  Enter your postal code to estimate shipping charges.
                </p>

                <input
                  type="text"
                  placeholder="Postcode / ZIP"
                  className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-primary mb-4"
                />

                <button
                  onClick={() => setShipping(5)}
                  className="bg-dark text-white px-6 py-3 rounded-xl hover:bg-primary transition-all cursor-pointer"
                >
                  Update Shipping
                </button>
              </div>

              {/* Cart Totals */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-black text-dark mb-6">
                  Cart Totals
                </h3>

                <div className="space-y-5">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>

                    <span className="font-bold">${cartTotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Shipping</span>

                    <span className="font-bold">${shipping.toFixed(2)}</span>
                  </div>

                  <div className="border-t pt-4 flex justify-between">
                    <span className="text-xl font-black">Total</span>

                    <span className="text-3xl font-extrabold tracking-tight text-dark">
                      ${(cartTotal + shipping).toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full mt-8 bg-primary text-center text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all"
                >
                  Proceed To Checkout
                </Link>
              </div>
            </div>

            {/* Coupon */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-black text-dark mb-6">
                Apply Coupon
              </h3>

              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
                />

                <button className="bg-dark text-white px-8 py-3 rounded-xl hover:bg-primary transition-all cursor-pointer">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <NewsletterBanner />
      <Footer />
    </div>
  );
}

export default Cart;
