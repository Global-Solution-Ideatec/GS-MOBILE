export interface Task {
  id: number;
  titulo: string;
  descricao: string;
  status: 'Pendente' | 'Em Andamento' | 'Concluído';
  prioridade: 'Baixa' | 'Média' | 'Alta';
  dataCriacao?: Date;
  dataVencimento?: Date;
  responsavel?: string;
}
