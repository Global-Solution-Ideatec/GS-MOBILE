import React, { createContext, useState } from 'react';
import {
  tarefas,
  habilidades,
  frasesMotivacionais,
  emojisHumor,
  labelsHumor,
  niveisEnergia,
  niveisFoco,
  descricaoSobre
} from '../services/userDataService';

interface Feedback {
  author: string;
  feedback: string;
  date: string;
}

interface UserDataContextProps {
  tarefas: typeof tarefas;
  habilidades: typeof habilidades;
  frasesMotivacionais: typeof frasesMotivacionais;
  emojisHumor: typeof emojisHumor;
  labelsHumor: typeof labelsHumor;
  niveisEnergia: typeof niveisEnergia;
  niveisFoco: typeof niveisFoco;
  descricaoSobre: string;
  feedbacks: Feedback[];
  addFeedback: (fb: Feedback) => void;
}

export const UserDataContext = createContext<UserDataContextProps>({
  tarefas: [],
  habilidades: [],
  frasesMotivacionais: [],
  emojisHumor: [],
  labelsHumor: [],
  niveisEnergia: [],
  niveisFoco: [],
  descricaoSobre: '',
  feedbacks: [],
  addFeedback: () => {},
});

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const addFeedback = (fb: Feedback) => setFeedbacks((prev) => [fb, ...prev]);

  return (
    <UserDataContext.Provider
      value={{
        tarefas,
        habilidades,
        frasesMotivacionais,
        emojisHumor,
        labelsHumor,
        niveisEnergia,
        niveisFoco,
        descricaoSobre,
        feedbacks,
        addFeedback,
      }}>
      {children}
    </UserDataContext.Provider>
  );
};
