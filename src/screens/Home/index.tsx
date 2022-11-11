import { SectionList, Text } from "react-native";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { MealButton } from "@components/MealButton";
import { ScoreHighlight } from "@components/ScoreHighlight";

import { Container,
        ScoreBar,
        Icon,
        MealsText,
        SectionTitle
      } from "./styles";

export function Home() {


  return (
    <Container>
      <Header />
      <ScoreBar>
        <ScoreHighlight />
        <Icon />
      </ScoreBar>
      <MealsText>Refeições</MealsText>
      <Button 
        title='Nova refeição'
      />
      <SectionList 
        showsVerticalScrollIndicator={false}
        sections={[
          {
            title: '12.08.22',
            data: [
              {
                time: '20:00',
                meal: 'X-tudo'
              },
              {
                time: '16:00',
                meal: 'Whey Protein'
              },
              {
                time: '12:30',
                meal: 'Salada com frango'
              },
            ]
          },
          {
            title: '11.08.22',
            data: [
              {
                time: '20:00',
                meal: 'X-tudo'
              },
              {
                time: '16:00',
                meal: 'Whey Protein'
              },
              {
                time: '12:30',
                meal: 'Salada com frango'
              },
            ]
          },
        ]}
        renderItem={({ item }) => (
          <MealButton 
            time={item.time}
            mealName={item.meal}
          /> //{item.time} | {item.meal}
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
    </Container>
  )
}