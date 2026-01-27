import { useEffect, useState } from 'react';
import { Menu, X, Mail, Phone, Instagram,MapPin, ArrowUp, Network, Shield, Server, Camera, Package, ChevronRight } from 'lucide-react';
import Logo from  './assets/logo.png';
// import { Mail, Phone, Instagram,  } from "lucide-react";

import Footer from './component/Footer';
import Contact from './component/Contact';

  const currentYear = new Date().getFullYear();

import heroBg1 from "./assets/hero-bg-1.jpg";
import heroBg2 from "./assets/hero-bg-2.jpg";
import heroBg3 from "./assets/hero-bg-3.jpg";
import heroBg4 from "./assets/hero-bg-4.jpg";
const heroImagesB = [heroBg3];
const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* Hero background slider */


  /* Navbar scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
<nav
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/95 backdrop-blur-lg shadow-lg border-b"
      : "bg-transparent"
  }`}
>
  <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    <div className="flex justify-between items-center h-24">

      {/* Logo + Company Name */}
      <div
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => scrollToSection("home")}
      >
        <img
          src={Logo}
          alt="Ortus Amigos Logo"
          className=" h-16 sm:h-20  w-auto transition-transform duration-300 group-hover:scale-105"
        />

        {/* Company Name (VISIBLE ON MOBILE) */}
        <div className="flex flex-col">
          <h1
            className={`font-bold leading-none text-lg sm:text-3xl mt-4 ml-4 transition-colors duration-300 ${
              scrolled ? "text-yellow-600" : "text-yellow-400"
            }`}
          >
            ORTUS AMIGOS
          </h1>
          <p
  className={`text-[10px] sm:text-lg ml-12 font-semibold tracking-wider transition-colors duration-300 ${
    scrolled ? "text-slate-700" : "text-slate-100"
  }`}
>

            IT SOLUTIONS
          </p>
        </div>
      </div>

      {/* Desktop Menu */}
   {/* Desktop Menu */}
