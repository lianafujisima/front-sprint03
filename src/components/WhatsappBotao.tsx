import { Link } from "react-router-dom";
import WhatsAppIcon from '../assets/images/whatsapp.png';

export default function WhatsappBotao() {
  return (
    <Link
      to="/whatsapp"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <img src={WhatsAppIcon} alt="WhatsApp" className="w-8 h-8" />
    
    </Link>
  );
}