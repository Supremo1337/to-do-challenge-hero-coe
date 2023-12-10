import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
} from "react";

interface TasksContextData {
  tasks: TasksProps[];
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
}

export interface TasksProps {
  id: number;
  name: string;
  status: string;
}

const TasksContext = createContext({} as TasksContextData);

export const TasksContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

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
