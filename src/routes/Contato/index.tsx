import WhatsAppIcone from '../../assets/images/whatsapp.png';

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
            </main>
        </div>
    )
}