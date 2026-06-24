import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewsletterBanner from "../components/home/NewsletterBanner";
import { orderSuccessPageData } from "../data/pageData";

function OrderSuccess() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <TopBar />
      <Header />
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 text-center">
          
          <CheckCircle2
            size={90}
            className="mx-auto text-primary mb-6"
          />

          <h1 className="text-5xl font-black text-dark mb-4">
            {orderSuccessPageData.title}
          </h1>

          <p className="text-gray-500 text-lg mb-8">
            {orderSuccessPageData.description}
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 mb-10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {orderSuccessPageData.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-gray-500 text-sm mb-1">{stat.label}</p>

                  <p className={`font-black ${stat.value === "Processing" ? "text-primary" : "text-dark"}`}>
                    {stat.prefix ? `${stat.prefix}${Math.floor(100000 + Math.random() * 900000)}` : stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {orderSuccessPageData.buttons.map((button, i) => (
              <Link
                key={i}
                to={button.to}
                className={
                  button.variant === "primary"
                    ? "bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all"
                    : "border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:border-primary hover:text-primary transition-all"
                }
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <NewsletterBanner />
      <Footer />
    </div>
  );
}

export default OrderSuccess;