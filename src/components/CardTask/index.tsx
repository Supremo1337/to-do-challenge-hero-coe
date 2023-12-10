import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { useDateContext } from "../contexts/dateContext";
import { useDrag } from "react-dnd";
import { TasksProps } from "../contexts/tasksContext";
import {
  Button,
  ClickAwayListener,
  Fade,
  Grow,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
} from "@mui/material";
import { useScreenSizeContext } from "../contexts/screenSizeContext";

interface CardTaskProps {
  card: TasksProps;
  doneList?: TasksProps[];
}

export default function CardTask({ card, doneList }: CardTaskProps) {
  const { sizeScreen } = useScreenSizeContext();
  const { formattedTodayDateToMaterialFormat } = useDateContext();
  let taskDateIsLate = formattedTodayDateToMaterialFormat > card.date;
  let formatedDateToUTC = new Date(card.date).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  let isDoneList = doneList && doneList.some((item) => item.id === card.id);

  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "task",
      item: { id: card.id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <S.Content
      ref={dragRef}
      // ref={anchorRef}
      $isDragging={isDragging}
      // aria-haspopup="true"
      // onClick={handleToggle}
      // onTouchEnd={handleContextMenuClose}
    >
      <S.CardTitle>{card.title}</S.CardTitle>
      <S.CardDescription>{card.description}</S.CardDescription>
      <S.BottomCard>
        <S.TaskTime>
          {isDoneList ? (
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
        {!isDoneList && (
          <>
            {card.priority === "HIGH" ? (
              <S.PriorityIndicatator $priority="HIGH">
                HIGH
              </S.PriorityIndicatator>
            ) : card.priority === "MEDIUM" ? (
              <S.PriorityIndicatator $priority="MEDIUM">
                MEDIUM
              </S.PriorityIndicatator>
            ) : (
              <S.PriorityIndicatator $priority="LOW">LOW</S.PriorityIndicatator>
            )}
          </>
        )}
      </S.BottomCard>
    </S.Content>
  );
}
