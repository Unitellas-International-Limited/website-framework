import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-MRB2FRFG" />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          className: "toast",
        }}
      />
    </>
  );
}
