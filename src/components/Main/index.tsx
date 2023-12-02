import { useState } from "react";
import CardTask from "../CardTask";
import ModalCreateCard from "../ModalCreateCard";
import * as S from "./styles";

export default function Main() {
  const [cards, setCards] = useState<any[]>([]);

  const addCard = (newCard: {
    title: string;
    description: string;
    date: string;
    priority: string;
  }) => {
    setCards([...cards, newCard]);
  };

  return (
    <S.Content>
      <S.TaskList>
        <S.TaskCategoryTitle>
          To Do <span>(3)</span>
        </S.TaskCategoryTitle>
        <ModalCreateCard addCard={addCard} />
        {cards.map((card, index) => {
          return <CardTask key={index} card={card} />;
        })}
      </S.TaskList>
    </S.Content>
  );
}
