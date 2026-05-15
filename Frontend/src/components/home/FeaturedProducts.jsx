import { useState } from "react";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "../shared/ProductCard";

const tabs = [
  { key: "featured", label: "Featured" },
  { key: "popular", label: "Popular" },
  { key: "newArrivals", label: "New Arrivals" },
];

const badgeColors = {
  Sale: "bg-red-500 text-white",
  New: "bg-primary text-white",
  Hot: "bg-secondary text-dark",
};

function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Header + Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">
            This Weeks
          </p>
          <h2 className="text-2xl font-black text-dark">Featured Products</h2>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 
              cursor-pointer
                ${
                activeTab === t.key
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-500 hover:text-dark"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.filter((p) => p.tags.includes(activeTab)).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-8">
        <Link
  to="/shop"
  className="border-2 border-primary text-primary font-bold px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-all active:scale-95 inline-block"
>
  View All Products →
</Link>
      </div>
    </section>
  );
}

export default FeaturedProducts;
