import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
  key: 'listaParticipantesState',
  // default: [
  //   'Daniel',
  //   'Fernanda',
  //   'Emilly',
  //   'Ana',
  //   'Catarina',
  //   'Jorel'
  // ],
  default: []
})

export const resultadoAmigoSecreto = atom<Map<string, string>>({
  key: 'resultadoAmigoSecreto',
  default: new Map()
})

export const erroState = atom<string>({
  key: 'erroState', 
  default: ''
})


