import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useAddPartipante } from "../../state/hooks/useAddPartipante";
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro";
import { FaUserPlus } from "react-icons/fa6";

const Form = styled.form`
  display: flex;
  box-shadow: 4px 4px 1px black ;
  border-radius: 30px;
  width: 500px;
  @media(max-width: 700px) {
    flex-direction: column;
    box-shadow: none;
    align-items: center;
    gap: 8px;
  }
`
const Input = styled.input`
  border: 2px solid black;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  padding: 20px 30px 20px 30px;
  box-shadow: none;
  outline: none;
  width: 700px;
  font-size: 16px;
  @media(max-width: 700px) {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 4px 4px 1px black ;
    width: 60%;
    padding: 20px 30px 20px 30px;

    display: flex;

  }
`

const Button = styled.button`
  border: 2px solid black;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 20px 30px 20px 30px;
  outline: none;
  box-shadow: none;
  width: 40%;
  background: #C4C4C4;
  color: black;
  font-size: 16px;
  cursor: pointer;

  @media(max-width: 700px) {
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    box-shadow: 4px 4px 1px black ;
    width: 60%;
    padding: 20px 0px 20px 0px;

  }
`
const Formulario = () => {

  const [nome, setNome] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAddPartipante()

  const mensagemDeErro = useMensagemDeErro()

  const adicionarParticipante = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <>
      <Form onSubmit={adicionarParticipante}>
        <Input
          ref={inputRef}
          value={nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
          type="text"
          placeholder={`Insira os nomes dos participantes`} />
        <Button disabled={!nome}>Adicionar</Button>
      </Form>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}

    </>

  );
}

export default Formulario;