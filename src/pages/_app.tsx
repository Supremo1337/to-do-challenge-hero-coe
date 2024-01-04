import "@fontsource/libre-franklin";
import "@fontsource/k2d";
import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globalStyles";
import { OpenMaterialContextProvider } from "@/components/contexts/openMaterialContext";
import { DateContextProvider } from "@/components/contexts/dateContext";
import { ScreenSizeContextProvider } from "@/components/contexts/screenSizeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScreenSizeContextProvider>
      <OpenMaterialContextProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </OpenMaterialContextProvider>
    </ScreenSizeContextProvider>
  );
}
