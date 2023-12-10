import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
  useRef,
} from "react";

interface OpenMaterialContextData {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  openModalCreateCard: boolean;
  setOpenModalCreateCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpenMaterialContext = createContext({} as OpenMaterialContextData);

export const OpenMaterialContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModalCreateCard, setOpenModalCreateCard] = useState(false);

  return (
    <OpenMaterialContext.Provider
      value={{
        openDrawer,
        setOpenDrawer,
        openModalCreateCard,
        setOpenModalCreateCard,
      }}
    >
      {children}
    </OpenMaterialContext.Provider>
  );
};

export function useOpenMaterialContext() {
  const context = useContext(OpenMaterialContext);

  if (!context) {
    throw new Error(
      "useStyle must be used within an OpenMaterialContextProvider"
    );
  }

  return context;
}
