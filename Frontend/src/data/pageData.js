import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const contactPageData = {
  breadcrumb: [
    { label: "Home", link: "/" },
    { label: "Contact" },
  ],
  hero: {
    tag: "Contact Us",
    title: "Get In Touch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae.",
  },
  contactMethods: [
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
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.264391102564!2d75.7712834!3d26.895103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59f0cafdb41%3A0x3cf3189829ef1f6b!2sNavRasa%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1778842770971!5m2!1sen!2sin",
  form: {
    tag: "Send Message",
    title: "Drop Us a Line",
    description:
      "Your email address will not be published. Required fields are marked *",
    inputs: [
      { name: "name", type: "text", placeholder: "Your Name *", required: true },
      { name: "email", type: "email", placeholder: "Your Email *", required: true },
      { name: "subject", type: "text", placeholder: "Subject", required: false },
      { name: "message", type: "textarea", placeholder: "Your Message *", required: true },
    ],
    submitText: "Send Message",
  },
  stores: {
    title: "Stores",
    heading: "Our Offices",
    cities: [
      {
        name: "New York",
        address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
        phone: "+1 800 555 555",
        email: "contact@evara.com",
      },
      {
        name: "London",
        address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
        phone: "+1 800 555 555",
        email: "contact@evara.com",
      },
      {
        name: "Tokyo",
        address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
        phone: "+1 800 555 555",
        email: "contact@evara.com",
      },
    ],
  },
};

export const loginPageData = {
  breadcrumbBase: [
    { label: "Home", link: "/" },
  ],
  heroPanel: {
    headline: "Fashion Meets Modern Shopping",
    description:
      "Discover trending styles, premium quality products, and seamless shopping experiences built for modern customers.",
    stats: [
      { value: "10K+", label: "Happy Customers" },
      { value: "500+", label: "Premium Products" },
    ],
  },
  signIn: {
    tag: "Welcome Back",
    title: "Sign In",
    description: "Login to continue shopping with Evara.",
    submitText: "Login",
    toggleText: "Sign Up",
    altText: "Don't have an account?",
  },
  signUp: {
    tag: "Create Account",
    title: "Sign Up",
    description: "Create your account and start shopping today.",
    submitText: "Create Account",
    toggleText: "Login",
    altText: "Already have an account?",
  },
  socialButtons: [
    { label: "Google" },
    { label: "Facebook" },
  ],
};

export const orderSuccessPageData = {
  title: "Order Successful!",
  description:
    "Thank you for your purchase. Your order has been placed successfully and is now being processed.",
  stats: [
    { label: "Order Number", prefix: "#EVA" },
    { label: "Status", value: "Processing" },
    { label: "Payment", value: "Confirmed" },
  ],
  buttons: [
    { label: "Continue Shopping", to: "/shop", variant: "primary" },
    { label: "Back To Home", to: "/", variant: "secondary" },
  ],
};

export const shopPageData = {
  breadcrumb: [
    { label: "Home", link: "/" },
    { label: "Shop" },
  ],
  title: "Shop",
};

export const cartPageData = {
  breadcrumb: [
    { label: "Home", link: "/" },
    { label: "Cart" },
  ],
  title: "Shopping Cart",
  emptyState: {
    title: "Your Cart Is Empty",
    description: "Looks like you haven't added any products yet.",
    buttonText: "Continue Shopping",
  },
  actions: {
    continueShopping: "Continue Shopping",
    clearCart: "Clear Cart",
  },
  shipping: {
    title: "Calculate Shipping",
    description: "Enter your postal code to estimate shipping charges.",
    buttonText: "Update Shipping",
  },
  totals: {
    subtotal: "Subtotal",
    shipping: "Shipping",
    total: "Total",
  },
  coupon: {
    title: "Apply Coupon",
    buttonText: "Apply",
  },
};

export const checkoutPageData = {
  breadcrumb: [
    { label: "Home", link: "/" },
    { label: "Cart", link: "/cart" },
    { label: "Checkout" },
  ],
  title: "Checkout",
  description: "Complete your order below.",
  loginNotice: {
    message: "Returning customer?",
    linkText: "Click here to login",
    linkTo: "/login",
  },
  couponNotice: {
    message: "Have a coupon?",
    actionText: "Click here to enter your code",
  },
  billingTitle: "Billing Details",
  additionalInfoTitle: "Additional Information",
  notesPlaceholder: "Order notes...",
  orderSummaryTitle: "Your Order",
};
