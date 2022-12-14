import { Container, Profile } from "./styles";
import { FiSearch } from "react-icons/fi";
import { Input } from "../Input";

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Search by title" icon={FiSearch}/>
      <Profile>
        <div className="text-content">
        <strong>Kaique Martins</strong>
        <button>logout</button>
        </div>
        <img src="https://github.com/kaiquemf.png" alt="Profile Image" />
      </Profile>
    </Container>
  )
}