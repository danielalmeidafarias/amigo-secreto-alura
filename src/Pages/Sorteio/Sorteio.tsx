import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import SelectForm from "../../components/SelectForm/SelectForm";
import { Styledh1 } from "../Configuracao/Configuracao";
import Aviao from '../../assets/images/aviao.png'
import styled from "styled-components";
import { useState } from "react";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import { MdCasino } from "react-icons/md";

export const StyledP = styled.p<{ $color?: 'orange' }>`
  color: ${props => props.$color === 'orange' ? '#FE652BFC' : '#444444'};
  font-size: 18px;
  font-weight: 600;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;
`
const Img = styled.img<{ $size: string }>`
  width: ${props => props.$size};
`

const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')
  const resultado = useResultadoSorteio()

  const sortear = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }

  return (
    <Card>
      <Styledh1>Quem vai tirar o papelzinho?</Styledh1>
      <Form action="" onSubmit={(e: React.FormEvent<HTMLFormElement>)  => sortear(e)}>
        <SelectForm
          onChange={(e) => setParticipanteDaVez(e.target.value)}
          participanteDaVez={participanteDaVez} />
        <StyledP>Clique em sortear para ver quem é seu amigo secreto!</StyledP>
        <Button size="180px" shadow color="orange"><MdCasino size={25}/>Sortear!</Button>
      </Form>
      {amigoSecreto && <StyledP $color="orange" role="alert">{amigoSecreto}</StyledP>}
      <Img $size="100px" src={Aviao} alt="" />
    </Card>
  );
}

export default Sorteio