<div className="hidden md:flex items-center space-x-6">
  {[
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Mission & Vision", id: "mission" },
  ].map((item) => (
    <button
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        scrolled ? "text-slate-900" : "text-white"
      } hover:bg-yellow-400 hover:text-black`}
    >
      {item.name}
    </button>
  ))}

  {/* Get In Touch Button */}
  <button
    onClick={() => scrollToSection("contact")}
    className="flex items-center gap-2 px-5 py-2 rounded-full
               bg-yellow-400 text-black font-semibold
               hover:bg-green-600 hover:text-white transition-all duration-300 shadow-md"
  >
    <Phone size={18} />
    Get In Touch
  </button>
</div>

      {/* Mobile Menu Button */}
<button
  className={`md:hidden p-2 rounded-lg transition ${
    scrolled
      ? "text-slate-900 hover:bg-slate-100"
      : "text-white hover:bg-white/10"
  }`}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
</button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
  className={`md:hidden overflow-hidden transition-all duration-300 ${
    isMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="bg-white border-t px-4 pt-3 pb-4 space-y-2">

    {/* Menu Items */}
    {[
      { name: "Home", id: "home" },
      { name: "Services", id: "services" },
      { name: "About", id: "about" },
      { name: "Mission & Vision", id: "mission" },
    ].map((item) => (
      <button
        key={item.id}
        onClick={() => {
          scrollToSection(item.id);
          setIsMenuOpen(false);
        }}
        className="block w-full text-left py-2 px-4 font-medium rounded-lg
                   text-slate-900 hover:bg-yellow-400 hover:text-black
                   transition-all duration-300"
      >
        {item.name}
      </button>
    ))}

    {/* Get In Touch CTA */}
    <button
      onClick={() => {
        scrollToSection("contact");
        setIsMenuOpen(false);
      }}
      className="w-full mt-3 flex items-center justify-center gap-2
                 bg-yellow-400 text-black font-semibold py-3 rounded-lg
                 hover:bg-green-600 hover:text-white transition-all duration-300 shadow-md"
    >
      <Phone size={18} />
      Get In Touch
    </button>

  </div>

  </div>
</nav>

{/* home */}

<section
  id="home"
  className="relative pt-20 min-h-screen text-white overflow-hidden"
>
  {/* Background Image Slider */}
  <div className="absolute inset-0">
    {heroImagesB.map((img, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={img}
          alt="IT Infrastructure Background"
          className="w-full h-full object-cover"
        />
      </div>
    ))}
   {/* Main Gradient */}
<div className="absolute inset-0 bg-gradient-to-br from-slate-300/50 via-blue-600/55 to-slate-500/85" />

{/* Logo Highlight Glow */}
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Left Content */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl text-yellow-400 font-bold mb-4 leading-snug">
          Reliable IT Infrastructure & Security Solutions in UAE
        </h1>

        <p className="text-xs  sm:text-lg font-semibold mb-4 text-white-900">
          Secure, scalable, and future-ready IT services across Dubai & UAE.
        </p>

        <p className="text-base sm:text-l mb-7 text-gray-200 leading-relaxed text-justify md:text-left">
          Ortus Amigos IT Solutions is a UAE-based IT services company delivering professional IT infrastructure, network security, server management, CCTV solutions, and IT hardware support. We help businesses operate efficiently with secure and cost-effective technology.
        </p>

        <button
          onClick={() => scrollToSection("contact")}
          className="inline-flex items-center justify-center bg-yellow-400 hover:bg-green-600 hover:text-white text-black px-7 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg gap-2"
        >
          Get Started <ChevronRight size={18} />
        </button>
      </div>

      {/* Right Feature Cards */}
<div className="grid grid-cols-2 gap-5">
  
  {[
    { icon: Shield, title: "Secure Infrastructure", text: "Protected & reliable systems", img: heroImages[0] },
    { icon: Network, title: "Scalable Solutions", text: "Grow with your business", img: heroImages[1] },
    { icon: Server, title: "UAE-Based Support", text: "Local professional team", img: heroImages[2] },
    { icon: Camera, title: "End-to-End Service", text: "Complete IT management", img: heroImages[3] },
  ].map(({ icon: Icon, title, text, img }, i) => (
    <div
      key={i}
      className="relative bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-white/20 overflow-hidden group"
    >
      {/* Background Image from Hero */}
      <img
        src={img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-15 transition duration-300"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/40" />

      {/* Content */}
      <div className="relative z-10">
        <Icon className="text-amber-400 mb-2" size={28} />
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-xs text-gray-300">{text}</p>
      </div>
    </div>
  ))}
</div>


    </div>
  </div>
</section>



<section id="services" className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="text-center mb-14 md:mb-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Our Services
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Comprehensive IT solutions tailored to meet modern business
        infrastructure and security requirements.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

      {/* Card */}
      {[
        {
          icon: Network,
          title: "Network Switch Installation & Configuration",
          desc:
            "Professional installation and configuration ensuring stable connectivity, performance, and secure communication.",
        },
        {
          icon: Shield,
          title: "Firewall Security Setup & Management",
          desc:
            "Advanced firewall design and management to protect your business network from cyber threats.",
        },
        {
          icon: Server,
          title: "Server & NAS Solutions",
          desc:
            "Secure server and NAS storage solutions for data management, backup, and business continuity.",
        },
        {
          icon: Camera,
          title: "CCTV Installation & Monitoring",
          desc:
            "End-to-end CCTV solutions enhancing surveillance and security for commercial environments.",
        },
        {
          icon: Package,
          title: "IT Devices & Accessories Delivery",
          desc:
            "Reliable supply of IT hardware and accessories ensuring quality, compatibility, and performance.",
        },
      ].map(({ icon: Icon, title, desc }, index) => (
        <div
          key={index}
          className="group bg-gradient-to-br from-slate-900 to-blue-900 p-7 md:p-8 rounded-xl text-white
                     shadow-lg hover:shadow-2xl transition-all duration-300
                     hover:-translate-y-1"
        >
          <Icon
            className="text-amber-400 mb-4 group-hover:scale-110 transition"
            size={36}
          />

          <h3 className="text-lg md:text-xl font-semibold mb-3 leading-snug">
            {title}
          </h3>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            {desc}
          </p>
        </div>
      ))}

      {/* CTA Card */}
      <div
        className="bg-gradient-to-br from-amber-500 to-amber-600 p-7 md:p-8 rounded-xl text-white
                   shadow-xl flex flex-col justify-center items-center text-center
                   hover:-translate-y-1 transition-all"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Need Custom Solutions?
        </h3>
        <p className="text-sm md:text-base text-white/90 mb-6 max-w-xs">
          Get tailored IT infrastructure and security solutions designed for your
          business needs.
        </p>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-black text-yellow-400 px-6 py-3 rounded-lg font-semibold
                     hover:bg-white hover:text-black transition shadow-md"
        >
          Contact Sales Team
        </button>
      </div>

    </div>
  </div>
</section>


<section id="about" className="py-16 md:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

      {/* Left Content */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-3xl md:text-3xl font-bold text-slate-900 mb-5">
          About Ortus Amigos IT Solutions
        </h2>

<div className="space-y-6 mt-8">

  {/* Card 01 */}
  <div className="relative bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
    <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full 
      bg-gradient-to-br from-blue-900 to-slate-900 text-white 
      flex items-center justify-center font-bold text-sm shadow-md">
      01
    </span>

    <h4 className="text-lg font-semibold text-slate-900 mb-3">
      Who We Are
    </h4>

    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
      Ortus Amigos IT Solutions L.L.C S.O.C is a Dubai-based IT solutions
      provider specializing in network infrastructure, security systems,
      server management, and surveillance solutions.
    </p>
  </div>

  {/* Card 02 */}
  <div className="relative bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
    <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full 
      bg-gradient-to-br from-blue-900 to-slate-900 text-white 
      flex items-center justify-center font-bold text-sm shadow-md">
      02
    </span>

    <h4 className="text-lg font-semibold text-slate-900 mb-3">
      What We Do
    </h4>

    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
      We work closely with businesses across the UAE to design, implement,
      and manage reliable IT systems that enhance productivity and protect
      digital assets.
    </p>
  </div>

  {/* Card 03 */}
  <div className="relative bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
    <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full 
      bg-gradient-to-br from-blue-900 to-slate-900 text-white 
      flex items-center justify-center font-bold text-sm shadow-md">
      03
    </span>

    <h4 className="text-lg font-semibold text-slate-900 mb-3">
      Our Approach
    </h4>

    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
      Our experienced team delivers customized IT solutions tailored to
      modern business needs while ensuring security, performance, and
      scalability.
    </p>
  </div>

</div>

      </div>

      {/* Right Card */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 sm:p-10 rounded-xl text-white shadow-xl">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center md:text-left">
          Why Choose Us
        </h3>

        <ul className="space-y-4">
          {[
            "UAE-based professional IT service provider",
            "Secure and scalable infrastructure solutions",
            "Trusted support for business growth",
            "End-to-end IT installation and management",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <ChevronRight
                className="text-amber-400 flex-shrink-0 mt-1"
                size={18}
              />
              <span className="text-sm sm:text-base leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
         <div
        className="bg-gradient-to-br from-violet-700 to-blue-800 p-7 md:p-8 rounded-xl text-white
                   shadow-xl flex flex-col justify-center items-center text-center mt-10
                   hover:-translate-y-1 transition-all"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Let’s Build IT That Works for You
        </h3>
        <p className="text-sm md:text-base text-white/90 mb-6 max-w-xs">
          Custom-designed IT infrastructure and security solutions made to support your business, not slow it down.
        </p>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold
                     hover:bg-green-600 hover:text-white transition shadow-md"
        >
          Contact As
        </button>
      </div>
      </div>
      

    </div>
  </div>
</section>


      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-12 rounded-xl text-white">
              <h3 className="text-3xl font-bold mb-6 text-amber-400">Our Mission</h3>
              <p className="text-xl leading-relaxed">
                To deliver secure, reliable, and scalable IT infrastructure solutions that enhance business performance and protect digital assets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-12 rounded-xl text-white">
              <h3 className="text-3xl font-bold mb-6 text-amber-400">Our Vision</h3>
              <p className="text-xl leading-relaxed">
                To become a trusted IT solutions partner in the UAE by enabling businesses with innovative, secure, and future-ready technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-12 rounded-xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Sales Team</h2>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-2 text-amber-400">Vignesh Balan</h3>
              <p className="text-xl mb-6">Sales Manager</p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our sales team provides expert consultation and helps businesses choose the right IT infrastructure and security solutions based on their requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

<section id="contact" className="py-20 bg-slate-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Get in touch with Ortus Amigos IT Solutions for reliable IT
        infrastructure and security services in Dubai and across the UAE.
      </p>
    </div>

    {/* Contact Form */}
<Contact />

    {/* Contact Cards */}
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center border border-white/20 hover:bg-white/20 transition">
        <Mail className="text-amber-400 mx-auto mb-4" size={40} />
        <h3 className="font-semibold text-xl mb-2">Email</h3>
        <a
          href="mailto:sales@ortusamigos.com"
          className="text-blue-300 hover:text-blue-200"
        >
          sales@ortusamigos.com
        </a>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center border border-white/20 hover:bg-white/20 transition">
        <Phone className="text-amber-400 mx-auto mb-4" size={40} />
        <h3 className="font-semibold text-xl mb-2">Phone</h3>
        <a
          href="tel:+971559602645"
          className="text-blue-300 hover:text-blue-200"
        >
          +971 55 960 2645
        </a>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center border border-white/20 hover:bg-white/20 transition">
        <Instagram className="text-amber-400 mx-auto mb-4" size={40} />
        <h3 className="font-semibold text-xl mb-2">Instagram</h3>
        <a
          href="https://instagram.com/ortus_amigos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-200"
        >
          @ortus_amigos
        </a>
      </div>
    </div>

    {/* Footer Text */}
    <div className="mt-14 text-center">
      <p className="text-gray-400 mb-2">Dubai, United Arab Emirates</p>
      <p className="text-sm text-gray-500">
        ORTUS AMIGOS IT SOLUTIONS L.L.C S.O.C
      </p>
    </div>
  </div>
</section>

<footer className="bg-slate-950 text-gray-400 ">  <Footer /> </footer>
     
    </div>
  );
}

export default App;
