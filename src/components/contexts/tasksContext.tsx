import { TasksProps } from "@/interfaces/interface";
import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
} from "react";
import {
  todoListExamples,
  toDoingListExamples,
  qAListExamples,
  doneListExamples,
} from "../Main/exampleCards";

interface TasksContextData {
  tasks: TasksProps[];
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
}

const TasksContext = createContext({} as TasksContextData);

export const TasksContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<TasksProps[]>([
    ...todoListExamples,
    ...toDoingListExamples,
    ...qAListExamples,
    ...doneListExamples,
  ]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export function useTasksContext() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useStyle must be used within an TasksContextProvider");
  }

  return context;
}
