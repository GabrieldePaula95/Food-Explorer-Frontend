import { Container, Section, Main, Div } from "./styles";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

export function Home(){
  return(
    <Container>
      <Header />
      <Section>
        <div>
          <img src="../../../assets/pngegg 2.svg" alt="Imagens de macarron coloridos com frutas" />
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Section>
      <Main>
        <h2>Refeições</h2>
        <Div>
          <Card/> <Card/>
        </Div>
        <h2>Pratos principais</h2>
        <Div>
          <Card/> <Card/>
        </Div>
        <h2>Sobremesas</h2>
        <Div>
          <Card/> <Card/>
        </Div>
      </Main>
      <Footer/>
    </Container>
  );
}