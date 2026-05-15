import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewsletterBanner from "../components/home/NewsletterBanner";
import ProductCard from "../components/shared/ProductCard";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));
const relatedProducts = products
  .filter((p) => p.id !== product.id)
  .slice(0, 4);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Product not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <TopBar />
      <Header />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Image */}
          <div>
            <div className="bg-white rounded-3xl p-6 border border-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Right - Info */}
          <div>
            {/* Category */}
            <p className="text-primary font-bold uppercase text-xs tracking-widest mb-2">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="text-4xl font-black text-dark mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${
                    i < product.rating ? "text-yellow-400" : "text-gray-200"
                  }`}
                >
                  ★
                </span>
              ))}

              <span className="text-gray-400 text-sm ml-2">
                ({product.reviews} Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-primary">
                ${product.price.toFixed(2)}
              </span>

              {product.oldPrice && (
                <span className="text-gray-400 line-through text-xl">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              voluptate. Similique quia consequatur natus voluptatem vero
              distinctio.
            </p>

            {/* Quantity + Button */}
            <div className="flex items-center gap-4">
              {/* Quantity */}
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>

                <span className="px-5 font-bold">{quantity}</span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add To Cart */}
              <button
                onClick={() => addToCart(product, quantity)}
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl transition-all"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-dark">Related Products</h2>

            <div className="w-20 h-1 bg-primary rounded-full mt-3" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <NewsletterBanner />
      <Footer />
    </div>
  );
}

export default ProductDetails;
