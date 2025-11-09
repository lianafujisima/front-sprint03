// src/routes/CriarContaPage/index.tsx
 
import React, { useState } from 'react';
import CadastroPaciente from "../../components/cadastro/CadastroPaciente";
import type { Paciente } from "../../types/Paciente";
 
export default function CriarContaPage(){
   
    // Estado para armazenar os dados do paciente vindos do formulário
    const [dadosPaciente, setDadosPaciente] = useState<Paciente | null>(null);
 
    // Função passada como 'onChange' para o componente filho
    const handleFormChange = (data: Paciente) => {
        setDadosPaciente(data);
        // console.log("Dados do Paciente em tempo real:", data);
    };
 
    // Função que será chamada no submit do formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (dadosPaciente && dadosPaciente.nm_paciente) {
            console.log("Submetendo dados FINAIS:", dadosPaciente);
            alert(`Pronto para enviar ao backend: ${dadosPaciente.nm_paciente}`);
        } else {
            alert("Preencha o nome do paciente para submeter.");
        }
    };
   
    return(
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Crie Sua Conta - Cadastro de Paciente</h1>
 
            {/* O formulário HTML nativo para controlar a submissão */}
            <form onSubmit={handleSubmit}>
               
                {/* Passa a função de manipulação de estado do pai para a prop onChange do filho */}
                <CadastroPaciente onChange={handleFormChange}/>
 
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
                        disabled={!dadosPaciente || dadosPaciente.nm_paciente === ''}
                    >
                        Cadastrar Paciente
                    </button>
                </div>
            </form>
           
        </main>
    );
}
 