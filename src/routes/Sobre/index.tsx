import { Link } from "react-router-dom";
import Imrea2 from "../../assets/images/IMREA2.jpg";
import Agendamento from "../../assets/images/agendamento.png";
import Consulta from "../../assets/images/consulta.png";
import Exames from "../../assets/images/exames.png";
import WhatsApp from "../../assets/images/whatsapp.png";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-emerald-800 text-5xl text-center font-bold mb-8">Sobre</h1>
      <section className="max-w-5xl mx-auto mb-12">
        <img src={Imrea2}alt="Banner do Sistema" className="w-full object-contain rounded-2xl shadow-md"/>
      </section>

      <section className="max-w-4xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre o Projeto</h2>
          <p className="text-gray-700 text-center">Este projeto é uma implementação de um sistema completo de agendamento médico que permite aos usuários:</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Agendar consultas médicas de forma prática e rápida.</li>
            <li>Consultar agendamentos futuros e histórico de consultas.</li>
            <li>Acessar resultados de exames diretamente pelo sistema.</li>
            <li>Enviar dúvidas e solicitações diretamente pelo WhatsApp da equipe.</li>
          </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-12 grid gap-6 sm:grid-cols-2">
        <div className="bg-green-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center">
          <img src={Agendamento} alt="Agendamento" className="w-24 h-24 mb-4" />
          <h2 className="font-semibold text-gray-800 mb-2 text-center">Agendamento de Consultas</h2>
          <p className="text-gray-700 text-center">Permite ao usuário escolher a data e horário disponíveis de forma rápida e prática.</p>
        </div>
        <div className="bg-green-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center">
          <img src={Consulta} alt="Consulta" className="w-24 h-24 mb-4" />
          <h2 className="font-semibold text-gray-800 mb-2 text-center">Consulta de Agendamentos</h2>
          <p className="text-gray-700 text-center">Visualize todos os agendamentos realizados, incluindo histórico de consultas.</p>
        </div>
        <div className="bg-green-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center">
          <img src={Exames} alt="Exames" className="w-24 h-24 mb-4" />
          <h2 className="font-semibold text-gray-800 mb-2 text-center">Resultados de Exames</h2>
          <p className="text-gray-700 text-center">Acesso direto aos resultados de exames realizados, com visualização rápida e segura.</p>
        </div>
        <div className="bg-green-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center">
          <img src={WhatsApp} alt="WhatsApp" className="w-24 h-24 mb-4" />
          <h2 className="font-semibold text-gray-800 mb-2 text-center">Dúvidas pelo WhatsApp</h2>
          <p className="text-gray-700 text-center">Atendimento direto pelo WhatsApp para esclarecer dúvidas ou solicitar suporte.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Atendimento via WhatsApp</h2>
        <p className="text-gray-700 mb-4">Para facilitar a comunicação com a equipe, o sistema permite que todas as dúvidas e solicitações sejam enviadas diretamente pelo WhatsApp.</p>
        
        <Link 
          to="/agendamento" 
          className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-green-600 transition"
        >
          Fale Conosco no WhatsApp
        </Link>
      </section>

    </main>
  )
}
