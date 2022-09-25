import { Container, Content, Section } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

export function Home(){
  return(
   <Container>
    <Header />
    <Content>
     <h1>My Movies</h1>
     <Link to="/createnote"><Button icon={FiPlus} title="Add new movie"/></Link>
    </Content>
    <Section>
     <Link to="/notepreview/:id">
      <Note data={{title:"Interestellar",
        tags:[
        {id: "1", name:"Science Fiction"},
        {id: "2", name:"Drama"},
        {id: "3", name:"Family"}]}}>              
      </Note>
     </Link>
    </Section>
   </Container>
  )
}