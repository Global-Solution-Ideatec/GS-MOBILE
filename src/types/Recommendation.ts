export interface Recommendation {
  id: string;
  colaborador: string;
  area: string;
  score: number;
  fatores?: string[];
  dataCriacao?: Date;
}
