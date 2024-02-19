import { Container } from "./styles";

export function ButtonText( { title } ){
  return (
    <Container>
      {<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 6.14568C21.0976 6.5362 21.0976 7.16937 20.7071 7.55989L11.4142 16.8528L20.7071 26.1457C21.0976 26.5362 21.0976 27.1694 20.7071 27.5599C20.3166 27.9504 19.6834 27.9504 19.2929 27.5599L9.29289 17.5599C8.90237 17.1694 8.90237 16.5362 9.29289 16.1457L19.2929 6.14568C19.6834 5.75515 20.3166 5.75515 20.7071 6.14568Z" fill="white"/>
      </svg>}
      { title }    
    </Container>
  )
}