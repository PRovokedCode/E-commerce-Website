import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroBanner from "../components/home/HeroBanner";
import PromoBanners from "../components/home/PromoBanners";
import FeaturedProducts from "../components/home/FeaturedProducts";
import DealOfTheDay from "../components/home/DealOfTheDay";
import BannerMid from "../components/home/BannerMid";
import NewsletterBanner from "../components/home/NewsletterBanner";
import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <TopBar />
      <Header />
      <Navbar/>
      <main>
        <HeroBanner />
        <PromoBanners />
        <FeaturedProducts />
        <DealOfTheDay />
        <BannerMid />
        <NewsletterBanner />
      </main>
      <Footer />
    </div>
  );
}

export default Home;