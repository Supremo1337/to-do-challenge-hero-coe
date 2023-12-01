import type { AppProps } from "next/app";
import "@fontsource/libre-franklin";
import "@fontsource/k2d";
import { GlobalStyles } from "@/styles/globalStyles";
import { theme } from "@/styles/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
