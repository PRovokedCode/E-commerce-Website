import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BASE = "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs";

const slides = [
  {
    tag: "Women's Fashion",
    title: "Don't miss amazing",
    highlight: "grocery deals",
    subtitle: "Sign up for the daily newsletter and get exclusive deals.",
    cta: "Shop Now",
    image: `${BASE}/slider/slider-1.png`,
    bg: "from-emerald-50 via-teal-50 to-cyan-50",
  },
  {
    tag: "Fashion Sale",
    title: "Latest gadgets at",
    highlight: "unbeatable prices",
    subtitle: "Explore our curated collection of top-rated Fashion Products.",
    cta: "Shop Now",
    image: `${BASE}/slider/slider-2.png`,
    bg: "from-blue-50 via-indigo-50 to-violet-50",
  },
  {
    tag: "New Arrivals",
    title: "Fresh styles for",
    highlight: "every season",
    subtitle: "Discover the newest trends in fashion and lifestyle.",
    cta: "Explore Now",
    image: `${BASE}/slider/slider-3.png`,
    bg: "from-rose-50 via-pink-50 to-fuchsia-50",
  },
];

function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const [animating, setAnimating] = useState(false);

  const go = (dir) => {
    if (animating) return;

    setAnimating(true);

    setTimeout(() => {
      setCurrent((c) => (c + dir + slides.length) % slides.length);

      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);

    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      {/* Main Slider */}
      <div
        className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${slide.bg} min-h-[420px] flex items-center transition-all duration-500`}
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-white/10 translate-y-1/3 pointer-events-none" />

        <div
          className={`relative z-10 flex flex-col md:flex-row items-center w-full px-8 py-10 gap-6 transition-opacity duration-300 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Text */}
          <div className="flex-1 space-y-4">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {slide.tag}
            </span>

            <h1 className="text-3xl md:text-4xl xl:text-5xl font-black text-dark leading-tight">
              {slide.title}

              <br />

              <span className="text-primary">{slide.highlight}</span>
            </h1>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {slide.subtitle}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="/shop"
                className="block text-center text-sm font-bold text-primary hover:underline underline-offset-4"
              >
              <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer
              ">
                {slide.cta}
              </button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center items-end">
            <img
              src={slide.image}
              alt="Hero"
              className="max-h-72 md:max-h-[420px] object-contain drop-shadow-2xl"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => go(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-dark transition-all hover:scale-110 z-20 cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => go(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-dark transition-all hover:scale-110 z-20 cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-primary" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
