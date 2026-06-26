import { Link } from "react-router-dom";
import { FaMapPin } from "react-icons/fa";

const TopBar = () => (
  <div className="bg-dark text-white text-xs py-2 px-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      {/* Left Side */}
      <div className="hidden md:flex gap-6 text-white/60">
        <span>
          Need help?
          <strong className="text-secondary"> +1 800 555 555</strong>
          
        </span>

        <span>|</span>
        
        <Link to="/Contact">
          <span className="flex items-center gap-1">
            <FaMapPin className="text-white" />
            <strong className="text-secondary">Location</strong>
          </span>
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 ml-auto">
        <select className="bg-transparent text-white/70 outline-none cursor-pointer">
          <option className="text-black">English</option>
          <option className="text-black">Français</option>
          <option className="text-black">Deutsch</option>
        </select>

        <span className="text-white/80">|</span>

        <Link
          to="/login"
          className="bg-primary text-white border-2 border-primary font-bold px-4 py-2 rounded-xl hover:bg-white hover:text-primary hover:border-white transition-all active:scale-95 inline-block"
        >
          Login / Signup
        </Link>
      </div>
    </div>
  </div>
);

export default TopBar;
