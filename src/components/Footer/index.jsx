import { Container, Logo } from "./styles";

export function Footer(){
  return(
    <Container>
      <Logo>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
        <path d="M10.6935 0.5L21.3513 6.65327V18.9598L10.6935 25.1131L0.0357265 18.9598V6.65327L10.6935 0.5Z" fill="#065E7C"/>
        </svg>
        <h2>food explorer</h2>
      </Logo>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
};