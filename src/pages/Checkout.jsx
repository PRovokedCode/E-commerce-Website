import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewsletterBanner from "../components/home/NewsletterBanner";
import Breadcrumb from "../components/shared/BreadCrumb";
import { checkoutPageData } from "../data/pageData";

import { useCart } from "../context/CartContext";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const { cartItems, cartTotal, clearCart } = useCart();

  const [showCoupon, setShowCoupon] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const shipping = 5;

  const handlePlaceOrder = () => {
    if (!cartItems.length) {
      toast.error("Your cart is empty");
      return;
    }

    const requiredFields = [
      "firstName",
      "lastName",
      "address",
      "city",
      "zip",
      "phone",
      "email",
    ];

    const emptyField = requiredFields.find((field) => !formData[field].trim());

    if (emptyField) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    clearCart();
    navigate("/order-success", { replace: true });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopBar />
      <Header />
      <Navbar />
      <Breadcrumb items={checkoutPageData.breadcrumb} />

      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-dark mb-2">{checkoutPageData.title}</h1>

          <p className="text-gray-500">{checkoutPageData.description}</p>
        </div>

        {/* Login Notice */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-5">
          <p className="text-gray-600">
            {checkoutPageData.loginNotice.message}{" "}
            <Link to={checkoutPageData.loginNotice.linkTo} className="text-primary font-semibold">
              {checkoutPageData.loginNotice.linkText}
            </Link>
          </p>
        </div>

        {/* Coupon Notice */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-8">
          <p className="text-gray-600">
            {checkoutPageData.couponNotice.message}{" "}
            <button
              onClick={() => setShowCoupon(!showCoupon)}
              className="text-primary font-semibold cursor-pointer"
            >
              {checkoutPageData.couponNotice.actionText}
            </button>
          </p>

          {showCoupon && (
            <div className="mt-5 border-t border-gray-100 pt-5">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
                />

                <button className="bg-dark text-white px-6 py-3 rounded-xl hover:bg-primary transition-all cursor-pointer">
                  Apply Coupon
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Main Checkout Layout */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-8">
          {/* Billing Details */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8">
            <h2 className="text-3xl font-black text-dark mb-8">
              {checkoutPageData.billingTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                className="border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-primary"
              />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                className="border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-primary"
              />

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street Address *"
                className="md:col-span-2 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-primary"
              />

              <input
                type="text"
                placeholder="Apartment, suite, unit etc."
                className="md:col-span-2 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-primary"
              />

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Town / City *"
                className="border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-primary"
              />

              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Postcode / ZIP *"
                className="border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-primary"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone *"
                className="md:col-span-2 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-primary"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="md:col-span-2 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-primary"
              />
            </div>

            {/* Additional Info */}
            <div className="mt-10">
              <h3 className="text-2xl font-black text-dark mb-5">
                {checkoutPageData.additionalInfoTitle}
              </h3>

              <textarea
                rows="5"
                placeholder={checkoutPageData.notesPlaceholder}
                className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-primary resize-none"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 p-8">
              <h2 className="text-3xl font-black text-dark mb-8">{checkoutPageData.orderSummaryTitle}</h2>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <p className="font-semibold text-dark">{item.name}</p>

                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <span className="font-bold text-dark">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                <div className="border-t pt-5 mt-5 space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>

                    <span className="font-bold">${cartTotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>

                    <span className="font-bold">${shipping.toFixed(2)}</span>
                  </div>

                  <div className="border-t pt-4 flex justify-between">
                    <span className="text-xl font-black">Total</span>

                    <span className="text-3xl font-black text-primary">
                      ${(cartTotal + shipping).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8">
              <h3 className="text-2xl font-black text-dark mb-6">
                Payment Method
              </h3>

              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                  />
                  Direct Bank Transfer
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "check"}
                    onChange={() => setPaymentMethod("check")}
                  />
                  Check Payment
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                  />
                  Paypal
                </label>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={!cartItems.length}
                className="w-full mt-8 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>

      <NewsletterBanner />
      <Footer />
    </div>
  );
}

export default Checkout;
