import { Mail } from "lucide-react";

function NewsletterBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div
        className="relative rounded-3xl overflow-hidden px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ background: "linear-gradient(135deg, #253D4E 0%, #1a2d3a 60%, #0f1e27 100%)" }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-secondary/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

        {/* Left: Text */}
        <div className="relative z-10 text-center md:text-left">
          <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <Mail size={20} className="text-primary" />
            </div>
            <span className="text-secondary text-xs font-black uppercase tracking-widest">Newsletter</span>
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-2">
            Subscribe & Get{" "}
            <span className="text-secondary">10% Off</span>
          </h3>
          <p className="text-white/50 text-sm max-w-xs">
            Get exclusive deals, new arrivals, and insider-only discounts delivered to your inbox.
          </p>
        </div>

        {/* Right: Form */}
        <div className="relative z-10 w-full md:w-auto md:min-w-105">
          <div className="flex items-center bg-white/10 backdrop-blur border border-white/10 rounded-2xl overflow-hidden focus-within:border-primary/50 transition-all">
            <div className="px-4 text-white/40">
              <Mail size={18} />
            </div>
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-1 bg-transparent py-4 pr-2 text-white placeholder-white/30 text-sm outline-none"
            />
            <button className="bg-primary text-white font-black text-sm px-6 py-4 hover:bg-primary/90 active:scale-95 transition-all m-1 rounded-xl">
              Subscribe
            </button>
          </div>
          <p className="text-white/30 text-xs mt-2 text-center">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewsletterBanner;