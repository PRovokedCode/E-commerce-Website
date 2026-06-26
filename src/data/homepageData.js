const BASE = "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs";

export const heroSlides = [
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

export const promoBanners = [
  {
    tag: "Smart Offer",
    title: "Save 20% on",
    highlight: "Woman Bag",
    cta: "Shop Now",
    image: `${BASE}/banner/banner-1.png`,
    bg: "bg-[#f4ecf0]",
    link: "/shop?search=bag",
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

export const bannerMid = {
  left: `${BASE}/banner/banner-9.png`,
  right: `${BASE}/banner/banner-10.png`,
};

export const dealProduct = {
  id: 999,
  name: "Summer Collection New Modern Design",
  brand: "Evara Fashion",
  rating: 4,
  reviews: 65,
  price: 139.0,
  oldPrice: 160.99,
  discount: "14% OFF",
  description:
    "Premium quality summer collection featuring modern designs and comfortable materials. Perfect for any occasion, from casual outings to formal events.",
  colors: ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa", "#f472b6"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  stock: 12,
  images: [
    `${BASE}/shop/product-16-2.jpg`,
    `${BASE}/shop/product-16-1.jpg`,
    `${BASE}/shop/product-16-3.jpg`,
    `${BASE}/shop/product-16-4.jpg`,
    `${BASE}/shop/product-16-5.jpg`,
  ],
};

export const sideProducts = [
  {
    id: 1,
    name: "Daisy Casual Bag",
    price: 28,
    image: `${BASE}/shop/thumbnail-3.jpg`,
    rating: 4,
  },
  {
    id: 2,
    name: "Corduroy Shirts",
    price: 32,
    image: `${BASE}/shop/thumbnail-2.jpg`,
    rating: 5,
  },
  {
    id: 7,
    name: "Floral Blouse",
    price: 22,
    image: `${BASE}/shop/thumbnail-4.jpg`,
    rating: 4,
  },
];

export default {
  heroSlides,
  promoBanners,
  bannerMid,
  dealProduct,
  sideProducts,
};

// About page assets
export const aboutImage = `${BASE}/page/about-1.png`;

export const aboutTeamMembers = [
  {
    name: "John Carter",
    role: "CEO & Founder",
    image: `${BASE}/page/avatar-1.jpg`,
  },
  {
    name: "Sarah Wilson",
    role: "Marketing Lead",
    image: `${BASE}/page/avatar-2.jpg`,
  },
  {
    name: "Michael Scott",
    role: "Operations Manager",
    image: `${BASE}/page/avatar-3.jpg`,
  },
  {
    name: "Emma Brown",
    role: "Customer Success",
    image: `${BASE}/page/avatar-4.jpg`,
  },
];

