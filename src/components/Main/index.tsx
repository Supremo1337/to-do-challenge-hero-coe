import { useEffect, useRef, useState } from "react";
import { DropTargetMonitor, useDrop } from "react-dnd";
import CardTask from "../CardTask";
import ModalCreateCard from "../ModalCreateCard";
import * as S from "./styles";
import {
  doneListExamples,
  qAListExamples,
  toDoListExamples,
  toDoingListExamples,
} from "./exampleCards";

export default function Main() {
  const [toDoList, setToDoList] = useState<any[]>(toDoListExamples);
  const [toDoingList, setToDoingList] = useState<any[]>(toDoingListExamples);
  const [qAList, setQAList] = useState<any[]>(qAListExamples);
  const [doneList, setDoneList] = useState<any[]>(doneListExamples);

  console.log(toDoList);

  const [, dropToDo] = useDrop(createDropSpec(setToDoList));
  const [, dropDoing] = useDrop(createDropSpec(setToDoingList));
  const [, dropQA] = useDrop(createDropSpec(setQAList));
  const [, dropDone] = useDrop(createDropSpec(setDoneList));

  function createDropSpec(setter: React.Dispatch<React.SetStateAction<any[]>>) {
    return {
      accept: "CARD",
      drop: (item: { id: number }) => {
        moveCard(item.id, setter);
      },
      collect: (
        monitor: DropTargetMonitor<
          {
            id: number;
          },
          void
        >
      ) => ({
        isOver: monitor.isOver(),
      }),
    };
  }

  function moveCard(
    cardId: number,
    targetListSetter: React.Dispatch<React.SetStateAction<any[]>>
  ) {
    const allLists = [toDoList, toDoingList, qAList, doneList];
    for (let sourceList of allLists) {
      const updatedSourceList = sourceList.filter((item) => item.id !== cardId);
      if (updatedSourceList.length !== sourceList.length) {
        // If the length changed, it means the card was found and removed from this list
        const cardToMove = sourceList.find((item) => item.id === cardId);

        if (cardToMove) {
          targetListSetter((prevList) => [...prevList, cardToMove]);
        }
        // Set the updated list in the corresponding state
        switch (sourceList) {
          case toDoList:
            setToDoList(updatedSourceList);
            break;
          case toDoingList:
            setToDoingList(updatedSourceList);
            break;
          case qAList:
            setQAList(updatedSourceList);
            break;
          case doneList:
            setDoneList(updatedSourceList);
            break;
          default:
            break;
        }
        break;
      }
    }
  }

  const addCard = (newCard: {
    id: number;
    title: string;
    description: string;
    date: string;
    priority: string;
  }) => {
    setToDoList((prev) => [...prev, newCard]);
  };

  return (
    <S.Content>
      <S.TaskList ref={dropToDo}>
        <S.TaskCategoryTitle>
          To Do <span>({toDoList.length})</span>
        </S.TaskCategoryTitle>
        {toDoList.map((card) => {
          return <CardTask key={card.id} card={card} />;
        })}
      </S.TaskList>
      <S.TaskList ref={dropDoing}>
        <S.TaskCategoryTitle>
          Doing <span>({toDoingList.length})</span>
        </S.TaskCategoryTitle>
        {toDoingList.map((card, index) => {
          return <CardTask key={index} card={card} />;
        })}
      </S.TaskList>
      <S.TaskList ref={dropQA}>
        <S.TaskCategoryTitle>
          QA <span>({qAList.length})</span>
        </S.TaskCategoryTitle>
        {qAList.map((card, index) => {
          return <CardTask key={index} card={card} />;
        })}
      </S.TaskList>
      <S.TaskList ref={dropDone}>
        <S.TaskCategoryTitle>
          Done <span>({doneList.length})</span>
        </S.TaskCategoryTitle>
        {doneList.map((card, index) => {
          return <CardTask key={index} card={card} doneList={doneList} />;
        })}
      </S.TaskList>

      <ModalCreateCard addCard={addCard} />
    </S.Content>
  );
}
