import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Footer from "./Footer"
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"

jest.mock("../../state/hooks/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

const mockSorteador = jest.fn()
jest.mock("../../state/hooks/useSorteador", () => {
  return {
    useSorteador: () => mockSorteador
  }
})

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao
  }
})

describe('quando não existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([])
  })

  test('a brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
})

describe('quando existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([
      "Daniel",
      "Fernanda",
      "Emilly"
    ])
  })

  test('a brincadeira pode ser inciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )
    const button = screen.getByRole('button')
    expect(button).not.toBeDisabled()
  })

  test('a brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockNavegacao).toHaveBeenCalledTimes(1)
    expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    expect(mockSorteador).toHaveBeenCalledTimes(1)
  })
})
