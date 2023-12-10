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
  const [qAList, setqAList] = useState<any[]>(qAListExamples);
  const [doneList, setDoneList] = useState<any[]>(doneListExamples);

  console.log(toDoList);

  const [, dropToDo] = useDrop(createDropSpec(toDoList, setToDoList), [
    toDoList,
  ]);
  const [, dropDoing] = useDrop(createDropSpec(toDoingList, setToDoingList), [
    toDoingList,
  ]);
  const [, dropqA] = useDrop(createDropSpec(qAList, setqAList), [qAList]);
  const [, dropDone] = useDrop(createDropSpec(doneList, setDoneList), [
    doneList,
  ]);

  function createDropSpec(
    value: any[],
    setter: React.Dispatch<React.SetStateAction<any[]>>
  ) {
    return {
      accept: "CARD",
      drop: (item: { id: number }) => {
        moveCard(item.id, value, setter);
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
    valueList: any[],
    targetListSetter: React.Dispatch<React.SetStateAction<any[]>>
  ) {
    const allLists = [toDoList, toDoingList, qAList, doneList];
    for (let sourceList of allLists) {
      console.log("Antes de mover:", sourceList);

      const updatedSourceList = sourceList
        .map((item) => (item.id === cardId ? null : item))
        .filter(Boolean);
      console.log("Depois de mover:", updatedSourceList);

      if (updatedSourceList.length !== sourceList.length) {
        // If the length changed, it means the card was found and removed from this list
        const cardToMove = sourceList.find((item) => item.id === cardId);

        if (cardToMove && sourceList[0]?.id !== valueList[0]?.id) {
          targetListSetter((prevList) => [...prevList, cardToMove]);
        }
        // Set the updated list in the corresponding state

        console.log({ sourceList: sourceList, valueList: valueList });
        console.log(sourceList === valueList);
        // if (sourceList === valueList) {
        //   console.log("mesma lista");
        // }
        if (sourceList[0]?.id === valueList[0]?.id) {
          return;
        } else {
          switch (sourceList) {
            case toDoList:
              console.log("Lista QA", qAList);

              setToDoList(updatedSourceList);
              break;
            case toDoingList:
              console.log("Lista QA", qAList);

              setToDoingList(updatedSourceList);
              break;
            case qAList:
              console.log("Lista QA", qAList);
              setqAList(updatedSourceList);
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
          To do <span>({toDoList.length})</span>
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
      <S.TaskList ref={dropqA}>
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
