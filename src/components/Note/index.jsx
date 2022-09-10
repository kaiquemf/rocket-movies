import { Container } from "./styles";
import { RateStars } from "../RateStars";

export function Note({title, ...rest}){
  return(
    <Container>
      <h1>{title}</h1>
      <RateStars />
    </Container>
  )
}