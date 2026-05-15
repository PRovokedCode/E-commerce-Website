import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ShoppingCart, Heart, Eye, Star } from "lucide-react";

import CountdownTimer from "../shared/CountdownTimer";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

import toast from "react-hot-toast";

const BASE =
  "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop";

const dealProduct = {
  id: 999,

  name: "Summer Collection New Modern Design",

  brand: "Evara Fashion",

  rating: 4,

  reviews: 65,

  price: 139.0,

  oldPrice: 160.99,

  discount: "14% OFF",

  description:
    "Premium quality summer collection featuring modern designs and comfortable materials. Perfect for any occasion, from casual outings to formal events.",

  colors: ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa", "#f472b6"],

  sizes: ["XS", "S", "M", "L", "XL", "XXL"],

  stock: 12,

  images: [
    `${BASE}/product-16-2.jpg`,
    `${BASE}/product-16-1.jpg`,
    `${BASE}/product-16-3.jpg`,
    `${BASE}/product-16-4.jpg`,
    `${BASE}/product-16-5.jpg`,
  ],
};

const dealEnd = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();

const sideProducts = [
  {
    id: 1,
    name: "Daisy Casual Bag",
    price: 28,
    image: `${BASE}/thumbnail-3.jpg`,
    rating: 4,
  },

  {
    id: 2,
    name: "Corduroy Shirts",
    price: 32,
    image: `${BASE}/thumbnail-2.jpg`,
    rating: 5,
  },

  {
    id: 7,
    name: "Floral Blouse",
    price: 22,
    image: `${BASE}/thumbnail-4.jpg`,
    rating: 4,
  },
];

function DealOfTheDay() {
  const [activeImg, setActiveImg] = useState(0);

  const [selectedColor, setSelectedColor] = useState(0);

  const [selectedSize, setSelectedSize] = useState("M");

  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const { toggleWishlist, isInWishlist } = useWishlist();

  const wished = isInWishlist(dealProduct.id);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">
            Today's
          </p>

          <h2 className="text-2xl font-black text-dark">Deal of the Day</h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 font-medium">Ends in:</span>

          <CountdownTimer targetDate={dealEnd} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Images */}
        <div className="lg:col-span-4 flex gap-3">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2">
            {dealProduct.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                  activeImg === i
                    ? "border-primary shadow-md"
                    : "border-gray-100 hover:border-gray-300"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 rounded-2xl overflow-hidden bg-gray-50 aspect-square relative group">
            <img
              src={dealProduct.images[activeImg]}
              alt={dealProduct.name}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />

            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-black px-2 py-1 rounded-lg">
              {dealProduct.discount}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Brand */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">
                {dealProduct.brand}
              </p>

              <h3 className="text-xl font-black text-dark leading-tight mt-1">
                {dealProduct.name}
              </h3>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < dealProduct.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-200 fill-gray-200"
                    }
                  />
                ))}
              </div>

              <span className="text-xs text-gray-400">
                ({dealProduct.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-primary">
                ${dealProduct.price.toFixed(2)}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ${dealProduct.oldPrice.toFixed(2)}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
              {dealProduct.description}
            </p>

            {/* Colors */}
            <div>
              <p className="text-xs font-bold text-dark uppercase tracking-wide mb-2">
                Color
              </p>

              <div className="flex gap-2">
                {dealProduct.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-7 h-7 rounded-full transition-all
                      cursor-pointer ${
                        selectedColor === i
                          ? "ring-2 ring-offset-2 ring-primary scale-110"
                          : "hover:scale-105"
                      }`}
                    style={{
                      backgroundColor: c,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <p className="text-xs font-bold text-dark uppercase tracking-wide mb-2">
                Size
              </p>

              <div className="flex gap-2 flex-wrap">
                {dealProduct.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-10 h-10 rounded-lg text-sm font-bold transition-all 
                      cursor-pointer ${
                        selectedSize === s
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-dark hover:bg-gray-200"
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 mt-4">
            {/* Qty + Cart */}
            <div className="flex gap-3">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-2.5 text-dark font-bold hover:bg-gray-50
                  cursor-pointer"
                >
                  −
                </button>

                <span className="px-4 py-2.5 font-bold text-sm">{qty}</span>

                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3 py-2.5 text-dark font-bold hover:bg-gray-50
                  cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(dealProduct, qty)}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-all
                cursor-pointer"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>

            {/* Wishlist + Compare */}
            <div className="flex gap-3">
              <button
                onClick={() => toggleWishlist(dealProduct)}
                className={`flex-1 flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl transition-all 
                  cursor-pointer ${
                    wished
                      ? "bg-red-500 text-white"
                      : "border border-gray-200 text-dark hover:border-primary hover:text-primary"
                  }`}
              >
                <Heart size={15} />

                {wished ? "Wishlisted" : "Wishlist"}
              </button>

              <button
                onClick={() => toast.success("Added to compare list")}
                className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-dark text-sm font-semibold py-2.5 rounded-xl hover:border-primary hover:text-primary transition-all
                cursor-pointer"
              >
                <Eye size={15} />
                Compare
              </button>
            </div>
          </div>
        </div>

        {/* Side Products */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="font-black text-dark text-sm">Best Sellers</h3>
            </div>

            <div className="divide-y divide-gray-50">
              {sideProducts.map((p, i) => (
                <div
                  key={i}
                  onClick={() => navigate(`/product/${p.id}`)}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-dark group-hover:text-primary transition-colors truncate">
                      {p.name}
                    </p>

                    <p className="text-primary font-black text-sm mt-1">
                      ${p.price.toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      addToCart(
                        {
                          ...p,
                          id: p.id,
                          quantity: 1,
                        },
                        1,
                      );
                    }}
                    className="opacity-0 group-hover:opacity-100 bg-primary text-white p-2 rounded-lg transition-all
                    cursor-pointer"
                  >
                    <ShoppingCart size={13} />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4">
              <a
                href="/shop"
                className="block text-center text-sm font-bold text-primary hover:underline underline-offset-4"
              >
                View All Best Sellers →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealOfTheDay;
