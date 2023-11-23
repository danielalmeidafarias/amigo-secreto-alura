import styled from "styled-components";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Formulario/Formulario";
import ListaParticipantes from "../../components/ListaParticipantes/ListaParticipantes";

export const Styledh1 = styled.h1`
  color: #4B69FD;
  font-size: 32px;
  font-weight: 600;
` 

const Configuracao = () => {
  return (  
    <Card>
      <Styledh1>Vamos Começar!</Styledh1>
      <Formulario />
      <ListaParticipantes />
      <Footer />
    </Card>
  );
}
 
export default Configuracao;