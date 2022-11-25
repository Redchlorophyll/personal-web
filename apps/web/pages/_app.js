import React, { useEffect } from "react";
import "@/assets/styles/globals.css";
import "ui/styles.css";
import { store } from "@/store";
import { Provider } from "react-redux";
import Head from 'next/head';

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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
