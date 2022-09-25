import { Container } from './style'

export function ButtonText({title, icon: Icon, isActive = false, ...rest}){
  return(
    <Container {...rest} type= "button" isActive={ isActive } className="text-btn">
      {Icon && <Icon size={20}/>}
      {title}
    </Container>
  )
}