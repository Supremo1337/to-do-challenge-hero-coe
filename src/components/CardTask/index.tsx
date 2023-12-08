import { useState } from "react";
import * as S from "./styles";
import { useDateContext } from "../contexts/dateContext";
import { useDrag } from "react-dnd";

interface CardTaskProps {
  card: {
    id: string;
    title: string;
    description: string;
    date: string;
    priority: string;
  };
  doneList?: any[];
}

export default function CardTask({ card, doneList }: CardTaskProps) {
  const { formattedTodayDateToMaterialFormat } = useDateContext();
  let taskDateIsLate = formattedTodayDateToMaterialFormat > card.date;
  let formatedDateToUTC = new Date(card.date).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "CARD",
    item: { id: card.id },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  // console.log(isDragging);

  return (
    <S.Content ref={dragRef} $isDragging={isDragging}>
      <S.CardTitle>{card.title}</S.CardTitle>
      <S.CardDescription>{card.description}</S.CardDescription>
      <S.BottomCard>
        <S.TaskTime>
          {doneList ? (
            <>
              <S.TimeIcon $isFinished="OK" />
              <S.TimeTitle $isFinished="OK">Finalizado</S.TimeTitle>
            </>
          ) : (
            <>
              <S.TimeIcon $isLate={taskDateIsLate} />
              <S.TimeTitle $isLate={taskDateIsLate}>
                {formatedDateToUTC}
              </S.TimeTitle>
            </>
          )}
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
