import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

interface Agendamento {
  id?: string;
  nome: string;
  cpf: string;
  data: string;
  hora: string;
}

interface Faqs {
  id: string;
  pergunta: string;
  resposta: string;
}

interface Props {
  titulo?: string;
}

export default function Whatsapp({ titulo }: Props) {
  const navigate = useNavigate();

  const [tituloEstado] = useState<string>(titulo ?? "Simulação de Agendamento e FAQs");
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [agendamentoAtual, setAgendamentoAtual] = useState<Agendamento>({
    nome: "",
    cpf: "",
    data: "",
    hora: "",
  });
  const [ultimoAdicionado, setUltimoAdicionado] = useState<Agendamento | null>(null);
  const [faqs, setFaqs] = useState<Faqs[]>([]);
  const [mensagens, setMensagens] = useState<{ pergunta: string; resposta: string }[]>([]);
  const [mensagemStatus, setMensagemStatus] = useState<string>("");
  const [filtro, setFiltro] = useState<string>("");
  const [chatAberto, setChatAberto] = useState<boolean>(true);

  const formatarDataParaExibir = (data: string) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}-${mes}-${ano}`;
  };

  useEffect(() => {
    fetch(`${API_URL}/agendamento`)
      .then(res => res.json())
      .then(data => setAgendamentos(data))
      .catch(err => { console.error(err); navigate("/error"); });

    fetch(`${API_URL}/faqs`)
      .then(res => res.json())
      .then(data => setFaqs(data))
      .catch(err => { console.error(err); navigate("/error"); });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAgendamentoAtual(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const metodo = agendamentoAtual.id ? "PUT" : "POST";
    const url = agendamentoAtual.id
      ? `${API_URL}/agendamento/${agendamentoAtual.id}`
      : `${API_URL}/agendamento`;

    fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(agendamentoAtual),
    })
      .then(res => res.json())
      .then(data => {
        if (metodo === "PUT") {
          setAgendamentos(prev => prev.map(a => (a.id === data.id ? data : a)));
          setMensagemStatus("Agendamento atualizado com sucesso!");
        } else {
          setAgendamentos(prev => [...prev, data]);
          setMensagemStatus("Agendamento adicionado com sucesso!");
        }

        setAgendamentoAtual({ nome: "", cpf: "", data: "", hora: "" });
        setUltimoAdicionado(data);
      })
      .catch(err => { console.error(err); navigate("/error"); });
  };

  const handleDelete = (agendamentoId?: string) => {
    if (!agendamentoId) return;
    fetch(`${API_URL}/agendamento/${agendamentoId}`, { method: "DELETE" })
      .then(() => {
        setAgendamentos(prev => prev.filter(a => a.id !== agendamentoId));
        setMensagemStatus("Agendamento excluído com sucesso!");
        if (ultimoAdicionado?.id === agendamentoId) setUltimoAdicionado(null);
      })
      .catch(err => { console.error(err); navigate("/error"); });
  };

  const handleSelecionarFaq = (faq: Faqs) => {
    setMensagens(prev => [...prev, { pergunta: faq.pergunta, resposta: faq.resposta }]);
  };

  const handleNovoAgendamento = () => {
    setAgendamentoAtual({ nome: "", cpf: "", data: "", hora: "" });
    setMensagemStatus("");
  };

  const agendamentosFiltrados =
    filtro.trim() === ""
      ? (ultimoAdicionado ? [ultimoAdicionado] : [])
      : agendamentos.filter(a => a.cpf.includes(filtro.trim()));

  return (
    <main className="flex flex-col items-center p-4 bg-green-50 min-h-screen">
      <h1 className="text-emerald-800 text-5xl text-center font-bold mb-8 pt-8">{tituloEstado}</h1>

      {mensagemStatus && <div className="bg-green-200 text-green-800 p-2 rounded mb-2">{mensagemStatus}</div>}

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{agendamentoAtual.id ? "Editar" : "."} Agendamento</h2>

          {(agendamentoAtual.nome || agendamentoAtual.cpf || agendamentoAtual.data || agendamentoAtual.hora) && (
            <button
              onClick={handleNovoAgendamento}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mb-2"
            >
              Novo Agendamento
            </button>
          )}
        </div>

        <input type="text" name="nome" placeholder="Nome" value={agendamentoAtual.nome} onChange={handleChange} className="border p-2 rounded mb-2" />
        <input type="text" name="cpf" placeholder="CPF" value={agendamentoAtual.cpf} onChange={handleChange} className="border p-2 rounded mb-2" />
        <input type="date" name="data" value={agendamentoAtual.data} onChange={handleChange} className="border p-2 rounded mb-2" />
        <input type="time" name="hora" value={agendamentoAtual.hora} onChange={handleChange} className="border p-2 rounded mb-2" />
        <button onClick={handleSubmit} className="bg-green-600 text-white py-2 rounded mt-2">
          {agendamentoAtual.id ? "Atualizar" : "Adicionar"}
        </button>

        <input type="text" placeholder="Buscar por CPF" value={filtro} onChange={e => setFiltro(e.target.value)} className="border p-2 rounded mt-4 w-full" />

        <h3 className="font-semibold mb-2 mt-2">Agendamentos:</h3>
        <ul className="space-y-1">
          {agendamentosFiltrados.map(a => (
            <li key={a.id} className="flex justify-between items-center border-b pb-1">
              <span>{a.nome} - {a.cpf} - {formatarDataParaExibir(a.data)} {a.hora}</span>
              <div className="flex space-x-2">
                <button onClick={() => setAgendamentoAtual(a)} className="text-blue-600 font-bold">Editar</button>
                <button onClick={() => handleDelete(a.id)} className="text-red-600 font-bold">Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={() => setChatAberto(!chatAberto)} className="mb-2 bg-blue-300 px-4 py-2 rounded hover:bg-blue-400">
        {chatAberto ? "Minimizar Chat" : "Abrir Chat"}
      </button>

      {chatAberto && (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 flex flex-col mb-6">
          <h2 className="text-lg font-semibold mb-2">Simulação WhatsApp</h2>
          <p className="mb-2 text-gray-700">Escolha uma dúvida:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {faqs.map(f => (
              <button key={f.id} onClick={() => handleSelecionarFaq(f)} className="bg-blue-500 text-white px-3 py-1 rounded">{f.pergunta}</button>
            ))}
          </div>
          <div className="flex-1 flex flex-col space-y-3 p-2 bg-gray-50 rounded-lg h-[400px] overflow-y-auto">
            {mensagens.map((m, i) => (
              <div key={i} className="flex flex-col space-y-2">
                <div className="flex justify-end">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg max-w-[70%] shadow">{m.pergunta}</div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-[70%] shadow">{m.resposta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button onClick={() => navigate("/")} className="mt-6 bg-blue-300 px-4 py-2 rounded hover:bg-blue-400">Voltar</button>
    </main>
  );
}
