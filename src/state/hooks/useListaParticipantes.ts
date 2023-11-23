import { useRecoilValue } from "recoil"
import { listaParticipantesState } from "../atom"

export const useListaParticipantes = () => {
  
  const listaParticipantes = useRecoilValue(listaParticipantesState)

  return listaParticipantes
}