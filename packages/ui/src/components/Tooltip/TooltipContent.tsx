import React, { ReactNode } from "react";
import { direction } from "@/globals/types";

type toolTipProps = {
  tipLocation?: direction;
  children?: ReactNode;
};

export default function TooltipContent({
  tipLocation = "top",
  children,
}: toolTipProps) {
  return (
    <div
      className={
        "bg-black-100 mt-2 py-1 pl-2 pr-4 shadow-[0_0_4px_rgba(29,171,221,0.2)] w-fit whitespace-nowrap rounded-sm dark:text-black-900 " +
        // tip styling
        "after:absolute after:left-[1px] " +
        (tipLocation == "top" ? "after:top-1 " : "") +
        (tipLocation == "bottom" ? "after:-bottom-1 after:rotate-180 " : "") +
        (tipLocation == "left"
          ? "after:top-2/4 after:left-[-6px] after:translate-y-[2px] after:-rotate-90 "
          : "") +
        (tipLocation == "right"
          ? "after:top-2/4 after:left-full after:translate-x-[-2px] after:translate-y-[2px] after:rotate-90 text-left "
          : "") +
        "after:border-b-4 after:border-b-black-500 after:w-0 after:h-0 after:border-l-4 after:border-r-4 after:border-l-black-100/0 after:border-r-black-100/0"
      }
    >
      {children ? children : "Insert Tooltip Content Here"}
    </div>
  );
}
