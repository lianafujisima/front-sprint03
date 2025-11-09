
import { useState } from "react";
import React from "react";
import type { PacienteAutentica } from "../../types/PacienteAutentica";

export default function CadastroPacienteAutentica({
    onChange
}: {
    onChange: (data: PacienteAutentica) => void
}) {
   
    const [autenticacao, setAutenticacao] = useState<PacienteAutentica>({
        login: "",
        senha: "",
        confirmarSenha: "",
    });
 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updated = { ...autenticacao, [name]: value };
       
        setAutenticacao(updated);
        onChange(updated);
    };
 
    return (
        <div className="flex flex-col gap-3 w-full max-w-lg mx-auto px-2 sm:px-0 mt-8">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Dados de Acesso</h3>
 
            {/* 1. Login/Usuário */}
            <input
                className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="login"
                placeholder="Usuário (Login) *"
                value={autenticacao.login}
                onChange={handleChange}
                required
            />
           
            {/* 2. Senha */}
            <input
                className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                name="senha"
                placeholder="Senha *"
                value={autenticacao.senha}
                onChange={handleChange}
                required
            />
           
            {/* 3. Confirmação de Senha */}
            <input
                className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                name="confirmarSenha"
                placeholder="Confirmar Senha *"
                value={autenticacao.confirmarSenha}
                onChange={handleChange}
                required
            />
           
            {/* Mensagem de erro simples para o front-end */}
            {autenticacao.senha && autenticacao.confirmarSenha &&
             autenticacao.senha !== autenticacao.confirmarSenha && (
                <p className="text-red-500 text-sm">As senhas não coincidem!</p>
            )}
        </div>
    );
}
 