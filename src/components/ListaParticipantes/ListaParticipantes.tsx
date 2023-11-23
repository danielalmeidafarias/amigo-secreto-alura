import styled from "styled-components";
import { StyledP } from "../../Pages/Sorteio/Sorteio";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

const Ul = styled.ul`
  overflow-y: auto;
`

const ListaParticipantes = () => {
  const participantes:string[] = useListaParticipantes()

  return (  
    <Ul>
      {participantes?.map(participante => (
        <StyledP as={'li'} key={participante}>{participante}</StyledP>
      ))}
    </Ul>
  );
}
 
export default ListaParticipantes;