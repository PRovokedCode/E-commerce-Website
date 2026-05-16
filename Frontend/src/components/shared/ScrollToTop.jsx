import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-xl hover:scale-110 hover:bg-primary/90 transition-all duration-300 cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp size={22} />
    </a>
  );
}

export default ScrollToTop;
