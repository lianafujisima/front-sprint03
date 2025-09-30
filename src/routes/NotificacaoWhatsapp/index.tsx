import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotificacaoWhatsapp() {
  const [mensagens, setMensagens] = useState<string[]>([
    "Você recebeu uma nova notificação de agendamento!",
    "Sua consulta está marcada para: 01-11-2025 às 14:00",
  ]);

  const navigate = useNavigate();

  const [notificacaoEnviada, setNotificacaoEnviada] = useState(true);

  const handleConfirmar = () => {
    setMensagens((prev) => [
      ...prev,
      "Você confirmou a consulta. Até lá!",
    ]);
    setNotificacaoEnviada(false);
  };

  const handleCancelar = () => {
    setMensagens((prev) => [
      ...prev,
      "Você cancelou a consulta. Entre em contato para reagendar.",
    ]);
    setNotificacaoEnviada(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <h1 className="text-emerald-800 text-5xl text-center font-bold mb-14">Simulação de Notificação do WhatsApp</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg flex flex-col h-[500px]">
        <div className="bg-green-600 text-white text-lg font-bold p-4 rounded-t-lg">
          Notificação de Consulta
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {mensagens.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.startsWith("Você confirmou") || msg.startsWith("Você cancelou")
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-[75%] ${
                  msg.startsWith("Você confirmou")
                    ? "bg-green-500 text-white"
                    : msg.startsWith("Você cancelou")
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg}
              </div>
            </div>
          ))}
        </div>

        {notificacaoEnviada && (
          <div className="p-3 flex space-x-2 border-t">
            <button
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={handleConfirmar}
            >
              Confirmar
            </button>
            <button
              className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={handleCancelar}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-300 px-4 py-2 rounded hover:bg-blue-400"
      >
        Voltar
      </button>
    </main>
  );
}
