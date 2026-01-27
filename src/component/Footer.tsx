import { Mail, Phone, Instagram, MapPin, ArrowUp } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Network Installation",
    "Firewall Security",
    "Server & NAS Solutions",
    "CCTV Installation",
    "IT Hardware Supply",
  ];

  return (
    <footer className="bg-primary ml-20 mr-20 b text-primary-foreground">
      <div className="container-custom px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Ortus Amigos IT Solutions"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Your trusted IT solutions partner in Dubai and across the UAE.
              Providing reliable infrastructure, security, and support for
              businesses.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/ortus_amigos"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-secondary/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:sales@ortusamigos.com"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-secondary/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+971559602645"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  +971 55 960 2645
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:sales@ortusamigos.com"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  sales@ortusamigos.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center sm:text-left">
            © {currentYear} Ortus Amigos IT Solutions L.L.C S.O.C. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-secondary" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
