import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaAppStore,
  FaGooglePlay,
  FaMapPin,
} from "react-icons/fa";

import { Phone, Mail, MapPin, Clock, Send, Apple, Play } from "lucide-react";

const BASE = "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs";

const footerLinks = {
  company: {
    title: "Company",

    links: [
      {
        label: "About Us",
        path: "/about",
      },

      {
        label: "Delivery Information",
        path: "/delivery",
      },

      {
        label: "Privacy Policy",
        path: "/privacy",
      },

      {
        label: "Terms & Conditions",
        path: "/terms",
      },

      {
        label: "Contact Us",
        path: "/contact",
      },

      {
        label: "Support Center",
        path: "/support",
      },
    ],
  },

  account: {
    title: "My Account",

    links: [
      {
        label: "Sign In",
        path: "/login",
      },

      {
        label: "View Cart",
        path: "/cart",
      },

      {
        label: "My Wishlist",
        path: "/wishlist",
      },

      {
        label: "Track My Order",
        path: "/orders",
      },

      {
        label: "Help",
        path: "/help",
      },

      {
        label: "Returns",
        path: "/returns",
      },
    ],
  },

  categories: {
    title: "Categories",

    links: [
      {
        label: "Women's Clothing",
        path: "/shop?category=Women's",
      },

      {
        label: "Men's Clothing",
        path: "/shop?category=Men's",
      },

      {
        label: "Shoes & Bags",
        path: "/shop?search=bag",
      },

      {
        label: "Jewelry",
        path: "/shop?search=jewelry",
      },
    ],
  },
};

const socialLinks = [
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/",
    label: "Facebook",
    color: "hover:bg-blue-600",
  },
  { Icon: FaTwitter, 
    href: "https://x.com/", 
    label: "Twitter", 
    color: "hover:bg-sky-500" },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/",
    label: "Instagram",
    color: "hover:bg-pink-600",
  },
  { Icon: FaYoutube, 
    href: "https://www.youtube.com/", 
    label: "YouTube", 
    color: "hover:bg-red-600" },
];

function Footer() {
  return (
    <footer className="bg-dark text-white mt-8">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              Icon: FaMapPin,
              label: "Our Location",
              value: "5171 W Campbell Ave, Kent, Utah 53127",
            },
            { Icon: Phone, label: "Hotline", value: "(+01) - 2345 - 6789" },
            { Icon: Mail, label: "Email", value: "evara@evara.com" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-wide">
                  {label}
                </p>
                <p className="text-sm font-bold text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <a href="/" className="shrink-0">
            <img
              src={`${BASE}/theme/logo-2.svg`}
              alt="Evara Logo"
              className="h-10 w-auto mb-4"
            />
          </a>
          <p className="text-white/40 text-sm leading-relaxed mb-5">
            Your one-stop destination for fashion, electronics, and lifestyle
            products at unbeatable prices.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={label}
                className={`w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center ${color} transition-all hover:scale-110`}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {Object.values(footerLinks).map((section) => (
          <div key={section.title}>
            <h4 className="text-white font-black text-sm mb-4 uppercase tracking-wide">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/40 text-sm hover:text-primary transition-colors flex items-center gap-1.5 group w-fit"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-white font-black text-sm mb-4 uppercase tracking-wide">
            Install App
          </h4>
          <p className="text-white/40 text-xs mb-3">
            From App Store or Google Play
          </p>
          <div className="space-y-2 mb-5">
            {[
              {
                label: "App Store",
                icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                link:"https://apps.apple.com/us/app/amazon-shopping/id297606951",
              },
              {
                label: "Google Play",
                icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg",
                link:"https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping&hl=en_IN"
              },
            ].map((store) => (
              <a
                key={store.label}
                href={store.link}
                rel="nooperner noreferrer"
                target="_blank"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-3 py-2.5 rounded-xl transition-all group"
              >
                <img
                  src={store.icon}
                  alt={store.label}
                  className="w-6 h-6 object-contain"
                />

                <div>
                  <p className="text-[10px] text-white/40">Download on the</p>

                  <p className="text-xs font-bold text-white group-hover:text-primary transition-colors">
                    {store.label}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-[11px] text-white/40 mb-2 uppercase tracking-wide">
            Quick Subscribe
          </p>
          <div className="flex items-center bg-white/10 rounded-xl overflow-hidden border border-white/10 focus-within:border-primary/50 transition-all">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-3 py-2.5 text-xs text-white placeholder-white/30 outline-none"
            />
            <button className="bg-primary p-2.5 text-white hover:bg-primary/90 transition-colors m-1 rounded-lg">
              <Send size={13} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center">
            © 2024 Evara. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-white/30 text-xs">We accept:</span>
            <img
              src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
              alt=""
              className="w-10 h-auto"
            />
            <img
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-icon-credit-cards-icon-set-softiconsm-21.png"
              alt=""
              className="w-10 h-auto"
            />
            <img
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-png-images-for-download-crazypngm-24.png"
              alt=""
              className="w-10 h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;