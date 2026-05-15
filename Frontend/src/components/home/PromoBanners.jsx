import { Link } from "react-router-dom";

const BASE =
  "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs";

const banners = [
  {
    tag: "Smart Offer",
    title: "Save 20% on",
    highlight: "Woman Bag",
    cta: "Shop Now",
    image: `${BASE}/banner/banner-1.png`,
    bg: "bg-[#f4ecf0]",
    link:"/shop?search=bag",
  },
  {
    tag: "Sale Off",
    title: "Great Summer",
    highlight: "Collection",
    cta: "Discover Now",
    image: `${BASE}/banner/banner-2.png`,
    bg: "bg-[#eef6fa]",
    link: "/shop",
  },
];

function PromoBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {banners.map((b, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-3xl ${b.bg} min-h-[260px] group cursor-pointer`}
          >
            {/* Background Image */}
            <img
              src={b.image}
              alt={b.highlight}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) =>
                (e.target.style.display =
                  "none")
              }
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/5" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 max-w-xs h-full flex flex-col justify-center">

              <span className="text-sm text-gray-500 font-medium mb-3">
                {b.tag}
              </span>

              <h3 className="text-3xl md:text-4xl font-black text-dark leading-tight">
                {b.title}
                <br />

                {b.highlight}
              </h3>
              <Link to={b.link}>
              <button className="mt-6 text-primary font-bold text-lg hover:translate-x-1 transition-transform w-fit cursor-pointer">
                {b.cta} →
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromoBanners;