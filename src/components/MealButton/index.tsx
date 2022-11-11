import { Container, TextGroup, TimeText, MealText, StatusCircle } from "./styles";

type Props = {
  time: string
  mealName: string
}


export function MealButton({ time, mealName }: Props) {
  return (
    <Container>
      <TextGroup>
        <TimeText>{time}</TimeText>
        <MealText>{mealName}</MealText>
      </TextGroup>
      <StatusCircle></StatusCircle>
    </Container>
  )
}