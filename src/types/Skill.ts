export interface Skill {
  nome: string;
  nivel: number;
  categoria?: 'Escritório' | 'Técnica' | 'Comunicação';
  descricao?: string;
}
