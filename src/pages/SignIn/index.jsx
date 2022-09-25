import { ButtonText } from '../../components/ButtonText';
import { Container, Form, Background } from './styles';
import { Button } from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to track everything you watch.</p>
        <h2>Login</h2>

        <Input icon={FiMail} placeholder="E-mail"/>
        <Input icon={FiLock} placeholder="Password"/>
        
        <Button title="Login"/>
        <Link to="/register" className='text-button'><ButtonText title="create account"/></Link>
      </Form>
      <Background/>
    </Container>
  )
}