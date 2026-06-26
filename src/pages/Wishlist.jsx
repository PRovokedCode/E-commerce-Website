import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { useWishlist } from "../context/WishlistContext";

import ProductCard from "../components/shared/ProductCard";

function Wishlist() {
  const { wishlistItems } = useWishlist();

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <TopBar />
      <Header />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-black text-dark mb-10">Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-500">
              Your wishlist is empty
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Wishlist;
