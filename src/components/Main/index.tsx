import { useState } from "react";
import { useDrag } from "react-dnd";
import CardTask from "../CardTask";
import ModalCreateCard from "../ModalCreateCard";
import * as S from "./styles";

export default function Main() {
  const [cards, setCards] = useState<any[]>([]);
  const [cards2, setCards2] = useState<any[]>([]);

  const addCard = (newCard: {
    title: string;
    description: string;
    date: string;
    priority: string;
  }) => {
    setCards([...cards, newCard]);
  };

  console.log(cards.length);
  return (
    <S.Content>
      <S.TaskList>
        <S.TaskCategoryTitle>
          To Do <span>({cards.length})</span>
        </S.TaskCategoryTitle>
        <ModalCreateCard addCard={addCard} />
        {cards.map((card, index) => {
          return <CardTask key={index} card={card} />;
        })}
      </S.TaskList>
      <S.TaskList>
        <S.TaskCategoryTitle>
          Doing <span>({cards2.length})</span>
        </S.TaskCategoryTitle>
        <ModalCreateCard addCard={addCard} />
        {cards2.map((card, index) => {
          return <CardTask key={index} card={card} />;
        })}
      </S.TaskList>
    </S.Content>
  );
}
