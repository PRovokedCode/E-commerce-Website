import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
  {name: "About", path: "/about"},
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Navbar */}
        <div className="grid grid-cols-3 items-center h-14">
          {/* Left Side */}
          <div className="flex items-center">
            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Desktop Mega Menu */}
            <MegaMenu />
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors hover:text-yellow-200 ${
                    isActive ? "text-yellow-200" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-end gap-4">
            {/* Help */}
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-sm font-semibold">Need help?</span>

              <span className="font-black text-lg">+1 800 555 555</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive ? "bg-white text-primary" : "hover:bg-white/10"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Help */}
            <div className="mt-3 border-t border-white/10 pt-4 px-2">
              <p className="text-xs text-white/70 mb-1">Need help?</p>

              <p className="font-bold text-lg">+1 800 555 555</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
