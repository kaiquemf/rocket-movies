import { Container,Header, Content, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

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
      <Input className="input-container" icon={FiUser} placeholder="Name"/>
      <Input className="input-container" icon={FiMail} placeholder="E-mail"/>
      <Input className="input-container" icon={FiLock} placeholder="Current password"/>
      <Input className="input-container" icon={FiLock} placeholder="New Password"/>

      <Button title="Save"/>
      </Content>
    </Container>
  )
}