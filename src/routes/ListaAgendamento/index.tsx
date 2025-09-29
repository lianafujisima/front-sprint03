import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type TypeAgendamento = {
  id: number;
  nome: string;
  cpf: string;
  data: string;
  hora: string;
};

export default function ListaAgendamento() {

  const [agendamento, setAgendamento] = useState<TypeAgendamento[]>([]);

  useEffect(() => {
    fetch('http://localhost:5173/agendamento')
        .then((resp) => resp.json())
        .then((resp) => setAgendamento(resp))
        .catch((error) => console.log(error));
}, []); 

const handleDelete = (id: number) => {
    fetch(`http://localhost:5173/agendamento/${id}`, { method: "DELETE" })
        .then(() => setAgendamento((prev) => prev.filter((p) => p.id !== id)))
        .catch((error) => console.log(error));
};


return (
    <div className="w-3/4 mt-8 m-auto">
        <h1 className="text-emerald-800 text-5xl text-center font-bold mb-8">Simulação de Agendamento pelo WhatsApp</h1>

        <Link className="p-2.5 bg-green-700 text-white font-bold rounded-md" to={'/incluir'}>Agendar Consulta/Exame</Link>

        <table className="w-full border-2 border-gray-400 my-5">
            <thead>
                <tr className="p-2.5 bg-emerald-800 text-white">
                    <th>Nome</th><th>Cpf</th><th>Data</th><th>Hora</th><th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {agendamento.map((agend) => (
                    <tr className="even:bg-gray-400 text-center p-2.5" key={agend.id}>
                        <td>{agend.nome}</td>
                        <td>{agend.cpf}</td>
                        <td>{agend.data}</td>
                        <td>{agend.hora}</td>
                        <td>
                            <Link
                                className="m-1 bg-blue-600 text-white px-2 pb-1 rounded-md hover:font-bold"
                                to={`/editar/${agend.id}`}
                            >
                                Editar
                            </Link>
                            <button
                                className="m-1 bg-red-600 text-white px-2 pb-0.75 rounded-md hover:font-bold"
                                onClick={() => handleDelete(agend.id)} 
                            >
                                Excluir
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr className="p-2.5 bg-gray-700 text-center text-white">
                    <td colSpan={6}>Dados Agendamento</td>
                </tr>
            </tfoot>
        </table>
    </div>
);
}

