import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import {FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'

export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to track everything you watch.</p>
        <h2>Create your account</h2>

        <Input icon={FiUser} placeholder="Name"/>
        <Input icon={FiMail} placeholder="E-mail"/>
        <Input icon={FiLock} placeholder="Password"/>
        
        <Button title="Login"/>
        <ButtonText icon={FiArrowLeft} title="Back to login"/>
      </Form>
      <Background/>
    </Container>
  )
}