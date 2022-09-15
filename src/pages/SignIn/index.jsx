import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to track everything you watch.</p>
        <h2>Login</h2>

        <Input icon={FiMail} placeholder="E-mail"/>
        <Input icon={FiLock} placeholder="Password"/>
        
        <Button title="LogIn"/>
        <ButtonText title="create account"/>
      </Form>
      <Background/>
    </Container>
  )
}