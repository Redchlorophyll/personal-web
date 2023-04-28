"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Checkbox: () => Checkbox,
  Dropdown: () => Dropdown,
  Input: () => Input,
  Modal: () => Modal,
  Radio: () => Radio,
  Snackbar: () => Snackbar,
  Textarea: () => Textarea,
  Tooltip: () => Tooltip
});
module.exports = __toCommonJS(src_exports);

// src/components/Button/index.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function Button({
  variant = "primary",
  children = "Button",
  type = "solid",
  onClick,
  btnType = "button"
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: btnType,
      onClick,
      className: `w-fit min-w-[140px] px-[27px] pt-[3px] pb-[6px] h-[34px] rounded-[27.2748px] leading-[22px] ${style}`,
      children
    }
  );
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        type: "radio",
        className: "w-6 h-6 peer sr-only",
        value: "test",
        onClick: onClickRadio,
        onChange: onChangeRadio,
        checked: isChecked
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "inline-block peer-checked:[&>*]:bg-primary-700 w-6 h-6 bg-black-100 peer-checked:bg-transparent rounded-full p-[1.1px] border-solid border-[1px] border-black-800", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-5 h-5 rounded-full" }) }),
    label ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "inline-block leading-[24px] h-[24px] translate-y-[-7px] ml-2 mr-2", children: "test" }) : ""
  ] });
}

// src/components/Input/index.tsx
var import_react3 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Input = import_react3.default.forwardRef(function Input2({
  onChange,
  onBlur,
  value = "",
  placeholder = "Input Text Here...",
  isError = false,
  errorMessage = "Error Message Here...",
  isDisabled = false,
  label = "",
  name = "",
  register
}, ref) {
  const [inputValue, setInputValue] = (0, import_react3.useState)(value);
  const inputId = label.toLowerCase().split(" ").join("-");
  const onInputChange = (event) => {
    if (!onChange || isDisabled)
      return;
    setInputValue(event.target.value);
    onChange(event);
  };
  const onInputBlur = (event) => {
    if (!onBlur || isDisabled)
      return;
    onBlur(event);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col items-start", children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { className: "pb-[5px]", htmlFor: inputId, children: label }) : "",
    register ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "input",
      __spreadProps(__spreadValues({
        name,
        id: inputId,
        "aria-label": "input",
        placeholder,
        disabled: isDisabled
      }, register), {
        className: [
          "w-full h-[34px] rounded-[7px] border-[0.5px] border-solid",
          "px-[17px] py-[6px] dark:text-black-900",
          "focus:dark:drop-shadow-[0px_1px_17px_#406FCB] outline-none",
          "disabled:bg-black-200 disabled:text-black-700",
          "disabled:border-black-600 dark:disabled:bg-black-500",
          isError ? "border-red-800" : "border-black-800 focus:border-primary-800"
        ].join(" "),
        type: "text"
      })
    ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "input",
      {
        name,
        value: inputValue,
        id: inputId,
        "aria-label": "input",
        placeholder,
        onChange: (event) => onInputChange(event),
        disabled: isDisabled,
        onBlur: (event) => onInputBlur(event),
        className: [
          "w-full h-[34px] rounded-[7px] border-[0.5px] border-solid",
          "px-[17px] py-[6px] dark:text-black-900",
          "focus:dark:drop-shadow-[0px_1px_17px_#406FCB] outline-none",
          "disabled:bg-black-200 disabled:text-black-700",
          "disabled:border-black-600 dark:disabled:bg-black-500",
          isError ? "border-red-800" : "border-black-800 focus:border-primary-800"
        ].join(" "),
        type: "text"
      }
    ),
    isError ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-sm text-red-800 relative w-full", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute", children: errorMessage }) }) : ""
  ] });
});

// src/components/Modal/index.tsx
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function Modal({ children, title, style }) {
  (0, import_react4.useEffect)(() => {
    var _a;
    (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("overflow-hidden");
    return () => {
      var _a2;
      (_a2 = document.querySelector("body")) == null ? void 0 : _a2.classList.remove("overflow-hidden");
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-full h-[100vh] fixed top-0 left-0 z-30 bg-black-900 opacity-25" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        className: [
          "w-full h-[100vh] absolute z-30",
          "flex justify-center align-baseline top-0 left-0"
        ].join(" "),
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "div",
          {
            style,
            className: [
              "w-[616px] min-h-[503px] bg-black-100 dark:bg-dark-layout",
              "top-1/2 fixed -translate-y-1/2",
              "p-[25px_30px] rounded-2xl text"
            ].join(" "),
            children: [
              title ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "pb-5", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-base font-bold", children: title }) }) : "",
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children })
            ]
          }
        )
      }
    )
  ] });
}

// src/components/Tooltip/index.tsx
var import_react5 = require("react");

