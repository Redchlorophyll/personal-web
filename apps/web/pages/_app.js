import React, { useEffect } from "react";
import "@/assets/styles/globals.css";
import "ui/styles.css";
import { store } from "@/store";
import { Provider } from "react-redux";
import { AuthContextProvider } from "@/context/Auth";
import Head from "next/head";
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html } from "next/document";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else if (
      localStorage.getItem("theme") === "light" ||
      !localStorage.getItem("theme")
    ) {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="icon" href="favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthContextProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthContextProvider>
    </Html>
  );
}
