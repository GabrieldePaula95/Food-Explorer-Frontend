import { Container, Main } from "./styles";

import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { FiSearch } from "react-icons/fi";

export function Menu(){
  return(
    <Container>
      <header>
        <img src="../../../assets/Close.svg" alt="Desenho de um xis" /> 
        <p>Menu</p>
      </header>
      <Main>
        <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch}/>

        <button>Novo prato</button>
        <button>Sair</button>
      </Main>
      <Footer />
    </Container>
  )
}