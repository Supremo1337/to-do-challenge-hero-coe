import "@fontsource/libre-franklin";
import "@fontsource/k2d";
import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globalStyles";
import { OpenMaterialProvider } from "@/components/contexts/openMaterialContext";
import { DateContextProvider } from "@/components/contexts/dateContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <OpenMaterialProvider>
        <DateContextProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </DateContextProvider>
      </OpenMaterialProvider>
    </DndProvider>
  );
}
