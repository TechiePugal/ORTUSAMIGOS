import { Mail, Phone, Instagram, MapPin, ArrowUp, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  const [popupType, setPopupType] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
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
    <>
      <footer className="bg-primary ml-20 mr-20 text-primary-foreground">
        <div className="container-custom px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Company Info */}
            <div>
              <img
                src={logo}
                alt="Ortus Amigos IT Solutions"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                Your trusted IT solutions partner in Dubai and across the UAE.
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
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-secondary transition text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
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
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                  <span className="text-primary-foreground/70 text-sm">
                    Dubai, United Arab Emirates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-secondary mt-0.5" />
                  <a
                    href="tel:+971559602645"
                    className="text-primary-foreground/70 hover:text-secondary text-sm"
                  >
                    +971 55 960 2645
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-secondary mt-0.5" />
                  <a
                    href="mailto:sales@ortusamigos.com"
                    className="text-primary-foreground/70 hover:text-secondary text-sm"
                  >
                    sales@ortusamigos.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
{/* Bottom Bar */}
<div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
  
  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
    <p className="text-primary-foreground/60 text-sm">
      © {currentYear} Ortus Amigos IT Solutions L.L.C S.O.C. All rights reserved.
    </p>

    <span className="hidden sm:inline text-primary-foreground/30">|</span>

    <a
      href="https://elitecrows.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-foreground/60 text-sm hover:text-secondary transition-colors"
    >
      Developed by <span className="font-semibold text-secondary">EliteCrows InfoTech</span>
    </a>
  </div>

  <div className="flex items-center gap-6">
    <button
      onClick={() => setPopupType("terms")}
      className="text-sm hover:text-secondary"
    >
      Terms & Conditions
    </button>
    <button
      onClick={() => setPopupType("privacy")}
      className="text-sm hover:text-secondary"
    >
      Privacy Policy
    </button>

    <button
      onClick={scrollToTop}
      className="p-2 bg-secondary/20 rounded-lg hover:bg-secondary/30"
    >
      <ArrowUp className="w-5 h-5 text-secondary" />
    </button>
  </div>
</div>
        </div>
      </footer>

      {/* POPUP MODAL */}
      {popupType && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-2xl w-full p-6 rounded-xl shadow-xl relative overflow-y-auto max-h-[80vh]">
            
            <button
              onClick={() => setPopupType(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-4">
              {popupType === "terms" ? "Terms & Conditions" : "Privacy Policy"}
            </h2>

            {popupType === "terms" && (
              <p className="text-sm text-gray-700 leading-relaxed">
                By using our services, you agree to comply with our business policies.
                Ortus Amigos IT Solutions provides IT infrastructure, security,
                and software services subject to agreed contracts and service terms.
              </p>
            )}

            {popupType === "privacy" && (
              <p className="text-sm text-gray-700 leading-relaxed">
                We respect your privacy. Any personal information collected
                through our website or services will be kept secure and will not
                be shared with third parties without consent.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;