import { Container, Main, IngredientsContainer } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Ingredients } from "../../components/Ingredients";

export function Dishes(){
  return(
    <Container>
      <Header/>
        <Main>
          <ButtonText title="Voltar"/>
          <img src="../../../assets/Salada Ravanello.svg" alt="Imagem da Salada Ravanello" />
          <h1>Salada Ravanello</h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
          <IngredientsContainer>
            <Ingredients title="Alface"/>
            <Ingredients title="Cebola"/>
            <Ingredients title="Tomate"/>
            <Ingredients title="Pão Naan"/>
            <Ingredients title="pepino"/>
            <Ingredients title="rabanete"/>
          </IngredientsContainer>
          <Button title="Editar prato"/>
        </Main>
      <Footer/>
    </Container>
  );
};