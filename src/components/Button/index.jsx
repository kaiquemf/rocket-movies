import { Container } from "./styles";

export function Button({ title,icon: Icon , loading = false, ...rest }){
  return(
  <Container type ='button' disabled={loading} {...rest} className="function-btn">
    {Icon && <Icon size={20}/>}
    {loading ? 'Wait...' : title}
  </Container>
  )
}