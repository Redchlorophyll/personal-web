import React, { CSSProperties, ReactNode } from "react";

type modalProps = {
  children?: ReactNode;
  title?: string;
  style?: CSSProperties;
};

export function Modal({ children, title, style }: modalProps) {
  return (
    <>
      <div className="w-full h-[100vh] absolute z-30 bg-black-900 opacity-25" />
      <div
        className={[
          "w-full h-[100vh] absolute z-30",
          "flex justify-center align-baseline",
        ].join(" ")}
      >
        <div
          style={style}
          className={[
            "w-[616px] min-h-[503px] bg-black-100 dark:bg-dark-layout",
            "top-1/2 absolute -translate-y-1/2",
            "p-[25px_30px] rounded-2xl text",
          ].join(" ")}
        >
          {title ? (
            <div className="pb-5">
              <span className="text-base font-bold">{title}</span>
            </div>
          ) : (
            ""
          )}
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
