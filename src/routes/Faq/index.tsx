import { Link } from "react-router-dom";

export default function Faq() {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-6">
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-emerald-800 text-5xl text-center font-bold mb-8">Perguntas Frequentes (FAQ)</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Posso fazer ligação de voz ao número do WhatsApp?</h2>
              <p className="text-gray-700 mt-2">
                Não. O número do WhatsApp é exclusivo para mensagens de texto. Caso precise de atendimento por voz, utilize os telefones
                diretos disponíveis na seção de <strong>Contatos</strong>.
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Como posicionar a câmera para a video consulta?</h2>
              <p className="text-gray-700 mt-2">
                Recomendamos que posicione a câmera em um local estável, na altura do rosto e em um ambiente iluminado. Evite luz forte atrás de você para que a imagem fique clara.
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Como ajustar o áudio para a video consulta?</h2>
              <p className="text-gray-700 mt-2">
                Antes da consulta, teste o microfone e os alto-falantes do seu dispositivo. Utilize fones de ouvido com microfone embutido
                para melhorar a qualidade do som e reduzir ruídos externos.
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Preciso instalar algum aplicativo adicional para ter acesso ao WhatsApp do IMREA-HC?</h2>
              <p className="text-gray-700 mt-2">
                Não. Todo o processo é realizado pelo WhatsApp. Basta ter o aplicativo instalado e atualizado no seu dispositivo.
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Posso acessar meus exames em outro dispositivo?</h2>
              <p className="text-gray-700 mt-2">
                Sim. Basta acessar o sistema pelo mesmo número de WhatsApp cadastrado. Os resultados estarão disponíveis para consulta em qualquer dispositivo.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Atendimento via WhatsApp</h2>
        <p className="text-gray-700 mb-4">Para facilitar a comunicação com a equipe, o sistema permite que todas as dúvidas e solicitações sejam enviadas diretamente pelo WhatsApp.</p>
        
        <Link 
          to="/faqwhatsapp" 
          className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-green-600 transition"
        >
          Fale Conosco no WhatsApp
        </Link>
      </section>
      </main>
    );
  }
  