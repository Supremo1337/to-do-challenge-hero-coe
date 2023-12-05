import { useState } from "react";
import * as S from "./styles";
import { useDateContext } from "../contexts/dateContext";
import { useDrag } from "react-dnd";

interface CardTaskProps {
  card: {
    title: string;
    description: string;
    date: string;
    priority: string;
  };
}

export default function CardTask({ card }: CardTaskProps) {
  const { formattedTodayDateToMaterialFormat } = useDateContext();
  let taskDateIsLate = formattedTodayDateToMaterialFormat > card.date;
  let formatedDateToUTC = new Date(card.date).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: card.title,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <S.Content ref={dragRef} $isDragging={isDragging}>
      <S.CardTitle>{card.title}</S.CardTitle>
      <S.CardDescription>{card.description}</S.CardDescription>
      <S.BottomCard>
        <S.TaskTime>
          <S.TimeIcon $isLate={taskDateIsLate} />
          <S.TimeTitle $isLate={taskDateIsLate}>
            {formatedDateToUTC}
          </S.TimeTitle>
        </S.TaskTime>
        {card.priority === "HIGH" ? (
          <S.PriorityIndicatator $priority="HIGH">HIGH</S.PriorityIndicatator>
        ) : card.priority === "MEDIUM" ? (
          <S.PriorityIndicatator $priority="MEDIUM">
            MEDIUM
          </S.PriorityIndicatator>
        ) : (
          <S.PriorityIndicatator $priority="LOW">LOW</S.PriorityIndicatator>
        )}
      </S.BottomCard>
    </S.Content>
  );
}
