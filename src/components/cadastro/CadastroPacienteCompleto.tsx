
import React from 'react';
import type { UsuarioCadastro } from "../../types/UsuarioCadastro";

interface CadastroPacienteCompletoProps {
    dados: UsuarioCadastro;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onConfirmSenhaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    confirmarSenha: string;
}
 
export default function CadastroPacienteCompleto({
    dados,
    onChange,
    onConfirmSenhaChange,
    confirmarSenha
}: CadastroPacienteCompletoProps) {

    const inputStyle = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150";
 
    return (
        <div className="space-y-6 max-w-lg mx-auto bg-white p-8 shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-3 mb-4">
                Informações Pessoais e de Acesso
            </h2>
 
            {/* --- Seção de Dados Pessoais --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nome Completo (nome_usuario) */}
                <div>
                    <label htmlFor="nome_usuario" className="block text-sm font-medium text-gray-700">
                        Nome Completo
                    </label>
                    <input
                        type="text"
                        name="nome_usuario"
                        id="nome_usuario"
                        placeholder="Seu nome completo"
                        className={inputStyle}
                        value={dados.nome_usuario}
                        onChange={onChange}
                        required
                    />
                </div>
 
                {/* CPF */}
                <div>
                    <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                        CPF
                    </label>
                    <input
                        type="text"
                        name="cpf"
                        id="cpf"
                        placeholder="000.000.000-00"
                        className={inputStyle}
                        value={dados.cpf}
                        onChange={onChange}
                        maxLength={14}
                        required
                    />
                </div>
            </div>
 
            {/* Telefone */}
            <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                    Telefone
                </label>
                <input
                    type="tel"
                    name="telefone"
                    id="telefone"
                    placeholder="(99) 99999-9999"
                    className={inputStyle}
                    value={dados.telefone}
                    onChange={onChange}
                    required
                />
            </div>
 
            <h2 className="text-xl font-semibold text-gray-700 border-b pt-4 pb-3 mb-4">
                Criação de Acesso
            </h2>
           
            {/* --- Seção de Acesso --- */}
           
            {/* Email (email_usuario) */}
            <div>
                <label htmlFor="email_usuario" className="block text-sm font-medium text-gray-700">
                    Email (Login)
                </label>
                <input
                    type="email"
                    name="email_usuario"
                    id="email_usuario"
                    placeholder="seu.email@exemplo.com"
                    className={inputStyle}
                    value={dados.email_usuario}
                    onChange={onChange}
                    required
                />
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Senha (senha_usuario) */}
                <div>
                    <label htmlFor="senha_usuario" className="block text-sm font-medium text-gray-700">
                        Senha
                    </label>
                    <input
                        type="password"
                        name="senha_usuario"
                        id="senha_usuario"
                        placeholder="Mínimo 6 caracteres"
                        className={inputStyle}
                        value={dados.senha_usuario}
                        onChange={onChange}
                        required
                    />
                </div>
 
                {/* Confirmar Senha */}
                <div>
                    <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700">
                        Confirmar Senha
                    </label>
                    <input
                        type="password"
                        name="confirmarSenha"
                        id="confirmarSenha"
                        placeholder="Repita a senha"
                        className={inputStyle}
                        value={confirmarSenha}
                        onChange={onConfirmSenhaChange}
                        required
                    />
                </div>
            </div>
        </div>
    );
}
 