// src/components/Tooltip/TooltipContent.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function TooltipContent({
  tipLocation = "top",
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      className: "bg-black-100 mt-2 py-1 pl-2 pr-4 shadow-[0_0_4px_rgba(29,171,221,0.2)] w-fit whitespace-nowrap rounded-sm dark:text-black-900 after:absolute after:left-[1px] " + (tipLocation == "top" ? "after:top-1 " : "") + (tipLocation == "bottom" ? "after:-bottom-1 after:rotate-180 " : "") + (tipLocation == "left" ? "after:top-2/4 after:left-[-6px] after:translate-y-[2px] after:-rotate-90 " : "") + (tipLocation == "right" ? "after:top-2/4 after:left-full after:translate-x-[-2px] after:translate-y-[2px] after:rotate-90 text-left " : "") + "after:border-b-4 after:border-b-black-500 after:w-0 after:h-0 after:border-l-4 after:border-r-4 after:border-l-black-100/0 after:border-r-black-100/0",
      children: children ? children : "Insert Tooltip Content Here"
    }
  );
}

// src/components/Tooltip/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Tooltip({
  direction = "bottom",
  tooltipContent,
  children
}) {
  const [tooltipDirection, setTooltipDirection] = (0, import_react5.useState)("top");
  const [halfWidth, setHalfWidth] = (0, import_react5.useState)(0);
  const tooltipWrapper = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    tipDirection(direction || "bottom");
  }, [direction]);
  (0, import_react5.useEffect)(() => {
    var _a, _b;
    if (typeof ((_a = tooltipWrapper.current) == null ? void 0 : _a.clientWidth) === "number") {
      setHalfWidth(Math.trunc(((_b = tooltipWrapper.current) == null ? void 0 : _b.clientWidth) / 2));
    }
  }, []);
  const tipDirection = (tip) => {
    if (tip === "top")
      setTooltipDirection("bottom");
    if (tip === "bottom")
      setTooltipDirection("top");
    if (tip === "left")
      setTooltipDirection("right");
    if (tip === "right")
      setTooltipDirection("left");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "group relative w-fit", ref: tooltipWrapper, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        style: direction === "top" || direction === "bottom" ? { transform: `translateX(${halfWidth}px)` } : {},
        className: "absolute " + (direction === "top" ? `-top-10 ` : "") + (direction === "left" ? "-top-3 -translate-x-full -left-2 " : "") + (direction === "right" ? "-top-3 translate-x-2 left-full " : "") + "invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-in-out duration-300",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipContent, { tipLocation: tooltipDirection, children: tooltipContent })
      }
    )
  ] });
}

// src/components/Snackbar/index.tsx
var import_react6 = require("react");
var import_react_awesome_reveal = require("react-awesome-reveal");
var import_jsx_runtime7 = require("react/jsx-runtime");
function Snackbar({
  variant = "error",
  isShown = false,
  timer,
  onClose,
  children
}) {
  const [baseColor, setBaseColor] = (0, import_react6.useState)("bg-red-700");
  const [image, setImage] = (0, import_react6.useState)("error");
  (0, import_react6.useEffect)(() => {
    if (variant === "error") {
      setBaseColor("bg-red-700");
      setImage("error");
    } else if (variant === "info") {
      setBaseColor("bg-primary-700");
      setImage("info");
    } else if (variant === "success") {
      setBaseColor("bg-green-700");
      setImage("checked");
    } else if (variant === "warning") {
      setBaseColor("bg-orange-700");
      setImage("warning");
    }
  }, [variant]);
  function onCloseAction() {
    if (onClose)
      onClose(false);
  }
  (0, import_react6.useEffect)(() => {
    if (timer && isShown) {
      setTimeout(() => {
        if (onClose)
          onClose(false);
      }, timer);
    }
  }, [timer, isShown]);
  const snackbarIcon = () => {
    if (image === "error")
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: `bg-icon-error w-[30px] h-[30px] bg-cover` });
    else if (image === "info")
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: `bg-icon-info w-[30px] h-[30px] bg-cover` });
    else if (image === "warning")
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: `bg-icon-warning w-[30px] h-[25px] bg-cover` });
    else if (image === "checked")
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: `bg-icon-checked w-[30px] h-[30px] bg-cover` });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "fixed top-4 left-1/2 -translate-x-1/2 z-50", children: isShown ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_awesome_reveal.Fade, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      className: `${baseColor} w-fit max-w-xl min-h-[65px] p-[19px_35px_10px_35px] rounded-[10px] flex gap-4 leading-[27px] text-black-100`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: snackbarIcon() }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-base translate-y-[2px] min-w-[10rem]", children: children ? children : "Snackbar Children Goes Here!" }) }),
        !timer ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "-translate-y-1 translate-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "button",
          {
            onClick: () => onCloseAction(),
            "data-testid": "close-snackbar",
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bg-icon-close w-[30px] h-[30px]" })
          }
        ) }) : ""
      ]
    }
  ) }) : "" });
}

