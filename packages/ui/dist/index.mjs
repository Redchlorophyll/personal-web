// src/components/Button/index.tsx
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
function Button({
  variant = "primary",
  children = "Button",
  type = "solid",
  onClick
}) {
  const [style, setStyle] = useState("");
  const solid = [
    {
      variant: "warning",
      style: "bg-yellow-700 text-black-100 active:bg-yellow-900"
    },
    {
      variant: "success",
      style: "bg-green-700 text-black-100 active:bg-green-900"
    },
    {
      variant: "primary",
      style: "bg-primary-700 text-black-100 active:bg-primary-900"
    },
    {
      variant: "error",
      style: "bg-red-700 text-black-100 active:bg-red-900"
    },
    {
      variant: "muted",
      style: "bg-black-600 text-black-100 active:bg-black-900"
    }
  ];
  const outline = [
    {
      variant: "warning",
      style: "text-yellow-800 border-solid border-[1px] border-yellow-800"
    },
    {
      variant: "success",
      style: "text-green-700 border-solid border-[1px] border-green-800"
    },
    {
      variant: "primary",
      style: "text-primary-700 border-solid border-[1px] border-primary-800"
    },
    {
      variant: "error",
      style: "text-red-700 border-solid border-[1px] border-red-800"
    },
    {
      variant: "muted",
      style: "text-black-600 border-solid border-[1px] border-black-800"
    }
  ];
  const translucent = [
    {
      variant: "warning",
      style: "bg-yellow-500 text-yellow-900"
    },
    {
      variant: "success",
      style: "bg-green-300 text-green-900"
    },
    {
      variant: "primary",
      style: "bg-primary-400 text-primary-900"
    },
    {
      variant: "error",
      style: "bg-red-400 text-red-900"
    },
    {
      variant: "muted",
      style: "bg-black-300 text-black-900"
    }
  ];
  useEffect(() => {
    if (type === "solid") {
      const designValue = solid.filter(
        (val) => val.variant === variant
      );
      setStyle(designValue[0]["style"] || "");
    }
    if (type === "outline") {
      const designValue = outline.filter(
        (val) => val.variant === variant
      );
      setStyle(designValue[0]["style"] || "");
    }
    if (type === "translucent") {
      const designValue = translucent.filter(
        (val) => val.variant === variant
      );
      setStyle(designValue[0]["style"] || "");
    }
  }, [variant, type]);
  return /* @__PURE__ */ jsx("button", {
    onClick,
    className: `w-fit min-w-[140px] px-[27px] pt-[3px] pb-[6px] h-[34px] rounded-[27.2748px] leading-[22px] ${style}`,
    children
  });
}

// src/components/Radio/index.tsx
import { useState as useState2, useEffect as useEffect2 } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Radio({
  value = "",
  valueGroup = "",
  onChange,
  label
}) {
  const [isChecked, setChecked] = useState2(false);
  useEffect2(() => {
    if (value) {
      if (value === valueGroup)
        setChecked(true);
      else
        setChecked(false);
    }
  }, [valueGroup]);
  const onClickRadio = () => {
    if (!onChange)
      return;
    if (!isChecked) {
      onChange(value || "");
    } else {
      onChange("");
    }
    setChecked(!isChecked);
  };
  const onChangeRadio = () => {
    return;
  };
  return /* @__PURE__ */ jsxs("label", {
    children: [
      /* @__PURE__ */ jsx2("input", {
        type: "radio",
        className: "w-6 h-6 peer sr-only",
        value: "test",
        onClick: onClickRadio,
        onChange: onChangeRadio,
        checked: isChecked
      }),
      /* @__PURE__ */ jsx2("div", {
        className: "inline-block peer-checked:[&>*]:bg-primary-700 w-6 h-6 bg-black-100 peer-checked:bg-transparent rounded-full p-[1.1px] border-solid border-[1px] border-black-800",
        children: /* @__PURE__ */ jsx2("div", {
          className: "w-5 h-5 rounded-full"
        })
      }),
      label ? /* @__PURE__ */ jsx2("div", {
        className: "inline-block leading-[24px] h-[24px] translate-y-[-7px] ml-2 mr-2",
        children: "test"
      }) : ""
    ]
  });
}

// src/components/Input/index.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Input({
  onChange,
  value = "",
  placeholder = "Input Text Here...",
  isError = false,
  errorMessage = "Error Message Here...",
  isDisabled = false,
  label = ""
}) {
  const inputId = label.toLowerCase().split(" ").join("-");
  const onInputChange = (event) => {
    if (!onChange || isDisabled)
      return;
    const { value: value2 } = event.target;
    onChange(value2);
  };
  return /* @__PURE__ */ jsxs2("div", {
    className: "flex flex-col items-start",
    children: [
      label ? /* @__PURE__ */ jsx3("label", {
        className: "pb-[5px]",
        htmlFor: inputId,
        children: label
      }) : "",
      /* @__PURE__ */ jsx3("input", {
        id: inputId,
        "aria-label": "input",
        value,
        placeholder,
        onChange: (event) => onInputChange(event),
        disabled: isDisabled,
        className: [
          "w-full h-[34px] rounded-[7px] border-[0.5px] border-solid",
          "px-[17px] py-[6px] dark:text-black-900",
          "focus:dark:drop-shadow-[0px_1px_17px_#406FCB] outline-none",
          "disabled:bg-black-200 disabled:text-black-700",
          "disabled:border-black-600 dark:disabled:bg-black-500",
          isError ? "border-red-800" : "border-black-800 focus:border-primary-800"
        ].join(" "),
        type: "text"
      }),
      isError ? /* @__PURE__ */ jsx3("span", {
        className: "text-sm text-red-800",
        children: errorMessage
      }) : ""
    ]
  });
}

// src/components/Modal/index.tsx
import { Fragment, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";

// src/components/Tooltip/index.tsx
import { useEffect as useEffect3, useState as useState3, useRef } from "react";

// src/components/Tooltip/TooltipContent.tsx
import { jsx as jsx5 } from "react/jsx-runtime";

// src/components/Tooltip/index.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
export {
  Button,
  Input,
  Radio
};
