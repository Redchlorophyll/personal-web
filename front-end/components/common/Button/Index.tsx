import React, { ReactNode, useEffect, useState } from "react";
import { variantStyle, typeStyle } from "@/globals/types";

type buttonProps = {
  variant?: variantStyle;
  children?: ReactNode;
  type?: typeStyle;
  onClick?: () => void;
};

type buttonStyle = {
  variant?: variantStyle;
  style?: string;
};

export default function Button({
  variant = "primary",
  children = "Button",
  type = "solid",
  onClick,
}: buttonProps) {
  const [style, setStyle] = useState<string>("");

  const solid: buttonStyle[] = [
    {
      variant: "warning",
      style: "bg-yellow-700 text-black-100 active:bg-yellow-900",
    },
    {
      variant: "success",
      style: "bg-green-700 text-black-100 active:bg-green-900",
    },
    {
      variant: "primary",
      style: "bg-primary-700 text-black-100 active:bg-primary-900",
    },
    {
      variant: "error",
      style: "bg-red-700 text-black-100 active:bg-red-900",
    },
    {
      variant: "muted",
      style: "bg-black-600 text-black-100 active:bg-black-900",
    },
  ];

  const outline: buttonStyle[] = [
    {
      variant: "warning",
      style: "text-yellow-800 border-solid border-[1px] border-yellow-800",
    },
    {
      variant: "success",
      style: "text-green-700 border-solid border-[1px] border-green-800",
    },
    {
      variant: "primary",
      style: "text-primary-700 border-solid border-[1px] border-primary-800",
    },
    {
      variant: "error",
      style: "text-red-700 border-solid border-[1px] border-red-800",
    },
    {
      variant: "muted",
      style: "text-black-600 border-solid border-[1px] border-black-800",
    },
  ];

  const translucent: buttonStyle[] = [
    {
      variant: "warning",
      style: "bg-yellow-500 text-yellow-900",
    },
    {
      variant: "success",
      style: "bg-green-300 text-green-900",
    },
    {
      variant: "primary",
      style: "bg-primary-400 text-primary-900",
    },
    {
      variant: "error",
      style: "bg-red-400 text-red-900",
    },
    {
      variant: "muted",
      style: "bg-black-300 text-black-900",
    },
  ];

  useEffect(() => {
    if (type === "solid") {
      const designValue: buttonStyle[] = solid.filter(
        (val) => val.variant === variant
      );
      setStyle(designValue[0]["style"] || "");
    }
    if (type === "outline") {
      const designValue: buttonStyle[] = outline.filter(
        (val) => val.variant === variant
      );
      setStyle(designValue[0]["style"] || "");
    }
    if (type === "translucent") {
      const designValue: buttonStyle[] = translucent.filter(
        (val) => val.variant === variant
      );
      setStyle(designValue[0]["style"] || "");
    }
  }, [variant, type]);

  return (
    <button
      onClick={onClick}
      className={`w-fit min-w-[140px] px-[27px] pt-[3px] pb-[6px] h-[34px] rounded-[27.2748px] leading-[22px] ${style}`}
    >
      {children}
    </button>
  );
}