// src/components/Dropdown/index.tsx
var import_react7 = require("react");
var import_react_awesome_reveal2 = require("react-awesome-reveal");
var import_jsx_runtime8 = require("react/jsx-runtime");
function Dropdown({
  type = "dropdown",
  options = [{ label: "sampel", value: "sampelVal" }],
  placeholder = "choose an option...",
  onChange,
  value,
  label = ""
}) {
  const inputId = label.toLowerCase().split(" ").join("-");
  const [isOpen, setIsOpen] = (0, import_react7.useState)(false);
  const inputRef = (0, import_react7.useRef)(null);
  const [inputValue, setInputValue] = (0, import_react7.useState)({
    label: "",
    value: ""
  });
  const [inputOptions, setInputOptions] = (0, import_react7.useState)([...options]);
  const handleFocus = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.activeElement.blur();
    }
  };
  const setActiveVal = (activeVal) => {
    handleFocus();
    if (onChange) {
      onChange(activeVal);
      setInputValue(activeVal);
    }
  };
  const onInputChange = (event) => {
    if (type === "dropdown")
      return;
    const filterOptions = options.filter(
      (data) => data.label.toLowerCase().includes(event.currentTarget.value.toLowerCase())
    );
    setInputOptions(filterOptions);
    setInputValue({
      label: event.currentTarget.value,
      value: event.currentTarget.value.toLocaleLowerCase().split(" ").join("-")
    });
  };
  const optionHtml = inputOptions.map((value2, idx) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "button",
      {
        onClick: () => setActiveVal(value2),
        className: "w-full text-left cursor-pointer list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400",
        children: value2.label
      },
      idx
    );
  });
  (0, import_react7.useEffect)(() => {
    if (!inputValue)
      return;
    const matchedData = options.find((data) => data.value === value);
    setInputValue(matchedData);
    if (type === "combobox") {
      const filterOptions = options.filter(
        (data) => data.label.toLowerCase().includes((value == null ? void 0 : value.toLowerCase()) || "")
      );
      setInputOptions(filterOptions);
    }
  }, [value]);
  (0, import_react7.useEffect)(() => {
    const outsideClickHandler = ({ target }) => {
      const { current } = inputRef;
      if (current && !current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  });
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col items-start", children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { className: "pb-[5px]", htmlFor: inputId, children: label }) : "",
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "div",
      {
        ref: inputRef,
        "data-testid": "focus-element",
        className: "w-full relative z-[5] dark:text-black-900",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "input",
            {
              id: inputId,
              className: `peer ${type === "dropdown" ? "cursor-pointer" : ""} bg-black-100 w-full p-[5px_17px_5px_13px] border-black-800 border-solid border-[0.5px] focus:outline-none focus:border-solid focus:border-[0.5px] focus:border-primary-800 rounded-lg dark:focus:drop-shadow-[0px_1px_17px_#406fcb]`,
              type: "text",
              placeholder,
              readOnly: !!(type === "dropdown"),
              onClick: () => handleFocus(),
              value: (inputValue == null ? void 0 : inputValue.label) || "",
              onChange: (e) => onInputChange(e)
            }
          ),
          type === "dropdown" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "bg-black-100 bg-dropdown-arrow w-5 h-3 bg-cover z-[1] absolute left-full top-[10px] -translate-x-[28px] transition-transform peer-focus:transition-transform peer-focus:rotate-180" }) : "",
          isOpen && inputOptions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_awesome_reveal2.Fade, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "w-full bg-black-100 absolute mt-2 p-[12px_5px_7px_5px] overflow-y-scroll max-h-32 scrollbar-thin scrollbar-thumb-black-500 scrollbar-track-dark-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full shadow-[0px_1px_4px_rgba(0,0,0,0.25)]", children: [
            inputOptions.length > 0 && value !== "" && type === "dropdown" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              "button",
              {
                onClick: () => setActiveVal({
                  label: "",
                  value: ""
                }),
                className: "w-full text-left text-black-700 cursor-pointer list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400",
                children: "Clear Selection"
              }
            ) : "",
            optionHtml
          ] }) }) : ""
        ]
      }
    )
  ] });
}

