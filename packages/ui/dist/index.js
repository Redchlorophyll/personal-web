"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Radio: () => Radio
});
module.exports = __toCommonJS(src_exports);

// src/components/Button/index.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function Button({
  variant = "primary",
  children = "Button",
  type = "solid",
  onClick
}) {
  const [style, setStyle] = (0, import_react.useState)("");
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
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    onClick,
    className: `w-fit min-w-[140px] px-[27px] pt-[3px] pb-[6px] h-[34px] rounded-[27.2748px] leading-[22px] ${style}`,
    children
  });
}

// src/components/Radio/index.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function Radio({
  value = "",
  valueGroup = "",
  onChange,
  label
}) {
  const [isChecked, setChecked] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", {
        type: "radio",
        className: "w-6 h-6 peer sr-only",
        value: "test",
        onClick: onClickRadio,
        onChange: onChangeRadio,
        checked: isChecked
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        className: "inline-block peer-checked:[&>*]:bg-primary-700 w-6 h-6 bg-black-100 peer-checked:bg-transparent rounded-full p-[1.1px] border-solid border-[1px] border-black-800",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
          className: "w-5 h-5 rounded-full"
        })
      }),
      label ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        className: "inline-block leading-[24px] h-[24px] translate-y-[-7px] ml-2 mr-2",
        children: "test"
      }) : ""
    ]
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Radio
});
