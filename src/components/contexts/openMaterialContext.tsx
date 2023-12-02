import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
} from "react";

interface OpenMaterialData {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  openModalCreateCard: boolean;
  setOpenModalCreateCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpenMaterial = createContext({} as OpenMaterialData);

export const OpenMaterialProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModalCreateCard, setOpenModalCreateCard] = useState(false);

  return (
    <OpenMaterial.Provider
      value={{
        openDrawer,
        setOpenDrawer,
        openModalCreateCard,
        setOpenModalCreateCard,
      }}
    >
      {children}
    </OpenMaterial.Provider>
  );
};

export function useOpenMaterial() {
  const context = useContext(OpenMaterial);

  if (!context) {
    throw new Error("useStyle must be used within an OpenMaterialProvider");
  }

  return context;
}
