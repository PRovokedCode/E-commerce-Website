import { Search, Heart, ShoppingCart, X } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useState, useEffect } from "react";
import { logo } from "../../data/assets";

function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <header
      className={`bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 flex items-center gap-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="Evara Logo"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-7" : "h-10"
            }`}
          />
        </Link>

        {/* Search */}
        <form
          onSubmit={(e) => {
            e.preventDefault();

            navigate(`/shop?search=${search}`);
          }}
          className="flex flex-1 items-center border-2 border-primary rounded-lg overflow-hidden"
        >
          <div className="relative flex-1">
            <input
              type="text"
              placeholder={
                window.innerWidth < 640 ? "Search..." : "Search for items..."
              }
              className="w-full px-4 py-2 text-sm outline-none pr-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Clear Search */}
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  navigate("/shop");
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dark transition-colors
                cursor-pointer"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={() => {
              navigate(`/shop?search=${search}`);
            }}
            className="bg-primary px-4 py-2.5 text-white hover:bg-primary/90 transition-colors
            cursor-pointer"
          >
            <Search size={18} />
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Link
            to="/wishlist"
            className="relative flex flex-col items-center text-gray-600 hover:text-primary transition-colors"
          >
            <Heart size={22} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] rounded-full size-4 flex items-center justify-center">
              {wishlistCount}
            </span>
            <span className="text-[11px] mt-1 hidden md:block">Wishlist</span>
          </Link>
          <Link
            to="/cart"
            className="relative flex flex-col items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ShoppingCart size={22} />

            <span className="absolute -top-2 -right-2 bg-secondary text-dark text-[10px] rounded-full size-4 flex items-center justify-center font-bold">
              {cartCount}
            </span>

            <span className="text-[11px] mt-1 hidden md:block">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
