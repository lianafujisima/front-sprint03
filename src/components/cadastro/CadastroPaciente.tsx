import { useState } from "react"
import React from "react" 
 

type Paciente = {
  // Campos obrigatórios (NOT NULL)
  nm_paciente: string
  nr_cpf: string
  dt_nascimento: string
  fl_sexo: "F" | "M" | ""
 
  // Campos opcionais/Nullable
  nr_rg: string
  ds_escolaridade: string
  ds_estado_civil: string
  tip_grupo_sanguineo: string
  nr_altura: string 
  nr_peso: string 
 
}
 
export default function CadastroPaciente({ onChange }: { onChange: (data: Paciente) => void }) {
  const [paciente, setPaciente] = useState<Paciente>({
    nm_paciente: "",
    nr_cpf: "",
    dt_nascimento: "",
    fl_sexo: "",
    nr_rg: "",
    ds_escolaridade: "",
    ds_estado_civil: "",
    tip_grupo_sanguineo: "",
    nr_altura: "",
    nr_peso: "",
  })
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const updated = { ...paciente, [name]: value }
    setPaciente(updated)
    onChange(updated)
  }
 
  return (
    <div className="flex flex-col gap-3 w-full max-w-lg mx-auto px-2 sm:px-0">
      <h3 className="text-xl font-semibold mb-2 text-blue-700">Dados Pessoais</h3>
 
      {/* 1. Nome do Paciente (nm_paciente) */}
      <input
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="nm_paciente"
        placeholder="Nome Completo *"
        value={paciente.nm_paciente}
        onChange={handleChange}
        required
      />
     
      {/* Linha com CPF e RG */}
      <div className="flex gap-3">
          {/* 2. CPF (nr_cpf) */}
          <input
            className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="nr_cpf"
            placeholder="CPF (Apenas números) *"
            value={paciente.nr_cpf}
            onChange={handleChange}
            required
            maxLength={11}
          />
          {/* 3. RG (nr_rg) */}
          <input
            className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="nr_rg"
            placeholder="RG"
            value={paciente.nr_rg}
            onChange={handleChange}
          />
      </div>
 
      {/* Linha com Data de Nasc. e Sexo */}
      <div className="flex gap-3">
          {/* 4. Data de Nascimento (dt_nascimento) */}
          <div className="flex flex-col w-full">
            <label htmlFor="dt_nascimento" className="text-xs text-gray-500">Data de Nascimento *</label>
            <input
              className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              id="dt_nascimento"
              name="dt_nascimento"
              value={paciente.dt_nascimento}
              onChange={handleChange}
              required
            />
          </div>
         
          {/* 5. Sexo (fl_sexo) */}
          <div className="flex flex-col w-full">
            <label htmlFor="fl_sexo" className="text-xs text-gray-500">Sexo *</label>
            <select
              className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="fl_sexo"
              id="fl_sexo"
              value={paciente.fl_sexo}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Selecione</option>
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
            </select>
          </div>
      </div>
 
      <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-700">Informações Adicionais</h3>
 
      {/* 6. Escolaridade (ds_escolaridade) */}
      <select
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="ds_escolaridade"
        value={paciente.ds_escolaridade}
        onChange={handleChange}
      >
        <option value="">Escolaridade</option>
        <option value="Fundamental">Fundamental</option>
        <option value="Medio">Médio</option>
        <option value="Superior">Superior</option>
        <option value="Pos-Graduacao">Pós-Graduação</option>
      </select>
     
      {/* 7. Estado Civil (ds_estado_civil) */}
      <select
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="ds_estado_civil"
        value={paciente.ds_estado_civil}
        onChange={handleChange}
      >
        <option value="">Estado Civil</option>
        <option value="Solteiro">Solteiro</option>
        <option value="Casado">Casado</option>
        <option value="Divorciado">Divorciado</option>
        <option value="Viuvo">Viúvo</option>
      </select>
 
      {/* Linha com Altura, Peso e Tipo Sanguíneo */}
      <div className="flex gap-3">
          {/* 8. Tipo Sanguíneo (tip_grupo_sanguineo) */}
          <select
              className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="tip_grupo_sanguineo"
              value={paciente.tip_grupo_sanguineo}
              onChange={handleChange}
            >
              <option value="">Tipo Sanguíneo</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
          </select>
         
          {/* 9. Altura (nr_altura) */}
          <input
            className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="nr_altura"
            placeholder="Altura (m, ex: 1.75)"
            value={paciente.nr_altura}
            onChange={handleChange}
          />
         
          {/* 10. Peso (nr_peso) */}
          <input
            className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="nr_peso"
            placeholder="Peso (kg, ex: 75.5)"
            value={paciente.nr_peso}
            onChange={handleChange}
          />
      </div>
    </div>
  )
}