import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import {
  Heart,
  Eye,
  Share2,
  Check,
  GitCompare,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
} from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewsletterBanner from "../components/home/NewsletterBanner";
import ProductCard from "../components/shared/ProductCard";
import Breadcrumb from "../components/shared/BreadCrumb";
import { useWishlist } from "../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  const galleryImages = [product.image, ...(product.images || [])];

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const [quantity, setQuantity] = useState(1);

  const [activeImg, setActiveImg] = useState(0);

  const [selectedColor, setSelectedColor] = useState(0);

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "M");

  const [activeTab, setActiveTab] = useState("description");

  const { addToCart } = useCart();

  const { toggleWishlist, isInWishlist } = useWishlist();

  const wished = product ? isInWishlist(product.id) : false;

  useEffect(() => {
    setActiveImg(0);
    setSelectedColor(0);

    setSelectedSize(product?.sizes?.[0] || "M");
  }, [id]);

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Product not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <TopBar />
      <Header />
      <Navbar />
      <Breadcrumb
        items={[
          { label: "Home", link: "/" },
          { label: "Shop", link: "/shop" },
          { label: product.name },
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1      md:grid-cols-2 gap-10">
          {/* Left - Image Gallery */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible order-2 md:order-1">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                      activeImg === i
                        ? "border-primary shadow-md"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 bg-white rounded-3xl p-6 border border-gray-100 overflow-hidden order-1 md:order-2">
                <img
                  src={galleryImages[activeImg]}
                  alt={product.name}
                  className="w-full rounded-2xl object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Share + Specifications */}
            <div className="grid md:grid-cols-2 gap-6 mt-9.5">
              {/* Share */}
              <div className="bg-white rounded-3xl border border-gray-100 p-6">
                <h3 className="font-bold text-dark mb-4">Share Product</h3>

                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <FaFacebook />
                  </button>

                  <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <FaTwitter />
                  </button>

                  <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <FaPinterest />
                  </button>

                  <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <FaInstagram />
                  </button>
                </div>
              </div>

              {/* Specifications */}
              {/* {product.specifications && (
                <div className="bg-white rounded-3xl border border-gray-100 p-6">
                  <h3 className="font-bold text-dark mb-4">Specifications</h3>

                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-gray-500">{key}</span>

                          <span className="font-semibold text-dark">
                            {value}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )} */}
            </div>
          </div>

          {/* Right - Info */}
          <div>
            {/* Category */}
            <p className="text-primary font-bold uppercase text-xs tracking-widest mb-2">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="text-4xl font-black text-dark mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${
                    i < product.rating ? "text-yellow-400" : "text-gray-200"
                  }`}
                >
                  ★
                </span>
              ))}

              <span className="text-gray-400 text-sm ml-2">
                ({product.reviews} Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-primary">
                ${product.price.toFixed(2)}
              </span>

              {product.oldPrice && (
                <span className="text-gray-400 line-through text-xl">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-primary/20">
              <Check size={16} />
              In Stock
            </div>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              voluptate. Similique quia consequatur natus voluptatem vero
              distinctio.
            </p>

            {/* Product Variations */}
            <div className="space-y-6 mb-8">
              {/* Colors */}
              {product.colors?.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-dark uppercase tracking-wide mb-2">
                    Color
                  </p>

                  <div className="flex gap-2">
                    {product.colors.map((c, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(i)}
                        className={`w-7 h-7 rounded-full transition-all cursor-pointer ${
                          selectedColor === i
                            ? "ring-2 ring-offset-2 ring-primary scale-110"
                            : "hover:scale-105"
                        }`}
                        style={{
                          backgroundColor: c,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes?.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-dark uppercase tracking-wide mb-2">
                    Size
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`w-10 h-10 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                          selectedSize === s
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-dark hover:bg-gray-200"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity + Button */}
            <div className="flex items-center gap-4">
              {/* Quantity */}
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                  className="px-4 py-3 hover:bg-gray-100 transition-colors
                  cursor-pointer"
                >
                  -
                </button>

                <span className="px-5 font-bold">{quantity}</span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Add To Cart */}
              <button
                onClick={() => addToCart(product, quantity)}
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl transition-all"
              >
                Add To Cart
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={() => toggleWishlist(product)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all cursor-pointer ${
                  wished
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white border-gray-200 hover:bg-primary hover:text-white hover:border-primary"
                }`}
              >
                <Heart size={18} fill={wished ? "currentColor" : "none"} />

                {wished ? "In Wishlist" : "Add To Wishlist"}
              </button>

              <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer">
                <GitCompare size={18} />
                Compare
              </button>
            </div>

            <div className="mt-8 space-y-3 text-sm">
              <div>
                <span className="font-bold text-dark">SKU:</span>

                <span className="text-gray-500 ml-2">EVA-{product.id}</span>
              </div>

              <div>
                <span className="font-bold text-dark">Category:</span>

                <span className="text-gray-500 ml-2">{product.category}</span>
              </div>

              <div>
                <span className="font-bold text-dark">Tags:</span>

                <span className="text-gray-500 ml-2">
                  {product.tags?.join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Product Extras */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-3 gap-6"></div>
      </section>

      {/* Product Information */}
      <section className="max-w-7xl mx-auto px-4 pb-14 space-y-12">
        {/* Description */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8">
          <h2 className="text-3xl font-black text-dark mb-6">Description</h2>

          <div className="space-y-5 text-gray-600 leading-8">
            <p>
              Uninhibited carnally hired played in whimpered dear gorilla koala
              depending and much yikes off far quetzal goodness and from for
              grimaced goodness unaccountably and meadowlark near unblushingly
              crucial scallop tightly neurotic hungrily some and dear furiously
              this apart.
            </p>

            <p>
              Spluttered narrowly yikes left moth in yikes bowed this that
              grizzly much hello on spoon-fed that alas rethought much decently
              richly and wow against the frequent fluidly at formidable
              acceptably flapped besides and much circa far over the bucolically
              hey precarious goldfinch mastodon goodness gnashed a jellyfish and
              one however because.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8">
          <h2 className="text-3xl font-black text-dark mb-6">
            Additional Information
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-50 font-semibold w-1/3">
                    Type Of Packing
                  </td>

                  <td className="p-4">Bottle</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-50 font-semibold">Color</td>

                  <td className="p-4">Green, Pink, Powder Blue, Purple</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-50 font-semibold">
                    Quantity Per Case
                  </td>

                  <td className="p-4">100ml</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-50 font-semibold">
                    Ethyl Alcohol
                  </td>

                  <td className="p-4">70%</td>
                </tr>

                <tr>
                  <td className="p-4 bg-gray-50 font-semibold">Piece In One</td>

                  <td className="p-4">Carton</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-gray-600 leading-8">
            <p>
              Laconic overheard dear woodchuck wow this outrageously taut beaver
              hey hello far meadowlark imitatively egregiously hugged that yikes
              minimally unanimous pouted flirtatiously as beaver beheld above
              forward energetic across this jeepers beneficently cockily less a
              the raucously that magic upheld far so the this where crud then
              below after jeez enchanting drunkenly more much wow callously
              irrespective limpet.
            </p>
          </div>
        </div>

        {/* Packaging & Delivery */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8">
          <h2 className="text-3xl font-black text-dark mb-6">
            Packaging & Delivery
          </h2>

          <div className="space-y-5 text-gray-600 leading-8">
            <p>
              Less lion goodness that euphemistically robin expeditiously
              bluebird smugly scratched far while thus cackled sheepishly rigid
              after due one assenting regarding censorious while occasional or
              this more crane went more as this less much amid overhung
              anathematic because much held one exuberantly sheep goodness so
              where rat wry well concomitantly.
            </p>

            <p>
              Scallop or far crud plain remarkably far by thus far iguana lewd
              precociously and and less rattlesnake contrary caustic wow this
              near alas and next and pled the yikes articulate about as less
              cackled dalmatian in much less well jeering for the thanks blindly
              sentimental whimpered less across objectively fanciful grimaced
              wildly some wow and rose jeepers outgrew lugubrious luridly
              irrationally attractively dachshund.
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8">
          <h2 className="text-3xl font-black text-dark mb-8">Reviews (3)</h2>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Reviews List */}
            <div className="space-y-8">
              {[
                {
                  name: "Jacky Chan",
                  review:
                    "Thank you very fast shipping from Poland only 3 days.",
                },
                {
                  name: "Ana Rosie",
                  review: "Great low price and works well.",
                },
                {
                  name: "Steven Kenny",
                  review:
                    "Authentic and Beautiful. Love these way more than ever expected.",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-b border-gray-100 pb-6"
                >
                  <img
                    src={`https://i.pravatar.cc/80?img=${index + 10}`}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />

                  <div>
                    <div className="text-yellow-400 text-sm mb-2">★★★★★</div>

                    <h4 className="font-bold text-dark">{review.name}</h4>

                    <p className="text-gray-500 mt-2">{review.review}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rating Summary */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-yellow-400 text-xl">★★★★★</span>

                <span className="font-bold">4.8 out of 5</span>
              </div>

              {[
                ["5 Star", "90%"],
                ["4 Star", "70%"],
                ["3 Star", "50%"],
                ["2 Star", "30%"],
                ["1 Star", "10%"],
              ].map(([label, width]) => (
                <div key={label} className="flex items-center gap-3 mb-4">
                  <span className="text-sm w-14">{label}</span>

                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Review */}
          <div className="mt-14 border-t border-gray-100 pt-10">
            <h3 className="text-2xl font-black text-dark mb-6">Add a Review</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Write your review..."
              className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-primary resize-none"
            />

            <button className="mt-5 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all">
              Submit Review
            </button>
          </div>
        </div>

        {/* Why Shop With Us */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 p-8">
          <h2 className="text-2xl font-black text-dark mb-8">
            Why Shop With Us
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Truck size={22} />
              </div>

              <div>
                <h4 className="font-bold text-dark">Free Delivery</h4>

                <p className="text-gray-500 text-sm">
                  Orders over $50 qualify for free shipping.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck size={22} />
              </div>

              <div>
                <h4 className="font-bold text-dark">Secure Payment</h4>

                <p className="text-gray-500 text-sm">
                  Protected and encrypted transactions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <RotateCcw size={22} />
              </div>

              <div>
                <h4 className="font-bold text-dark">Easy Returns</h4>

                <p className="text-gray-500 text-sm">
                  30-day hassle-free return policy.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Headphones size={22} />
              </div>

              <div>
                <h4 className="font-bold text-dark">Online Support</h4>

                <p className="text-gray-500 text-sm">
                  Available 24/7 for customer assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-dark">Related Products</h2>

            <div className="w-20 h-1 bg-primary rounded-full mt-3" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <NewsletterBanner />
      <Footer />
    </div>
  );
}

export default ProductDetails;
