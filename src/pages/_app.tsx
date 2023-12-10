import "@fontsource/libre-franklin";
import "@fontsource/k2d";
import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globalStyles";
import { OpenMaterialContextProvider } from "@/components/contexts/openMaterialContext";
import { DateContextProvider } from "@/components/contexts/dateContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ScreenSizeContextProvider } from "@/components/contexts/screenSizeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <ScreenSizeContextProvider>
        <OpenMaterialContextProvider>
          <DateContextProvider>
            <Component {...pageProps} />
            <GlobalStyles />
          </DateContextProvider>
        </OpenMaterialContextProvider>
      </ScreenSizeContextProvider>
    </DndProvider>
  );
}
