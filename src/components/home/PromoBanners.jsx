import { Link } from "react-router-dom";
import { promoBanners } from "../../data/homepageData";

function PromoBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {promoBanners.map((b, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-3xl ${b.bg} min-h-65 group cursor-pointer`}
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