import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AllProducts from "../components/products/AllProducts";
import Navbar from "../components/layout/Navbar";

function Shop() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <TopBar />
      <Header />
      <Navbar/>
      {/* Breadcrumb */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <p className="text-sm text-gray-500">
            Home /<span className="text-primary font-semibold"> Shop</span>
          </p>
        </div>
      </section>

      <main>
        <AllProducts />
      </main>

      <Footer />
    </div>
  );
}

export default Shop;