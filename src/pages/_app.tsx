import { plantinMTPro, sourceSansPro } from "@/fonts/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <div    className={`${sourceSansPro.variable} ${plantinMTPro.variable}`}>
    <Component {...pageProps} />
  </div>;
}
