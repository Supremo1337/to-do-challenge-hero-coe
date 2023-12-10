import { useEffect, useRef, useState } from "react";
import { DropTargetMonitor, useDrop } from "react-dnd";
import CardTask from "../CardTask";
import ModalCreateCard from "../ModalCreateCard";
import * as S from "./styles";
import {
  todoListExamples,
  toDoingListExamples,
  qAListExamples,
  doneListExamples,
} from "./exampleCards";
import { TasksProps, useTasksContext } from "../contexts/tasksContext";
import Section from "../Section";

type TaskStatus = "todo" | "toDoing" | "qA" | "done";

export default function Main() {
  const [todoList, setTodoList] = useState<TasksProps[]>([]);
  const [toDoingList, setToDoingList] = useState<TasksProps[]>([]);
  const [qAList, setqAList] = useState<TasksProps[]>([]);
  const [doneList, setDoneList] = useState<TasksProps[]>([]);
  const { tasks } = useTasksContext();

  useEffect(() => {
    const filterTodos = tasks.filter((task) => task.status === "todo");
    const filterToDoing = tasks.filter((task) => task.status === "toDoing");
    const filterQa = tasks.filter((task) => task.status === "qA");
    const filterDone = tasks.filter((task) => task.status === "done");
    setTodoList(filterTodos);
    setToDoingList(filterToDoing);
    setqAList(filterQa);
    setDoneList(filterDone);
  }, [tasks]);

  const statuses: TaskStatus[] = ["todo", "toDoing", "qA", "done"];

  return (
    <S.Content>
      {statuses.map((status) => (
        <Section
          key={status}
          status={status}
          todoList={todoList}
          toDoingList={toDoingList}
          qAList={qAList}
          doneList={doneList}
        />
      ))}
      <ModalCreateCard />
    </S.Content>
  );
}
