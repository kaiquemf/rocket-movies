import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Container,Header, Content, Avatar } from "./styles";
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Profile(){
  return(
    <Container>
      <Header>
        <div className="content">
        <FiArrowLeft />
        <button><span>Return</span></button>
        </div>
      </Header>

      <Content>
        <Avatar>
        <img src="https://github.com/kaiquemf.png" alt="User image profile" />
        <label htmlFor="avatar">
          <FiCamera />
          <input  id="avatar" type="file"/>
        </label>
      </Avatar>
      <section className="info-inputs">
      <Input icon={FiUser} placeholder="Name"/>
      <Input icon={FiMail} placeholder="E-mail"/>
      <div className="current-password-input">
      <Input icon={FiLock} placeholder="Current password"/>
      </div>
      <div className="new-password-input">
      <Input icon={FiLock} placeholder="New Password"/>
      </div>
      <Button title="Save"/>
      </section>
      </Content>
    </Container>
  )
}