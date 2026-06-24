import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, ChevronRight } from "lucide-react";
import { megaMenuData } from "../../data/megaMenuData";

function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState(megaMenuData[0]);

  return (
    <div className="hidden md:flex relative group h-14 items-center">
      {/* Trigger */}
      <button className="flex items-center gap-2 h-full text-white font-semibold hover:text-yellow-200 transition-colors cursor-pointer whitespace-nowrap">
        <Menu size={18} />
        Browse Categories
      </button>

      {/* Mega Menu */}
      <div className="absolute left-0 top-full pt-1 opacity-0 invisible pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 z-50">
        <div className="flex bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Sidebar */}
          <div className="w-72 border-r border-gray-100 bg-gray-50">
            {megaMenuData.map((category) => (
              <NavLink
                key={category.name}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                onMouseEnter={() => setActiveCategory(category)}
                className={`w-full flex items-center justify-between px-5 py-4 text-left transition-all cursor-pointer ${
                  activeCategory.name === category.name
                    ? "bg-primary/10 text-primary font-semibold"
                    : "hover:bg-white text-dark"
                }`}
              >
                <span>{category.name}</span>

                <ChevronRight size={16} />
              </NavLink>
            ))}
          </div>

          {/* Content */}
          <div className="flex gap-10 p-8 w-[780px]">
            {/* Trending */}
            <div className="min-w-[180px]">
              <h3 className="text-primary text-xl font-bold mb-5">
                Hot & Trending
              </h3>

              <div className="space-y-3">
                {activeCategory.trending.map((item) => (
                  <NavLink
                    key={item}
                    to={`/shop?search=${encodeURIComponent(item)}`}
                    className="block text-dark hover:text-primary transition-colors"
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Collections */}
            <div className="min-w-[180px]">
              <h3 className="text-primary text-xl font-bold mb-5">
                Collections
              </h3>

              <div className="space-y-3">
                {activeCategory.bottoms.map((item) => (
                  <NavLink
                    key={item}
                    to={`/shop?search=${encodeURIComponent(item)}`}
                    className="block text-dark hover:text-primary transition-colors"
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Promo Banners */}
            <div className="ml-auto flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={activeCategory.banner1}
                  alt="New Arrival"
                  className="w-64 h-36 object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div
                  className={`absolute top-4 ${
                    activeCategory.name === "Electronics" ||
                    activeCategory.name === "Men's"
                      ? "left-4 text-left"
                      : "right-4 text-right"
                  }`}
                >
                  <p className="text-sm font-medium text-black/80">10% Off</p>

                  <h4 className="text-2xl font-black text-black/60">
                    New Arrival
                  </h4>

                  <NavLink
                    to="/shop"
                    className="inline-block mt-2 text-sm underline text-black/80 cursor-pointer"
                  >
                    Shop Now
                  </NavLink>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={activeCategory.banner2}
                  alt="Hot Deals"
                  className="w-64 h-36 object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div
                  className={`absolute top-4 ${
                    activeCategory.name === "Electronics" ||
                    activeCategory.name === "Men's"
                      ? "left-4 text-left"
                      : "right-4 text-right"
                  }`}
                >
                  <p className="text-sm font-medium text-black/60">15% Off</p>

                  <h4 className="text-2xl font-black text-black/60">
                    Hot Deals
                  </h4>

                  <NavLink
                    to="/shop"
                    className="inline-block mt-2 text-sm underline text-black/80 cursor-pointer"
                  >
                    Shop Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
