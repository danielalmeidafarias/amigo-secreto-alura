import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ $buttonColor?: string, $shadow?: boolean, $size?: string }>`
  background-color: ${props => props.$buttonColor === 'orange' ? '#FE652B' : '#4B69FD'};
  padding: 20px 30px 20px 30px;
  color: white;
  font-size: 18px;
  box-shadow: ${props => props.$shadow ? '4px 4px 1px black' : 'none'};
  border-radius: 30px;
  max-width: 300px;
  width: 400px;
  width: ${ props => props.$size };
  border: 1px solid black;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media(max-width: 700px) {
    padding: 10px 15px 10px 15px;
    width: 300px;
    font-size: 16px;
  }
`

interface Props {
  children: React.ReactNode,
  color?: 'orange' | ''
  shadow?: boolean
  disabled?: boolean
  size?: string
  onClick?: () => void
}



const Button = ({ children, color, shadow, disabled, onClick, size }: Props) => {
  return (
    <StyledButton
      $size={size}
      onClick={onClick}
      $shadow={shadow}
      $buttonColor={color}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;