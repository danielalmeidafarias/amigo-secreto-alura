import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import Button from "../Button/Button";
import Sacolas from '../../assets/images/sacolas.png'
import styled from "styled-components";
import { useSorteador } from "../../state/hooks/useSorteador";
import { FaRegCirclePlay } from "react-icons/fa6";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-evenly;

  @media(max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Img = styled.img`
  width: 180px;

  @media (max-width: 700px) {
    width: 127px;
  }
`

const Footer = () => {
  const participantes = useListaParticipantes()
  const navigate = useNavigate()
  const sortear = useSorteador()

  const iniciar = () => {
    sortear()
    navigate('/sorteio')
  }


  return (
    <StyledFooter>
      <Button
        shadow
        onClick={iniciar}
        disabled={participantes.length < 3}
        color="orange"><FaRegCirclePlay />Iniciar Brincadeira!
      </Button>
      <Img src={Sacolas} alt="" />
    </StyledFooter>
  );
}

export default Footer;