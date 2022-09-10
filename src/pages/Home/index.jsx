import { Container, Content, Section } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
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
    <Note data={{title:"Interestellar",
       tags:[
       {id: "1", name:"Science Fiction"},
       {id: "2", name:"Drama"},
       {id: "3", name:"Family"}]}}>              
     </Note>
    </Section>
   </Container>
  )
}