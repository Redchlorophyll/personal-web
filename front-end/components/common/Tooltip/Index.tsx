import React, { ReactNode, useEffect, useState, useRef } from "react";
import TooltipContent from "./TooltipContent";
import { direction } from "@/globals/types";

type tooltipProps = {
  children?: ReactNode;
  tooltipContent?: ReactNode;
  direction?: direction;
};

export default function Tooltip({
  direction = "bottom",
  tooltipContent,
  children,
}: tooltipProps) {
  const [tooltipDirection, setTooltipDirection] = useState<direction>("top");
  const [halfWidth, setHalfWidth] = useState<Number>(0);
  const tooltipWrapper = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    tipDirection(direction || "bottom");
  }, [direction]);

  useEffect(() => {
    if (typeof tooltipWrapper.current?.clientWidth === "number") {
      setHalfWidth(Math.trunc(tooltipWrapper.current?.clientWidth / 2));
    }
  }, []);

  const tipDirection = (tip: direction) => {
    if (tip === "top") setTooltipDirection("bottom");
    if (tip === "bottom") setTooltipDirection("top");
    if (tip === "left") setTooltipDirection("right");
    if (tip === "right") setTooltipDirection("left");
  };

  return (
    <div className="group relative w-fit" ref={tooltipWrapper}>
      <div>{children}</div>
      <div
        style={
          direction === "top" || direction === "bottom"
            ? { transform: `translateX(${halfWidth}px)` }
            : {}
        }
        className={
          "absolute " +
          (direction === "top" ? `-top-10 ` : "") +
          (direction === "left" ? "-top-3 -translate-x-full -left-2 " : "") +
          (direction === "right" ? "-top-3 translate-x-2 left-full " : "") +
          "invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-in-out duration-300"
        }
      >
        <TooltipContent tipLocation={tooltipDirection}>
          {tooltipContent}
        </TooltipContent>
      </div>
    </div>
  );
}
