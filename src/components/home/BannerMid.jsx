import { Link } from "react-router-dom";
import { bannerMid } from "../../data/homepageData";

function BannerMid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Banner 1 - Dark */}
        <div
          className="relative rounded-2xl overflow-hidden flex items-center min-h-44 px-8 py-8 group"
          style={{
            background: "linear-gradient(135deg, #253D4E 0%, #1a2d3a 100%)",
          }}
        >
          {/* Decorative */}
          <div className="absolute right-0 top-0 bottom-0 w-56 opacity-10">
            <div className="w-full h-full bg-white rounded-l-full" />
          </div>
          <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 flex items-center justify-center">
            <img
              src={bannerMid.left}
              alt="Sale"
              className="max-h-36 object-contain group-hover:scale-105 transition-transform duration-500"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>

          <div className="relative z-10 max-w-xs">
            <span className="inline-block bg-secondary text-dark text-xs font-black px-3 py-1 rounded-full mb-3">
              LIMITED OFFER
            </span>
            <h3 className="text-white text-2xl font-black leading-tight mb-1">
              Best Deals <br />
              <span className="text-secondary">This Weekend</span>
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Don't miss out – offer ends Sunday!
            </p>
            <Link to="/shop">
              <button
                className="bg-secondary text-dark text-sm font-black px-5 py-2.5 rounded-xl hover:bg-yellow-400 active:scale-95 transition-all
            cursor-pointer"
              >
                Shop Deals →
              </button>
            </Link>
          </div>
        </div>

        {/* Banner 2 - Light */}
        <div
          className="relative rounded-2xl overflow-hidden flex items-center min-h-44 px-8 py-8 group"
          style={{
            background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
          }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-56 flex items-center justify-center">
            <img
              src={bannerMid.right}
              alt="New"
              className="max-h-40 object-contain group-hover:scale-105 transition-transform duration-500"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>

          <div className="relative z-10 max-w-xs">
            <span className="inline-block bg-primary text-white text-xs font-black px-3 py-1 rounded-full mb-3">
              NEW COLLECTION
            </span>
            <h3 className="text-dark text-2xl font-black leading-tight mb-1">
              Summer 2026 <br />
              <span className="text-primary">Fresh Styles</span>
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Explore the latest trends in fashion.
            </p>
            <Link to="/shop">
              <button
                className="bg-primary text-white text-sm font-black px-5 py-2.5 rounded-xl hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/20
            cursor-pointer"
              >
                Explore Now →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerMid;
