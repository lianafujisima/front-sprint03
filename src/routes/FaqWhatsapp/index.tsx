import { useEffect, useState } from "react";

type FAQ = {
  pergunta: string;
  resposta: string;
};

export default function FaqSimulado() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [mensagens, setMensagens] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/faqs")
      .then((resp) => resp.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.log(error));
  }, []);

  const handlePergunta = (faq: FAQ) => {
    setMensagens((prev) => [...prev, faq.pergunta]);

    setTimeout(() => {
      setMensagens((prev) => [...prev, faq.resposta]);
    }, 300);
  };

  useEffect(() => {
    const container = document.getElementById("chat-container");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [mensagens]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg flex flex-col h-[500px]">
        <div className="bg-green-600 text-white text-lg font-bold p-4 rounded-t-lg">
          FAQ Simulado
        </div>

        <div
          id="chat-container"
          className="flex-1 overflow-y-auto p-4 space-y-2"
        >
          {mensagens.map((msg, i) => (
            <div
              key={i}
              className={`flex ${i % 2 === 0 ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-[75%] ${
                  i % 2 === 0
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 flex flex-col space-y-2 border-t">
          {faqs.map((faq, index) => (
            <button
              key={index}
              className="flex-1 bg-gray-300 text-left px-4 py-2 rounded-md hover:bg-gray-400"
              onClick={() => handlePergunta(faq)}
            >
              {faq.pergunta}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
