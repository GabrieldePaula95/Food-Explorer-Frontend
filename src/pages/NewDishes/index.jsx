import { Container, Main } from "./styles"; 

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"; 
import { Input } from "../../components/Input"; 

export function NewDishes(){
  return(
    <Container>
      <Header />
        <Main>
          <ButtonText title="Voltar"/>
          <form action="#">
            <h1>Novo prato</h1>
            <h3>Imagem do prato</h3>
            <input id="file" type="file" placeholder="Selecionar imagem" />
            <label for="file">Selecione Imagem</label>
            <h3>Nome</h3>
            <Input placeholder="Ex.: Salada Ceasar"/>
            <h3>Categoria</h3>
            <select multiple>
              <option value="Refeição">Refeição</option>
              <option value="Sobremesa">Sobremesa</option>
              <option value="Prato principal">Prato principal</option>
            </select>
          </form>
        </Main>
      <Footer />
    </Container>
  );
}