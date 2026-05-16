import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <Navbar />

      {/* Main */}
      <section className="flex-1 flex items-center justify-center px-4 py-14">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-[32px] border border-gray-100 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
          {/* Left Side */}
          <div className="hidden lg:flex relative bg-primary p-12 overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5" />

            <div className="relative z-10 flex flex-col justify-center text-white">
              <span className="bg-white/10 backdrop-blur-md text-sm font-bold px-4 py-2 rounded-full w-fit mb-6">
                Welcome to Evara
              </span>

              <h1 className="text-5xl font-black leading-tight mb-5">
                Fashion <br />
                Meets Modern <br />
                Shopping
              </h1>

              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Discover trending styles, premium quality products, and seamless
                shopping experiences built for modern customers.
              </p>

              <div className="flex gap-4 mt-10">
                <div className="bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl">
                  <h3 className="text-2xl font-black">10K+</h3>
                  <p className="text-sm text-white/70">Happy Customers</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl">
                  <h3 className="text-2xl font-black">500+</h3>
                  <p className="text-sm text-white/70">Premium Products</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white px-6 sm:px-10 lg:px-14 py-12 flex flex-col justify-center">
            {/* Top */}
            <div className="mb-10">
              <span className="text-primary font-bold text-sm uppercase tracking-[3px]">
                {isLogin ? "Welcome Back" : "Create Account"}
              </span>

              <h2 className="text-4xl font-black text-dark mt-3">
                {isLogin ? "Sign In" : "Sign Up"}
              </h2>

              <p className="text-gray-500 mt-3">
                {isLogin
                  ? "Login to continue shopping with Evara."
                  : "Create your account and start shopping today."}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* Name */}
              {!isLogin && (
                <div>
                  <label className="text-sm font-bold text-dark mb-2 block">
                    Full Name
                  </label>

                  <div className="flex items-center border border-gray-200 rounded-2xl px-4 h-14 focus-within:border-primary transition-all">
                    <User size={18} className="text-gray-400" />

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="flex-1 h-full px-3 outline-none bg-transparent text-sm"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="text-sm font-bold text-dark mb-2 block">
                  Email Address
                </label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 h-14 focus-within:border-primary transition-all">
                  <Mail size={18} className="text-gray-400" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 h-full px-3 outline-none bg-transparent text-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-bold text-dark mb-2 block">
                  Password
                </label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 h-14 focus-within:border-primary transition-all">
                  <Lock size={18} className="text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="flex-1 h-full px-3 outline-none bg-transparent text-sm"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Extra */}
              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
                    <input type="checkbox" className="accent-primary" />
                    Remember me
                  </label>

                  <button
                    type="button"
                    className="text-primary font-semibold hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold h-14 rounded-2xl hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20 cursor-pointer"
              >
                {isLogin ? "Login" : "Create Account"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-gray-200" />

              <span className="text-sm text-gray-400 font-medium">OR</span>

              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-4">
              <button className="h-13 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-md active:scale-95 active:shadow-sm transition-all duration-150 font-semibold text-sm cursor-pointer">
                Google
              </button>
              <button className="h-13 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-md active:scale-95 active:shadow-sm transition-all duration-150 font-semibold text-sm cursor-pointer">
                Facebook
              </button>
            </div>

            {/* Toggle */}
            <p className="text-center text-sm text-gray-500 mt-10">
              {isLogin ? "Don't have an account?" : "Already have an account?"}

              <button
                onClick={() => {
                  setIsLogin(!isLogin);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="text-primary font-bold ml-2 hover:underline cursor-pointer"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Login;
