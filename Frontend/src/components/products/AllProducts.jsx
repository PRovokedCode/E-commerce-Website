import { useMemo, useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { products } from "../../data/products";
import ProductCard from "../shared/ProductCard";

const categories = ["All", ...new Set(products.map((p) => p.category))];

function AllProducts() {

  const productsRef = useRef(null);

  const [sortBy, setSortBy] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const selectedCategory = searchParams.get("category") || "All";

  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  useEffect(() => {

  productsRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

}, [currentPage]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];


    /* Category Filter */
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    /* Search Filter */
    const finalSearch = searchQuery;

    if (finalSearch.trim()) {
      filtered = filtered.filter((p) =>
        p.name
          .toLowerCase()
          .includes(finalSearch.toLowerCase().replace(/s$/, "")),
      );
    }

    /* Sorting */
    if (sortBy === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  const productsPerPage = 8;

const totalPages = Math.ceil(
  filteredProducts.length /
    productsPerPage
);

const startIndex =
  (currentPage - 1) *
  productsPerPage;

const paginatedProducts =
  filteredProducts.slice(
    startIndex,
    startIndex +
      productsPerPage
  );

  return (
    <section
  ref={productsRef}
  className="max-w-7xl mx-auto px-4 py-10"
>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        <div>

          <h2 className="text-3xl font-black text-dark">All Products</h2>
        </div>

        {/* Sort */}
        <div className="flex gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary cursor-pointer"
          >
            <option value="default">Sort By</option>

            <option value="low-high">Price: Low to High</option>

            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Mobile Categories */}
      <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              const params = new URLSearchParams(searchParams);

              if (category === "All") {
                params.delete("category");
              } else {
                params.set("category", category);
              }

              navigate(`/shop?${params.toString()}`);
            }}
            className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-white border border-gray-200 text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Shop Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="bg-white rounded-3xl border border-gray-100 p-6 sticky top-32">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-black text-dark mb-4">Categories</h3>

              <div className="flex flex-col gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      const params = new URLSearchParams(searchParams);

                      if (category === "All") {
                        params.delete("category");
                      } else {
                        params.set("category", category);
                      }

                      navigate(`/shop?${params.toString()}`);

                      setMobileFiltersOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Type */}
            <div>
              <h3 className="text-lg font-black text-dark mb-4">
                Product Type
              </h3>

              <div className="flex flex-col gap-2">
                {["Sale", "New", "Hot"].map((badge) => (
                  <button
                    key={badge}
                    className="text-left px-4 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 text-gray-600 transition-all cursor-pointer"
                  >
                    {badge}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="lg:col-span-3">
          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
              {/* Prev */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:border-primary hover:text-primary transition-all"
              >
                Prev
              </button>

              {/* Pages */}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-11 h-11 rounded-xl font-bold transition-all ${
                    currentPage === index + 1
                      ? "bg-primary text-white"
                      : "bg-white border border-gray-200 hover:border-primary hover:text-primary"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:border-primary hover:text-primary transition-all"
              >
                Next
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold text-gray-500">
                No products found
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
