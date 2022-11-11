import { Container, Title, PlusIcon } from "./styles";

type Props = {
  title: string
  hasPlusIcon?: boolean 
}
export function Button({ title, hasPlusIcon }: Props) {
  return (
    <Container>
      <PlusIcon />
      <Title>{title}</Title>
    </Container>
  )
}