import Login from "../../pages/Login";
import { Link } from "react-router-dom";

const TopBar = () => (
  <div className="bg-dark text-white text-xs py-2 px-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="hidden md:flex gap-6 text-white/60 ">
        <span>
          🎉 Get great devices up to{" "}
          <strong className="text-secondary">50% off</strong>
        </span>
        <span>
          💎 Trendy jewelry – save up to{" "}
          <strong className="text-secondary">35% off</strong>
        </span>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <select className="bg-transparent text-white/60 outline-none cursor-pointer">
          <option>English</option>
          <option>Français</option>
          <option>Deutsch</option>
        </select>
        <span className="text-white/80">|</span>
        <Link
          to="/login"
          className="bg-primary text-white border-2 border-primary font-bold px-8 py-3 rounded-xl hover:bg-white hover:text-primary hover:border-white transition-all active:scale-95 inline-block"
        >
          Login / Signup
        </Link>
      </div>
    </div>
  </div>
);

export default TopBar;
