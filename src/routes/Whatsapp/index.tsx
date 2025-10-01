import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

interface Agendamento {
  id: string;
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
  const { id } = useParams();
  const navigate = useNavigate();
  const [tituloEstado, setTituloEstado] = useState<string>(
    titulo ?? "Simulação de Agendamento e dúvidas no WhatsApp"
  );
  const [agendamento, setAgendamento] = useState<Agendamento[]>([]);
  const [novaAgendamento, setNovaAgendamento] = useState<Omit<Agendamento, "id">>({
    nome: "",
    cpf: "",
    data: "",
    hora: "",
  });
  const [agendamentoEditando, setAgendamentoEditando] = useState<Agendamento | null>(null);
  const [faqs, setFaqs] = useState<Faqs[]>([]);
  const [mensagens, setMensagens] = useState<{ pergunta: string; resposta: string }[]>([]);
  const [mensagemStatus, setMensagemStatus] = useState<string>("");
  const [filtro, setFiltro] = useState<string>("");
  const [chatAberto, setChatAberto] = useState<boolean>(true);

  const formatarDataParaExibir = (data: string) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}-${mes}-${ano}`;
  };

  const novoAgendamento = () => {
    setAgendamentoEditando(null);
    setNovaAgendamento({
      nome: "",
      cpf: "",
      data: "",
      hora: "",
    });
    setMensagemStatus("");
  };

  useEffect(() => {
    fetch(`${API_URL}/agendamento`)
      .then(res => res.json())
      .then(data => setAgendamento(data))
      .catch(err => {
        console.error(err);
        navigate("/error");
      });

    fetch(`${API_URL}/faqs`)
      .then(res => res.json())
      .then(data => setFaqs(data))
      .catch(err => {
        console.error(err);
        navigate("/error");
      });
  }, []);

  useEffect(() => {
    if (id && agendamento.length > 0) {
      const ag = agendamento.find(a => a.id === id);
      if (ag) {
        setAgendamentoEditando(ag);
        setNovaAgendamento({
          nome: ag.nome,
          cpf: ag.cpf,
          data: ag.data,
          hora: ag.hora,
        });
      }
    }
  }, [id, agendamento]);

  const salvarAgendamento = () => {
    if (agendamentoEditando) {
      fetch(`${API_URL}/agendamento/${agendamentoEditando.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaAgendamento),
      })
        .then(res => res.json())
        .then(data => {
          setAgendamento(agendamento.map(c => c.id === data.id ? data : c));
          setAgendamentoEditando(null);
          setNovaAgendamento({ nome: "", cpf: "", data: "", hora: "" });
          setMensagemStatus("Agendamento atualizado com sucesso!");
        })
        .catch(err => {
          console.error(err);
          navigate("/error");
        });
    } else {
      fetch(`${API_URL}/agendamento`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaAgendamento),
      })
        .then(res => res.json())
        .then(data => {
          setAgendamento([...agendamento, data]);
          setNovaAgendamento({ nome: "", cpf: "", data: "", hora: "" });
          setMensagemStatus("Agendamento adicionado com sucesso!");
        })
        .catch(err => {
          console.error(err);
          navigate("/error");
        });
    }
  };

  const editarAgendamento = (agendamento: Agendamento) => {
    setAgendamentoEditando(agendamento);
    setNovaAgendamento({
      nome: agendamento.nome,
      cpf: agendamento.cpf,
      data: agendamento.data,
      hora: agendamento.hora,
    });
  };

  const excluirAgendamento = (id: string) => {
    fetch(`${API_URL}/agendamento/${id}`, { method: "DELETE" })
      .then(() => {
        setAgendamento(agendamento.filter(c => c.id !== id));
        setMensagemStatus("Agendamento excluído com sucesso!");
      })
      .catch(err => {
        console.error(err);
        navigate("/error");
      });
  };

  const escolherFaqs = (faqs: Faqs) => {
    setMensagens(prev => [...prev, { pergunta: faqs.pergunta, resposta: faqs.resposta }]);
  };

  return (
    <main className="flex flex-col items-center p-4 bg-green-50 min-h-screen">

      <h1 className="text-emerald-800 text-5xl text-center font-bold mb-8 pt-8">{tituloEstado}</h1>

      {mensagemStatus && (
        <div className="bg-green-200 text-green-800 p-2 rounded mb-2">{mensagemStatus}</div>
      )}

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 mb-6">

        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">
            {agendamentoEditando ? "Editar" : "Nova"} Agendamento
          </h2>
          {agendamentoEditando && (
            <button
              onClick={novoAgendamento}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Novo Agendamento
            </button>
          )}
        </div>

        <input
          type="text"
          placeholder="Nome"
          value={novaAgendamento.nome}
          onChange={e => setNovaAgendamento({ ...novaAgendamento, nome: e.target.value })}
          className="border p-2 rounded mb-2"
        />
        <input
          type="text"
          placeholder="CPF"
          value={novaAgendamento.cpf}
          onChange={e => setNovaAgendamento({ ...novaAgendamento, cpf: e.target.value })}
          className="border p-2 rounded mb-2"
        />
        <input
          type="date"
          value={novaAgendamento.data}
          onChange={e => setNovaAgendamento({ ...novaAgendamento, data: e.target.value })}
          className="border p-2 rounded mb-2"
        />
        <input
          type="time"
          value={novaAgendamento.hora}
          onChange={e => setNovaAgendamento({ ...novaAgendamento, hora: e.target.value })}
          className="border p-2 rounded mb-2"
        />
        <button
          onClick={salvarAgendamento}
          className="bg-green-600 text-white py-2 rounded mt-2"
        >
          {agendamentoEditando ? "Atualizar" : "Adicionar"}
        </button>

        <input
          type="text"
          placeholder="Filtre escolha por nome"
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
          className="border p-2 rounded mt-4 w-full"
        />

        <h3 className="font-semibold mb-2 mt-2">Agendamentos:</h3>
        <ul className="space-y-1">
          {agendamento
            .filter(a => a.nome.toLowerCase().includes(filtro.toLowerCase()))
            .map(c => (
              <li key={c.id} className="flex justify-between items-center border-b pb-1">
                <span>{c.nome} - {c.cpf} - {formatarDataParaExibir(c.data)} {c.hora}</span>
                <div className="flex space-x-2">
                  <button onClick={() => editarAgendamento(c)} className="text-blue-600 font-bold">Editar</button>
                  <button onClick={() => excluirAgendamento(c.id)} className="text-red-600 font-bold">Excluir</button>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <button
        onClick={() => setChatAberto(!chatAberto)}
        className="mb-2 bg-blue-300 px-4 py-2 rounded hover:bg-blue-400"
      >
        {chatAberto ? "Minimizar Chat" : "Abrir Chat"}
      </button>

      {chatAberto && (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 flex flex-col mb-6">
          <h2 className="text-lg font-semibold mb-2">Simulação WhatsApp</h2>
          <p className="mb-2 text-gray-700">Escolha uma dúvida:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {faqs.map(d => (
              <button
                key={d.id}
                onClick={() => escolherFaqs(d)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                {d.pergunta}
              </button>
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

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-300 px-4 py-2 rounded hover:bg-blue-400"
      >
        Voltar
      </button>
    </main>
  );
}
