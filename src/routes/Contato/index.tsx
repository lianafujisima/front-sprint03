import WhatsAppIcone from '../../assets/images/whatsapp.png';
import Telefone from "../../assets/images/telefone.png";
import Email from "../../assets/images/email.png";

export default function Contato(){
    return(
        <div>
            <main className="min-h-screen bg-gray-50 py-12 px-6">
            <h1 className="text-emerald-800 text-5xl text-center font-bold mb-8">CONTATO</h1>
            <section className="mb-8">
                <a href="https://wa.me/5511996534795" target="_blank" className="flex items-center gap-4 bg-green-500 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:bg-green-600 transition">
                <img src={WhatsAppIcone} alt="WhatsApp" className="w-10 h-10"/>
                    Fale com a equipe no WhatsApp clicando no link ou pelo número: <strong>(99) 91111-1111</strong> </a>
            </section>

            <section  className="mb-8 space-y-4">
                    <p className="flex items-center gap-3 text-gray-700 font-medium"> 
                        <img src={Telefone} alt="Ícone Telefone" className="w-6 h-6"/>
                        Telefone direto para o Hospital das Clínicas: <strong>(99) 99999-9999</strong>
                    </p>
                    <p className="flex items-center gap-3 text-gray-700 font-medium"> 
                        <img src={Telefone} alt="Ícone Telefone" className="w-6 h-6"/>
                        Telefone direto para IMREA: <strong>(99) 98888-8888</strong>
                    </p>
                    <p className="flex items-center gap-3 text-gray-700 font-medium"> 
                        <img src={Email} alt="Ícone Email" className="w-6 h-6"/>
                        <strong>E-mail - HCIMREA@HCIMREA.com.br</strong></p>
                </section>
            </main>
        </div>
    )
}