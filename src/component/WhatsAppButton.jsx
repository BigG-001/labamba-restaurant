
import { FaWhatsapp } from "react-icons/fa6";

function WhatsAppButton() {
  const phoneNumber = "2347075168184";

  const message =
    "Hello Happiness! I visited the LA'bamba website and would like to make an enquiry.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Happiness on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#16833e] text-white px-3 py-2 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <FaWhatsapp size={30} />
        
      <span className="text-sm md:text-l font-semibold">
        WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppButton;