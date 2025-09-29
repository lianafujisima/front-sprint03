import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

type TypeNovo = {
  nome: string;
  cpf: string;
  data: string;
  hora: string;
};

export default function FormAgendamento() {

    const { id } = useParams();

    const navegacao = useNavigate();

    const [novo, setNovo] = useState<TypeNovo>({
        nome: "",
        cpf: "",
        data: "",
        hora: "",
    });

        let metodo:string = "POST"

        if(id) metodo = "PUT"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNovo({ ...novo, [name]: value });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const agendamento = {...novo}
    fetch(`http://localhost:5173/agendamento/${id ? id : ""}`,{
        method:metodo,
        headers:{"Content-Type":"Application/json"},
        body: JSON.stringify(agendamento)
    })
    .then(()=>navegacao('/'))
    .catch(error=>console.log(error))
}

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5173/agendamento/${id}`)
        .then((resp) => resp.json())
        .then((data) => setNovo(data))
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <div className="max-w-2xl m-auto my-7">
      <h1 className="text-emerald-800 text-5xl text-center font-bold mb-8">
        Agendamento de Consulta/Exame
      </h1>

      <form
        className="border-2 border-gray-400 p-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-full mb-2"
          type="text"
          name="nome"
          value={novo.nome}
          placeholder="Nome"
          onChange={handleChange}
          required
        />
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-full mb-2"
          type="text"
          name="cpf"
          value={novo.cpf}
          placeholder="CPF"
          onChange={handleChange}
          required
        />
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-full mb-2"
          type="date"
          name="data"
          value={novo.data}
          onChange={handleChange}
          required
        />
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-full mb-4"
          type="time"
          name="hora"
          value={novo.hora}
          onChange={handleChange}
          required
        />

        <button
          className="bg-green-700 text-white font-bold py-2 px-4 rounded-md mr-3"
          type="submit"
        >
          Enviar
        </button>
        <Link
          className="bg-red-700 text-white font-bold py-2 px-4 rounded-md"
          to="/"
        >
          Cancelar
        </Link>
      </form>
    </div>
  );
}
