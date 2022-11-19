import React, { useEffect } from "react";
import "@/assets/styles/globals.css";
import "ui/styles.css";
import { store } from "@/store";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
