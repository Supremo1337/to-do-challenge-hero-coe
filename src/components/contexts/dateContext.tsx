import { format } from "date-fns";
import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
} from "react";

interface DateContextData {
  taskDate: string;
  setTaskDate: React.Dispatch<React.SetStateAction<string>>;
  formattedTodayDateToMaterialFormat: string;
}

const DateContext = createContext({} as DateContextData);

export const DateContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  let todayDate = new Date();
  let formattedTodayDateToMaterialFormat = format(todayDate, "yyyy-MM-dd");
  const [taskDate, setTaskDate] = useState(formattedTodayDateToMaterialFormat);

  return (
    <DateContext.Provider
      value={{
        taskDate,
        setTaskDate,
        formattedTodayDateToMaterialFormat,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export function useDateContext() {
  const context = useContext(DateContext);

  if (!context) {
    throw new Error("useStyle must be used within an DateContextProvider");
  }

  return context;
}
