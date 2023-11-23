import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoSrc from '../../assets/images/logo.png'
import logoPequenaSrc from '../../assets/images/logo-pequeno.png'

export const StyledCard = styled.div`
  height: 400px;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  background: #FFF9EB;
  bottom: 0;
  border: 3px solid #303030;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  padding: 40px 0 40px 0;
  gap: 40px;
  @media (max-width: 700px) {
    height: 400px;
  };
`

const Card: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })

  return (
      <StyledCard>
        {children}
      </StyledCard>
  );
}

export default Card;