// src/components/Checkbox/index.tsx
var import_react8 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
function Checkbox({
  value = "",
  valueList = [],
  onChange,
  label
}) {
  const [isChecked, setChecked] = (0, import_react8.useState)(false);
  (0, import_react8.useEffect)(() => {
    if (value) {
      const isValueIncluded = valueList.includes(value);
      if (isValueIncluded)
        setChecked(true);
      else
        setChecked(false);
    }
  }, [valueList]);
  const onChangeAction = (event) => {
    if (!onChange)
      return;
    const { value: value2, checked } = event.target;
    const results = (valueList == null ? void 0 : valueList.filter((data) => data !== value2)) || [];
    if (checked) {
      results.push(value2);
    }
    onChange(results);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "input",
      {
        className: "peer w-[24px] h-[24px] sr-only",
        type: "checkbox",
        value,
        onChange: (e) => onChangeAction(e),
        checked: isChecked
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "inline-block w-[24px] h-[24px] bg-black-100 border-solid border-[1px] border-black-800 rounded-[3px] peer-checked:bg-primary-800 peer-checked:border-primary-800 p-[6px_3px_4px_1px] peer-checked:drop-shadow-[0px_1px_4px_#6F9DF8]", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "bg-checkbox-check w-[20px] h-[13px] bg-cover" }) }),
    label ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "inline-block leading-[24px] h-[24px] translate-y-[-7px] ml-2 mr-2", children: label }) : ""
  ] });
}

// src/components/Textarea/index.tsx
var import_react9 = __toESM(require("react"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var Textarea = import_react9.default.forwardRef(function Textarea2({
  placeholder = "Input Text Here...",
  value,
  onChange,
  onBlur,
  limit,
  isDisabled = false,
  style,
  label = "",
  register,
  name
}, ref) {
  const inputId = label.toLowerCase().split(" ").join("-");
  const [sumCharacters, setSumCharacters] = (0, import_react9.useState)(0);
  const [textboxVal, setTextBoxVal] = (0, import_react9.useState)("");
  const textareaId = `textarea-${Math.random()}`;
  (0, import_react9.useEffect)(() => {
    setSumCharacters(
      document.getElementById(inputId).value.length
    );
  }, [register == null ? void 0 : register.ref]);
  (0, import_react9.useEffect)(() => {
    let tmpVal = value;
    if (register)
      tmpVal = document.getElementById(inputId).value;
    if (limit && tmpVal) {
      let inputLength = 0;
      if (tmpVal.length < limit) {
        inputLength = tmpVal.length;
        setTextBoxVal(tmpVal);
      } else {
        const trimmedVal = tmpVal.substring(0, limit);
        inputLength = trimmedVal.length;
        setTextBoxVal(trimmedVal);
      }
      setSumCharacters(inputLength);
    } else if (tmpVal || tmpVal === "")
      setTextBoxVal(tmpVal);
  }, [value, limit]);
  const conditionalOnChange = (val) => {
    if (!val)
      return;
    if (register == null ? void 0 : register.onChange) {
      register.onChange(val);
    } else if (onChange) {
      onChange(val);
    }
  };
  const onChangeTextarea = (event) => {
    if (!(!onChange || !(register == null ? void 0 : register.onChange)))
      return;
    const tmpEvent = __spreadValues({}, event);
    if (!limit) {
      conditionalOnChange(tmpEvent);
      return;
    }
    if (!(sumCharacters === 0 || tmpEvent.target.value.length <= limit)) {
      document.getElementById(inputId).value = tmpEvent.target.value.substring(0, limit);
      return;
    }
    setSumCharacters(tmpEvent.target.value.length);
    conditionalOnChange(tmpEvent);
  };
  const conditionalOnBlur = (val) => {
    if (!val)
      return;
    if (register == null ? void 0 : register.onBlur)
      register.onBlur(val);
    else if (onBlur)
      onBlur(val);
  };
  const onBlurTextarea = (event) => {
    if (!onBlur || !(register == null ? void 0 : register.onBlur) || isDisabled)
      return;
    conditionalOnBlur(event);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col items-start", children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: "pb-[5px]", htmlFor: inputId, children: label }) : "",
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "textarea",
      {
        ref: register ? register.ref : ref,
        name: register ? register.name : name,
        id: inputId,
        style,
        disabled: isDisabled,
        placeholder,
        onChange: (event) => onChangeTextarea(event),
        onBlur: (event) => onBlurTextarea(event),
        className: [
          "w-full h-[170px] outline-none border-[0.5px] border-solid",
          "border-[#464646] rounded-[7px] px-[13px] py-[8px] resize-none",
          "focus:dark:drop-shadow-[0px_1px_17px_#406FCB] dark:text-black-900",
          "disabled:bg-black-200 disabled:text-black-700",
          "disabled:border-black-600 dark:disabled:bg-black-500"
        ].join(" ")
      }
    ),
    limit ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "text-black-700 text-sm p-1", children: [
      sumCharacters,
      "/",
      limit,
      " Characters"
    ] }) : ""
  ] });
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Modal,
  Radio,
  Snackbar,
  Textarea,
  Tooltip
});
