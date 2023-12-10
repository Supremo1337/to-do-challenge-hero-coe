import { useEffect, useRef, useState } from "react";
import { DropTargetMonitor, useDrop } from "react-dnd";

import { TasksProps, useTasksContext } from "../contexts/tasksContext";
import * as S from "./styles";
import CardTask from "../CardTask";

type TaskStatus = "todo" | "toDoing" | "qA" | "done";

interface SectionProps {
  status: TaskStatus;
  todoList: TasksProps[];
  toDoingList: TasksProps[];
  qAList: TasksProps[];
  doneList: TasksProps[];
}

export default function Section({
  status,
  todoList,
  toDoingList,
  qAList,
  doneList,
}: SectionProps) {
  const { setTasks } = useTasksContext();
  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: "task",
      drop: (item: { id: number }) => addItemToSection(item.id),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    []
  );

  const addItemToSection = (id: number) => {
    setTasks((prev) => {
      const mTasks = prev.map((card) => {
        if (card.id === id) {
          return { ...card, status: status };
        }
        return card;
      });
      return mTasks;
    });
  };

  let text = "To do";
  let cardsToMap = todoList;

  if (status === "toDoing") {
    text = "To Doing";
    cardsToMap = toDoingList;
  }
  if (status === "qA") {
    text = "QA";
    cardsToMap = qAList;
  }

  if (status === "done") {
    text = "Done";
    cardsToMap = doneList;
  }

  return (
    <>
      <S.TaskList ref={dropRef}>
        <S.TaskCategoryTitle>
          {text} <span>({cardsToMap.length})</span>
        </S.TaskCategoryTitle>
        {cardsToMap.length > 0 &&
          cardsToMap.map((card) => (
            <CardTask key={card.id} card={card} doneList={doneList} />
          ))}
      </S.TaskList>
    </>
  );
}
