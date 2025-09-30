import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// URL do backend (usa variável de ambiente ou fallback)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

interface Consulta {
  id: number;
  nome: string;
  cpf: string;
  data: string;
  hora: string;
}

interface Duvida {
  id: number;
  pergunta: string;
  resposta: string;
}

interface Props {
  titulo?: string;
}

export default function Whatsapp({ titulo }: Props) {
  const { id } = useParams(); // rota dinâmica
  const navigate = useNavigate();

  const [tituloEstado, setTituloEstado] = useState<string>(titulo ?? "Simulação de Agendamento e dúvidas no WhatsApp");

  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [novaConsulta, setNovaConsulta] = useState<Omit<Consulta, "id">>({
    nome: "",
    cpf: "",
    data: "",
    hora: "",
  });
  const [consultaEditando, setConsultaEditando] = useState<Consulta | null>(null);

  const [duvidas, setDuvidas] = useState<Duvida[]>([]);
  const [mensagens, setMensagens] = useState<{ pergunta: string; resposta: string }[]>([]);

  // 🔹 Buscar consultas e dúvidas
  useEffect(() => {
    fetch(`${API_URL}/consultas`)
      .then(res => res.json())
      .then(data => setConsultas(data))
      .catch(err => console.error(err));

    fetch(`${API_URL}/duvidas`)
      .then(res => res.json())
      .then(data => setDuvidas(data))
      .catch(err => console.error(err));
  }, []);

  // 🔹 Criar ou atualizar consulta
  const salvarConsulta = () => {
    if (consultaEditando) {
      // UPDATE
      fetch(`${API_URL}/consultas/${consultaEditando.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaConsulta),
      })
        .then(res => res.json())
        .then(data => {
          setConsultas(consultas.map(c => c.id === data.id ? data : c));
          setConsultaEditando(null);
          setNovaConsulta({ nome: "", cpf: "", data: "", hora: "" });
        })
        .catch(err => console.error(err));
    } else {
      // CREATE
      fetch(`${API_URL}/consultas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaConsulta),
      })
        .then(res => res.json())
        .then(data => {
          setConsultas([...consultas, data]);
          setNovaConsulta({ nome: "", cpf: "", data: "", hora: "" });
        })
        .catch(err => console.error(err));
    }
  };

  // 🔹 Editar consulta
  const editarConsulta = (consulta: Consulta) => {
    setConsultaEditando(consulta);
    setNovaConsulta({
      nome: consulta.nome,
      cpf: consulta.cpf,
      data: consulta.data,
      hora: consulta.hora,
    });
  };

  // 🔹 Excluir consulta
  const excluirConsulta = (id: number) => {
    fetch(`${API_URL}/consultas/${id}`, { method: "DELETE" })
      .then(() => setConsultas(consultas.filter(c => c.id !== id)))
      .catch(err => console.error(err));
  };

  // 🔹 Escolher dúvida (chat)
  const escolherDuvida = (duvida: Duvida) => {
    setMensagens(prev => [...prev, { pergunta: duvida.pergunta, resposta: duvida.resposta }]);
  };

  return (
    <main className="flex flex-col items-center p-4 bg-green-50 min-h-screen">
      <h1  className="text-emerald-800 text-5xl text-center font-bold mb-8 pt-8">{tituloEstado}</h1>
      <p className="mb-4 text-gray-700">ID: {id}</p>

      {/* Formulário de consultas */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2"> {consultaEditando ? "Editar" : "Nova"} Consulta</h2>
        <div className="flex flex-col space-y-2 mb-4">
          <input
            type="text"
            placeholder="Nome"
            value={novaConsulta.nome}
            onChange={e => setNovaConsulta({ ...novaConsulta, nome: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="CPF"
            value={novaConsulta.cpf}
            onChange={e => setNovaConsulta({ ...novaConsulta, cpf: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="date"
            value={novaConsulta.data}
            onChange={e => setNovaConsulta({ ...novaConsulta, data: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="time"
            value={novaConsulta.hora}
            onChange={e => setNovaConsulta({ ...novaConsulta, hora: e.target.value })}
            className="border p-2 rounded"
          />
          <button
            onClick={salvarConsulta}
            className="bg-green-600 text-white py-2 rounded mt-2"
          >
            {consultaEditando ? "Atualizar" : "Adicionar"}
          </button>
        </div>

        {/* Lista de consultas */}
        <h3 className="font-semibold mb-2">Consultas Marcadas</h3>
        <ul className="space-y-1">
          {consultas.map(c => (
            <li key={c.id} className="flex justify-between items-center border-b pb-1">
              <span>{c.nome} - {c.cpf} - {c.data} {c.hora}</span>
              <div className="flex space-x-2">
                <button onClick={() => editarConsulta(c)} className="text-blue-600 font-bold">Editar</button>
                <button onClick={() => excluirConsulta(c.id)} className="text-red-600 font-bold">Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat WhatsApp */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 flex flex-col">
        <h2 className="text-lg font-semibold mb-2">Simulação WhatsApp</h2>
        <p className="mb-2 text-gray-700">Escolha uma dúvida:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {duvidas.map(d => (
            <button
              key={d.id}
              onClick={() => escolherDuvida(d)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              {d.pergunta}
            </button>
          ))}
        </div>

        {/* Área do chat */}
        <div className="flex-1 flex flex-col space-y-3 p-2 bg-gray-50 rounded-lg h-[400px] overflow-y-auto">
          {mensagens.map((m, i) => (
            <div key={i} className="flex flex-col space-y-2">
              {/* Pergunta do usuário */}
              <div className="flex justify-end">
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg max-w-[70%] shadow">
                  {m.pergunta}
                </div>
              </div>

              {/* Resposta do bot */}
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-[70%] shadow">
                  {m.resposta}
                </div>
              </div>
            </div>
          ))}
        </div>
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
