import { MapPin, Phone, Mail, Clock } from "lucide-react";

import toast from "react-hot-toast";

import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewsletterBanner from "../components/home/NewsletterBanner";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!");

    e.target.reset();
  };

  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <p className="text-sm text-gray-500">
            Home /<span className="text-primary font-semibold"> Contact</span>
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Contact Us
            </p>

            <h1 className="text-4xl md:text-5xl font-black text-dark leading-tight mb-6">
              Get In Touch
            </h1>

            <p className="text-gray-500 leading-relaxed text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  info: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
                },

                {
                  icon: Phone,
                  title: "Phone",
                  info: "+1 800 555 555",
                },

                {
                  icon: Mail,
                  title: "Email",
                  info: "contact@evara.com",
                },

                {
                  icon: Clock,
                  title: "Hours",
                  info: "10:00 - 18:00, Mon - Sat",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-black text-dark mb-1">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.info}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl overflow-hidden border border-gray-100 h-[500px]">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.264391102564!2d75.7712834!3d26.895103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59f0cafdb41%3A0x3cf3189829ef1f6b!2sNavRasa%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1778842770971!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-gray-50 rounded-[2rem] p-6 md:p-12 border border-gray-100">
          <div className="max-w-3xl mb-10">
            <p className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Send Message
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-dark mb-4">
              Drop Us a Line
            </h2>

            <p className="text-gray-500 leading-relaxed">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all"
              />

              <input
                type="email"
                placeholder="Your Email *"
                required
                className="bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all"
            />

            <textarea
              rows="7"
              placeholder="Your Message *"
              required
              className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all resize-none"
            />

            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-4 rounded-2xl transition-all active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Stores */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Stores
          </p>

          <h2 className="text-4xl font-black text-dark">Our Offices</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["New York", "London", "Tokyo"].map((city, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-black text-dark mb-4">{city}</h3>

              <div className="space-y-3 text-gray-500 text-sm">
                <p>
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </p>

                <p>+1 800 555 555</p>

                <p>contact@evara.com</p>
              </div>

              <button className="mt-6 text-primary font-bold hover:translate-x-1 transition-transform">
                View Map →
              </button>
            </div>
          ))}
        </div>
      </section>
      <NewsletterBanner />

      <Footer />
    </div>
  );
}

export default Contact;
