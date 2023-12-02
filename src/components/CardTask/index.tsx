import { useState } from "react";
import * as S from "./styles";

interface CardTaskProps {
  card: {
    title: string;
    description: string;
    date: string;
    priority: string;
    // Adicione outros campos do card conforme necessário
  };
}

export default function CardTask({ card }: CardTaskProps) {
  return (
    <S.Content>
      <S.CardTitle>{card.title}</S.CardTitle>
      <S.CardDescription>{card.description}</S.CardDescription>
      <S.BottomCard>
        <S.TaskTime>
          <S.TimeIcon $icon="bx_timeRed" />
          <S.TimeTitle>{card.date}</S.TimeTitle>
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
