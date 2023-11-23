import Formulario from './components/Formulario/Formulario';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Button from './components/Button/Button';
import SelectForm from './components/SelectForm/SelectForm';
import Card from './components/Card/Card';
import Configuracao from './Pages/Configuracao/Configuracao';
import Sorteio from './Pages/Sorteio/Sorteio';
import styled from 'styled-components';

const PaginaFundo = styled.main`

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #4B69FD;
  justify-content: end;

`


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<PaginaFundo><Outlet/></PaginaFundo>}>
            <Route path='/' element={<Configuracao />}/>
            <Route path='sorteio' element={<Sorteio />}/>
          </Route>
 
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
