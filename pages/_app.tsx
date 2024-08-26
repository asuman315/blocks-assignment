import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "@/components/AppLayout.component";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
