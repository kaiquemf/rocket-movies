import { ButtonText } from '../../components/ButtonText';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Content } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from "react-router-dom";


export function CreateNote(){
  return(
    <Container>
      <Header />
      <Content>
      <Link to="/"><ButtonText icon={FiArrowLeft} title="Return"/></Link>
      <h1>New movie</h1>
      <div className="divide-inputs">
        <Input placeholder="Title"/>
        <Input placeholder="Your note (from 0 to 5)"/>
      </div>
      <TextArea placeholder="Make your note...">

      </TextArea>
      <Section title="Markers">
        <div className="tags">
        <NoteItem value="React"/>
        <NoteItem isNew value="New marker"/>
        </div>
      </Section>
      <div className="buttons">
      <Button title="Remove movie"/>
      <Button title="Save movie"/>
      </div>
      </Content>
    </Container>
  )
}