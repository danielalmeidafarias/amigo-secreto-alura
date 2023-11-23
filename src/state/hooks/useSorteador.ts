import shuffle from "just-shuffle"
import { useListaParticipantes } from "./useListaParticipantes"
import { realizarSorteio } from "../helpers/realizarSorteio"
import { useSetRecoilState } from "recoil"
import { resultadoAmigoSecreto } from "../atom"

export const useSorteador = () => {
  const participantes = useListaParticipantes()
  const setResultado = useSetRecoilState(resultadoAmigoSecreto)

  return () => {
    const resultado = realizarSorteio(participantes)
    setResultado(resultado)
  } 
}