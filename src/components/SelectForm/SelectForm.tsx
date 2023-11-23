import styled from "styled-components";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

const StyledSelect = styled.select`
  display: flex;
  box-shadow: 4px 4px 1px black ;
  border-radius: 30px;
  width: 300px;
  outline: none;
  padding: 20px 30px 20px 30px;
  font-size: 16px;
  border: 1px solid black;

  @media(max-width: 700px) {
    width: 200px;
    padding: 10px 20px 10px 20px;
  }
`

interface Props {
  participanteDaVez: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectForm = ({ participanteDaVez, onChange }: Props) => {
  const listaParticipantes = useListaParticipantes()

  return (
    <StyledSelect 
    value={participanteDaVez} 
    required 
    onChange={onChange}
    placeholder="Selecione o seu nome" 
    >
      <option disabled value=''>Selecione um nome</option>
      {listaParticipantes.map((participante) => (
        <option key={participante} value={participante}>{participante}</option>
      ))}
    </StyledSelect>
  );
}

export default SelectForm;