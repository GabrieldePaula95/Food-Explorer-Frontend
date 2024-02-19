import { Container } from "../Button/styles"

export function Button( { title }){
  return(
    <Container type="button">
      {title}
    </Container>
  )
}