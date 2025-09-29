import { useEffect, useState } from "react";

type FAQ = {
  pergunta: string;
  resposta: string;
};

export default function FaqSimulado() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/faqs")
      .then((resp) => resp.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.log(error));
  }, []);

  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);

  return (
    <div className="max-w-md m-auto mt-10 p-4 border-2 border-gray-400 rounded-md">
      <h1 className="text-emerald-800 text-3xl font-bold mb-6 text-center">
        FAQ Simulado WhatsApp
      </h1>

      <div className="flex flex-col space-y-2">
        {faqs.map((faq, index) => (
          <button
            key={index}
            className="bg-gray-300 py-2 px-4 rounded-md text-left hover:bg-gray-400"
            onClick={() =>
              setRespostaSelecionada(respostaSelecionada === faq.resposta ? null : faq.resposta)
            }
          >
            {faq.pergunta}
          </button>
        ))}
      </div>

      {respostaSelecionada && (
        <div className="mt-4 p-3 border-2 border-gray-400 rounded-md bg-gray-100 whitespace-pre-line">
          {respostaSelecionada}
        </div>
      )}
    </div>
  );
}
