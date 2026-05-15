import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <TopBar />
      <Header />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-black text-dark mb-10">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-500">
              Your cart is empty
            </h2>
          </div>
        ) : (
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center gap-5"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                {/* Info */}
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                    {item.category}
                  </p>

                  <h2 className="text-xl font-black text-dark mb-2">
                    {item.name}
                  </h2>

                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>

                  <span className="px-4 font-bold">{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <div className="text-right min-w-30">
                  <p className="text-2xl font-black text-primary">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:bg-red-50 p-3 rounded-xl transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="mt-10 flex justify-end">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-black text-dark mb-6">
                  Cart Totals
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Subtotal</span>

                    <span className="font-bold">${cartTotal.toFixed(2)}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Shipping</span>

                    <span className="font-bold">Free</span>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <span className="text-xl font-black">Total</span>

                    <span className="text-2xl font-black text-primary">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Cart;
