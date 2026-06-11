import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/971559602645"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>

      {/* Call */}
      <a
        href="tel:+971559602645"
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      >
        <Phone className="text-white w-7 h-7" />
      </a>
    </div>
  );
};

export default FloatingContact;

