import { FaWhatsapp } from "react-icons/fa";


const WhatsAppButton = () => {
  const phoneNumber = "971528707320"; // +971 52 870 7320
  const message = "Hi, I'm interested in your maritime services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Chat with us on WhatsApp"
    >
      {/* WhatsApp Button */}
      <div className="relative">
        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />
        
        {/* Main Button */}
        <div className="relative w-[60px] h-[60px] md:w-[60px] md:h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow">
          <FaWhatsapp className="w-8 h-8 text-white" />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">
          Chat with us on WhatsApp
          <div className="absolute bottom-0 right-4 transform translate-y-full">
            <div className="border-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
