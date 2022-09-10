import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { FiPlus } from "react-icons/fi";

export function Home(){
  return(
    <Container>
      <Header />
      <Content>
        <h1>My Movies</h1>
        <Button icon={FiPlus} title="Add new movie"/>
      </Content>
    </Container>
  )
}