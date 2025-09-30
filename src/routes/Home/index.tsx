import Imrea from "../../assets/images/IMREA.png";
import Agendamento from "../../assets/images/agendamento.png";
import Consulta from "../../assets/images/consulta.png";
import Exames from "../../assets/images/exames.png";
import WhatsApp from "../../assets/images/whatsapp.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">

        <section className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-emerald-800 text-5xl text-center font-bold mb-8">Bem-vindo ao site oficial do Hospital das Clínicas com IMREA!</h1>
          <p className="text-gray-700 leading-relaxed">
            Aqui você pode realizar agendamentos, consultar seus exames e tirar dúvidas tanto pelo site Oficial como diretamente pelo WhatsApp.
          </p>
        </section>

        <section className="mb-12">
          <img
            src={Imrea}
            alt="Banner Hospital das Clínicas com IMREA"
            className="w-full h-110 rounded-2xl shadow-md"
          />
        </section>

        <section className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center">
            <img src={Agendamento} alt="Agendamento" className="w-20 h-20 mb-4" />
            <h2 className="font-semibold text-gray-800 mb-2 text-center">Agendamento</h2>
            <p className="text-gray-600 text-center">Agende sua consulta de forma rápida e prática.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center">
            <img src={Consulta} alt="Consulta" className="w-20 h-20 mb-4" />
            <h2 className="font-semibold text-gray-800 mb-2 text-center">Consultas</h2>
            <p className="text-gray-600 text-center">Acompanhe seus agendamentos e histórico de consultas.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center">
            <img src={Exames} alt="Exames" className="w-20 h-20 mb-4" />
            <h2 className="font-semibold text-gray-800 mb-2 text-center">Exames</h2>
            <p className="text-gray-600 text-center">Visualize os resultados de seus exames de forma online.</p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center">
            <Link to="/whatsapp">
            <img src={WhatsApp} alt="WhatsApp" className="w-20 h-20 mb-4 rounded-full shadow-lg hover:bg-green-600 transition" />
            </Link>
            <h2 className="font-semibold text-gray-800 mb-2 text-center">WhatsApp</h2>
            <p className="text-gray-600 text-center">Fale diretamente com a equipe pelo WhatsApp para tirar suas dúvidas.</p>
          </div>
        </section>
    </main>
  );
}
