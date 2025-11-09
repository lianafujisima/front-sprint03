
export type Paciente = {
    // Campos obrigatórios
    nm_paciente: string;
    nr_cpf: string;
    dt_nascimento: string;
    fl_sexo: "F" | "M" | "";
   
    // Campos opcionais/nullable
    nr_rg: string;
    ds_escolaridade: string;
    ds_estado_civil: string;
    tip_grupo_sanguineo: string;
    nr_altura: string; 
    nr_peso: string;
   
   
};