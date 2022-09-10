import { Container, Content, Section } from "./styles";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
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
    <Section>
     <Note title="Interestellar"/>
    </Section>
   </Container>
  )
}