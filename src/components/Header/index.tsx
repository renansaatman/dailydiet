import { Container, Logo, UserImage } from "./styles";

import logoImg from '@assets/logo.png'
import userImg from '@assets/user.png'

export function Header() {
  return (
    <Container>
      <Logo source={logoImg}/>
      <UserImage source={userImg}/>
    </Container>
  )
}