import { render, screen, fireEvent } from "@testing-library/react"
import App from './App'

describe('<App />', () => {
  it("should be able to render the component correctly", () => {
    render(<App />)
  
    const textElement = screen.queryByText('Hello,')
    expect(textElement).toBeInTheDocument()
  
    const inputElement = screen.queryByPlaceholderText('digite seu nome')
    expect(inputElement).toBeInTheDocument()
  
    const imageElement = screen.queryByRole('img')
    expect(imageElement).toBeInTheDocument()
  })
  
  it('should be able to find the imagem by the correct alt text', () => {
    render(<App />)
  
    const altTextImageElement = screen.getByAltText('ilustração de uma mulher negra usando o computador e segurando uma xícara')
    expect(altTextImageElement).toBeInTheDocument()
  })
  
  it('should be able to get input value correctly', () => {
    render(<App />)
  
    const inputElement = screen.queryByPlaceholderText('digite seu nome')
    fireEvent.change(inputElement, {
      target: {
        value: 'João'
      }
    })
  
    const typedValue = screen.queryByText('João')
  
    expect(typedValue).toHaveTextContent('João')
  })
  
  it('should be able to render the correct content after user type', () => {
    render(<App />)
  
    const inputElement = screen.queryByPlaceholderText('digite seu nome')
    fireEvent.change(inputElement, {
      target: {
        value: 'João'
      }
    })
  
    expect(screen.queryByText('João')).toHaveTextContent('João')
    expect(screen.queryByText('Hello,')).toHaveTextContent('Hello, João')
  })
})
