import React, { ReactNode, useEffect } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

export default function DefaultLayout(props: DefaultLayoutProps) {
  useEffect(() => {
    const classList = [
      "bg-light-layout",
      "dark:bg-dark-layout",
      "dark:bg-dark-layout",
      "dark:text-black-100",
    ];
    document.querySelector("body")?.classList.add(...classList);
  }, []);

  return <div>{props.children}</div>;
}
