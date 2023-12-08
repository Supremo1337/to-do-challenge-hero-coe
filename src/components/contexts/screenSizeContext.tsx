import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

interface ScreenSizeData {
  sizeScreen: number;
}

const ScreenSize = createContext({} as ScreenSizeData);

export const ScreenSizeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const useWindowWide = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [setWidth]);

    return width;
  };

  const sizeScreen = useWindowWide();

  return (
    <ScreenSize.Provider
      value={{
        sizeScreen,
      }}
    >
      {children}
    </ScreenSize.Provider>
  );
};

export function useScreenSize() {
  const context = useContext(ScreenSize);

  if (!context) {
    throw new Error("useStyle must be used within an ScreenSizeProvider");
  }

  return context;
}
