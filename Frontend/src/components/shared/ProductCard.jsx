import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

const badgeColors = {
  Sale: "bg-red-500 text-white",
  New: "bg-primary text-white",
  Hot: "bg-secondary text-dark",
};

function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const { addToCart } = useCart();

  const wished = isInWishlist(product.id);

  const [quickViewOpen, setQuickViewOpen] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[11px] font-bold px-2 py-0.5 rounded z-10 ${badgeColors[product.badge]}`}
          >
            {product.badge}
          </span>
        )}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        {/* Hover actions */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {/* Quick View */}
          <div className="relative group/tooltip">
            <button
              onClick={() => setQuickViewOpen(true)}
              className="bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors text-gray-700 cursor-pointer"
            >
              <Eye size={15} />
            </button>

            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-dark text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-all whitespace-nowrap pointer-events-none">
              Quick View
            </span>
          </div>

          {/* Wishlist */}
          <div className="relative group/tooltip">
            <button
              onClick={() => toggleWishlist(product)}
              className={`p-2 rounded-full shadow-md transition-colors cursor-pointer ${
                wished
                  ? "bg-red-500 text-white"
                  : "bg-white hover:bg-primary hover:text-white text-gray-700"
              }`}
            >
              <Heart size={15} />
            </button>

            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-dark text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-all whitespace-nowrap pointer-events-none">
              Wishlist
            </span>
          </div>

          {/* Cart */}
          <div className="relative group/tooltip">
            <button
              onClick={() => addToCart(product, 1)}
              className="bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors text-gray-700 cursor-pointer"
            >
              <ShoppingCart size={15} />
            </button>

            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-dark text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-all whitespace-nowrap pointer-events-none">
              Add To Cart
            </span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-dark hover:text-primary cursor-pointer line-clamp-2 mb-2 leading-snug">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-sm ${i < product.rating ? "text-yellow-400" : "text-gray-200"}`}
            >
              ★
            </span>
          ))}
          <span className="text-[11px] text-gray-400 ml-1">
            ({product.reviews})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-base">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
      {/* Quick View Modal */}
      {quickViewOpen && (
        <div
          onClick={() => setQuickViewOpen(false)}
          className="fixed inset-0 z-[100] bg-black/50 overflow-y-auto p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden relative mx-auto my-10 animate-in fade-in zoom-in duration-200"
          >
            {/* Close */}
            <button
              onClick={() => setQuickViewOpen(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-all"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="bg-gray-50 flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[220px] md:max-h-[400px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-8">
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
                  {product.category}
                </p>

                <h2 className="text-2xl md:text-3xl font-black text-dark mb-4">
                  {product.name}
                </h2>

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-primary">
                    ${product.price.toFixed(2)}
                  </span>

                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-lg">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-gray-500 leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. This
                  is a quick preview of the product.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl transition-all"
                  >
                    Add To Cart
                  </button>

                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`px-5 rounded-2xl border transition-all ${
                      wished
                        ? "bg-red-500 text-white border-red-500"
                        : "border-gray-200 hover:border-primary"
                    }`}
                  >
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
