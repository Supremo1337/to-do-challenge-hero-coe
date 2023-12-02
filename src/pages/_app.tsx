import type { AppProps } from "next/app";
import "@fontsource/libre-franklin";
import "@fontsource/k2d";
import { GlobalStyles } from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import { OpenMaterialProvider } from "@/components/contexts/openMaterialContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OpenMaterialProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </OpenMaterialProvider>
  );
}
