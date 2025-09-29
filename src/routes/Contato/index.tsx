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
                    Clique aqui para WhatsApp ou pelo número: <strong>(99) 91111-1111</strong> </a>
            </section>

            <section  className="mb-8 space-y-4">
                    <p className="flex items-center gap-3 text-gray-700 font-medium"> 
                        <img src={Telefone} alt="Ícone Telefone" className="w-6 h-6"/>
                        Telefone Hospital das Clínicas para ligação: <strong>(99) 99999-9999</strong>
                    </p>
                    <p className="flex items-center gap-3 text-gray-700 font-medium"> 
                        <img src={Telefone} alt="Ícone Telefone" className="w-6 h-6"/>
                        Telefone IMREA para ligação: <strong>(99) 98888-8888</strong>
                    </p>
                    <p className="flex items-center gap-3 text-gray-700 font-medium"> 
                        <img src={Email} alt="Ícone Email" className="w-6 h-6"/>
                        <strong>E-mail - HCIMREA@HCIMREA.com.br</strong></p>
                </section>
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contatos Úteis de Emergência</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <article className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                            <h3 className="font-semibold text-gray-800">Polícia Militar</h3>
                            <p className="text-gray-600 text-lg font-bold">190</p>
                        </article>
                        <article className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                            <h3 className="font-semibold text-gray-800">Corpo de Bombeiros</h3>
                            <p className="text-gray-600 text-lg font-bold">193</p>
                        </article>
                        <article className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                            <h3 className="font-semibold text-gray-800">SAMU (Serviço de Atendimento Móvel de Urgência)</h3>
                            <p className="text-gray-600 text-lg font-bold">192</p>
                        </article>
                        <article className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                            <h3 className="font-semibold text-gray-800">Defesa Civil</h3>
                            <p className="text-gray-600 text-lg font-bold">199</p>
                        </article>
                        <article className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                            <h3 className="font-semibold text-gray-800">Central de Atendimento à Mulher</h3>
                            <p className="text-gray-600 text-lg font-bold">180</p>
                        </article>
                        <article className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                            <h3 className="font-semibold text-gray-800">Disque Direitos Humanos</h3>
                            <p className="text-gray-600 text-lg font-bold">100</p>
                        </article>
                    </div>    
                </section>
            </main>
        </div>
    )
}