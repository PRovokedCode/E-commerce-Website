import { FaTruck, FaShieldAlt, FaHeadset, FaDollarSign } from "react-icons/fa";

import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewsletterBanner from "../components/home/NewsletterBanner";
import Breadcrumb from "../components/shared/BreadCrumb";
import { aboutImage, aboutTeamMembers } from "../data/homepageData";

function About() {
  const features = [
    {
      icon: FaTruck,
      title: "Fast Delivery",
      desc: "Quick and reliable shipping on all orders.",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Payment",
      desc: "Protected transactions with trusted gateways.",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      desc: "Our support team is always ready to help.",
    },
    {
      icon: FaDollarSign,
      title: "Best Prices",
      desc: "High-quality products at competitive prices.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "10K+", label: "Products" },
    { value: "120+", label: "Brands" },
    { value: "99%", label: "Satisfaction" },
  ];

  const teamMembers = aboutTeamMembers;

  const testimonials = [
    {
      name: "J. Bezos",
      company: "Adobe Jsc",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    },
    {
      name: "B. Gates",
      company: "Adobe Jsc",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    },
    {
      name: "B. Meyers",
      company: "Adobe Jsc",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    },
    {
      name: "J. Bezos",
      company: "Adobe Jsc",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    },
    {
      name: "B. Gates",
      company: "Adobe Jsc",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    },
    {
      name: "B. Meyers",
      company: "Adobe Jsc",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    },
  ];

  return (
    <div className="bg-white">
      <TopBar />
      <Header />
      <Navbar />
      <Breadcrumb
        items={[{ label: "Home", link: "/" }, { label: "About Us" }]}
      />
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={aboutImage}
            alt="About"
            className="w-full rounded-3xl"
          />

          <div>
            <span className="text-primary font-bold uppercase tracking-wider">
              About Us
            </span>

            <h1 className="text-5xl font-black text-dark mt-4 mb-6">
              Bringing Quality Products To Everyone
            </h1>

            <p className="text-gray-600 leading-8">
              We are committed to providing customers with high-quality
              products, exceptional service, and a seamless shopping experience.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Our goal is to make online shopping simple, affordable, and
              enjoyable while offering carefully selected products from trusted
              brands.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-black text-dark mb-6">Our Story</h2>

            <p className="text-gray-600 leading-8">
              What started as a vision to create a better online shopping
              experience has grown into a trusted ecommerce platform serving
              thousands of customers.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              We focus on product quality, customer satisfaction, and innovation
              to deliver the best shopping experience possible.
            </p>
          </div>

          <img
            src={aboutImage}
            alt="Story"
            className="w-full rounded-3xl object-right"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl font-black text-dark mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all"
                >
                  <Icon className="text-primary text-4xl mb-5" />

                  <h3 className="font-bold text-dark text-lg mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-primary rounded-3xl p-8 text-center text-white"
            >
              <h3 className="text-4xl font-black">{stat.value}</h3>

              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-center text-4xl font-black text-dark mb-12">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform object-top duration-500"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="font-bold text-dark text-lg">{member.name}</h3>

                <p className="text-primary font-medium text-sm mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-bold uppercase tracking-wider">
              Some Facts
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-dark mt-3 mb-4">
              Take a Look What
              <br />
              Our Clients Say About Us
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium. Debitis nesciunt voluptatum dicta
              reprehenderit accusamus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-lg">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-bold text-dark">{item.name}</h3>

                    <p className="text-gray-500 text-sm">{item.company}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-7 italic">
                  "{item.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-black mb-6">Ready To Start Shopping?</h2>

          <p className="text-white/80 mb-8">
            Discover thousands of products and exclusive deals today.
          </p>

          <a
            href="/shop"
            className="bg-white text-primary px-8 py-4 rounded-2xl font-bold inline-block hover:scale-105 transition-all"
          >
            Shop Now
          </a>
        </div>
      </section>
      <NewsletterBanner />
      <Footer />
    </div>
  );
}

export default About;
