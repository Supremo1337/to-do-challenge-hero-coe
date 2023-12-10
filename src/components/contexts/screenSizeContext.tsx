import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

interface ScreenSizeContextData {
  sizeScreen: number;
}

const ScreenSizeContext = createContext({} as ScreenSizeContextData);

export const ScreenSizeContextProvider: React.FC<PropsWithChildren> = ({
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
    <ScreenSizeContext.Provider
      value={{
        sizeScreen,
      }}
    >
      {children}
    </ScreenSizeContext.Provider>
  );
};

export function useScreenSizeContext() {
  const context = useContext(ScreenSizeContext);

  if (!context) {
    throw new Error(
      "useStyle must be used within an ScreenSizeContextProvider"
    );
  }

  return context;
}
