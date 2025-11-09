// src/routes/CriarContaPage/index.tsx (Atualizado)
 
import React, { useState } from 'react';
import CadastroPaciente from "../../components/cadastro/CadastroPaciente";
import CadastroPacienteAutentica from "../../components/cadastro/CadastroPacienteAutentica"; // NOVO IMPORT
import type{ Paciente } from "../../types/Paciente";
import type{ PacienteAutentica } from "../../types/PacienteAutentica"; // NOVO IMPORT
 
export default function CriarContaPage(){
   
    // Estado para os Dados Pessoais
    const [dadosPaciente, setDadosPaciente] = useState<Paciente | null>(null);
    // Estado para os Dados de Autenticação
    const [dadosAutentica, setDadosAutentica] = useState<PacienteAutentica | null>(null); // NOVO ESTADO
 
    // Funções de manipulação de estado
    const handleDadosChange = (data: Paciente) => setDadosPaciente(data);
    const handleAutenticaChange = (data: PacienteAutentica) => setDadosAutentica(data); // NOVA FUNÇÃO
 
    // Função de Submissão (incluindo validação de senha)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       
        // Validação de Dados Pessoais (nm_paciente é o mínimo)
        if (!dadosPaciente || dadosPaciente.nm_paciente === '') {
             return alert("Por favor, preencha o nome do paciente.");
        }
       
        // Validação de Senha
        if (!dadosAutentica || dadosAutentica.senha !== dadosAutentica.confirmarSenha || dadosAutentica.senha === '') {
             return alert("Verifique o login e a confirmação de senha!");
        }
 
        // Se tudo estiver OK, prepara o objeto final para o backend
        const dadosCompletos = {
            ...dadosPaciente,
            login: dadosAutentica.login,
            senha: dadosAutentica.senha,
            // Não envia a 'confirmarSenha' para o backend
        };
       
        console.log("Dados FINAIS UNIFICADOS para envio:", dadosCompletos);
        alert(`Dados prontos para envio. Paciente: ${dadosCompletos.nm_paciente}, Login: ${dadosCompletos.login}`);
        // 🛑 LÓGICA DE ENVIO À API/BACKEND VIRIA AQUI
    };
   
    // Lógica para desabilitar o botão de forma mais robusta
    const isButtonDisabled =
        !dadosPaciente ||
        dadosPaciente.nm_paciente === '' ||
        !dadosAutentica ||
        dadosAutentica.senha === '' ||
        dadosAutentica.senha !== dadosAutentica.confirmarSenha;
 
    return(
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Crie Sua Conta - Cadastro de Paciente</h1>
 
            <form onSubmit={handleSubmit}>
               
                {/* Componente de Dados Pessoais */}
                <CadastroPaciente onChange={handleDadosChange}/>
 
                {/* Componente de Autenticação */}
                <CadastroPacienteAutentica onChange={handleAutenticaChange}/> {/* NOVO COMPONENTE */}
 
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
                        disabled={isButtonDisabled} // Usa a lógica robusta
                    >
                        Cadastrar e Criar Acesso
                    </button>
                </div>
            </form>
           
        </main>
    );
}
 