
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CadastroPacienteCompleto from "../../components/cadastro/CadastroPacienteCompleto";
import type { UsuarioCadastro } from "../../types/UsuarioCadastro";
 
const INITIAL_CADASTRO: UsuarioCadastro = {
    nome_usuario: '',
    cpf: '',
    telefone: '',
    email_usuario: '',
    senha_usuario: '',
};
 
export default function CriarContaPage(){
   
    const navigate = useNavigate();
   
    const [dadosCadastro, setDadosCadastro] = useState<UsuarioCadastro>(INITIAL_CADASTRO);
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDadosCadastro(prev => ({
            ...prev,
            [name as keyof UsuarioCadastro]: value,
        }));
    };
   
    const handleConfirmSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmarSenha(e.target.value);
    };
   
    const isFormValid =
        dadosCadastro.nome_usuario.length > 0 &&
        dadosCadastro.email_usuario.length > 0 &&
        dadosCadastro.senha_usuario.length >= 6 && 
        dadosCadastro.senha_usuario === confirmarSenha;

 
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    if (!isFormValid || isLoading) {
         return;
    }
 
    const dadosCompletos: UsuarioCadastro = {
        nome_usuario: dadosCadastro.nome_usuario,
        cpf: dadosCadastro.cpf,
        telefone: dadosCadastro.telefone,
        email_usuario: dadosCadastro.email_usuario,
        senha_usuario: dadosCadastro.senha_usuario,
    };
   
    setIsLoading(true); 
    try {
        const API_ENDPOINT = 'https://java-challenge-sp4.onrender.com/doctorAjuda/cadastrar/paciente';
 
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosCompletos),
        });
 
        if (response.status === 201) { 
            alert("Paciente cadastrado com sucesso! Redirecionando...");
            navigate('/');
        } else {
            let errorMessage = 'Ocorreu um erro desconhecido.';
            try {
                const errorData = await response.json();
               
                if (errorData && errorData.erro) {
                    errorMessage = errorData.erro;
                } else if (errorData && errorData.message) {
                    errorMessage = errorData.message;
                }
            } catch (e) {
                errorMessage = response.statusText || `Erro no servidor (Status: ${response.status})`;
            }
           
            alert(`Falha no cadastro (Status ${response.status}): ${errorMessage}`);
        }
 
    } catch (error) {
        console.error("Erro na comunicação com a API:", error);
        alert("⚠️ Erro de rede. Verifique sua conexão e tente novamente.");
    } finally {
        setIsLoading(false);
    }
};
 
    return(
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Crie Sua Conta - Cadastro de Paciente</h1>
 
            <form onSubmit={handleSubmit}>
               
                {/*Usando o novo componente unificado */}
                <CadastroPacienteCompleto
                    dados={dadosCadastro}
                    onChange={handleChange}
                    onConfirmSenhaChange={handleConfirmSenhaChange}
                    confirmarSenha={confirmarSenha}
                />
 
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200 disabled:opacity-50"
                        disabled={!isFormValid || isLoading}
                    >
                        {isLoading ? 'Enviando...' : 'Cadastrar e Criar Acesso'}
                    </button>
                </div>
            </form>
        </main>
    );
}
 