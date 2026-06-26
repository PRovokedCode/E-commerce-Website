import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronUp } from "lucide-react";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => {
        const startPosition = window.pageYOffset;
        const duration = 800;
        let startTime = null;

        const animateScroll = (currentTime) => {
          if (!startTime) startTime = currentTime;

          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          window.scrollTo(0, startPosition * (1 - progress));

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }}
      className={`fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-xl hover:scale-110 hover:bg-primary/90 transition-all duration-300 cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp size={22} />
    </button>
  );
}

export default ScrollToTop;