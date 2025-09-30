import { Link } from "react-router-dom";
import WhatsAppIcone from '../assets/images/whatsapp.png';

export default function WhatsappBotao() {
  return (
    <Link
      to="/whatsapp"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <img src={WhatsAppIcone} alt="WhatsApp" className="w-14 h-14" />
    
    </Link>
  );
}