// src/types/paciente.ts
 
/**
 * Define a estrutura de dados para o Paciente baseada na tabela T_WTS_PACIENTE.
 */
export type Paciente = {
    // Campos obrigatórios
    nm_paciente: string;
    nr_cpf: string;
    dt_nascimento: string; // Formato string (YYYY-MM-DD) do input type="date"
    fl_sexo: "F" | "M" | "";
   
    // Campos opcionais/nullable
    nr_rg: string;
    ds_escolaridade: string;
    ds_estado_civil: string;
    tip_grupo_sanguineo: string;
    nr_altura: string; // Ex: "1.75"
    nr_peso: string;   // Ex: "75.5"
   
   
};