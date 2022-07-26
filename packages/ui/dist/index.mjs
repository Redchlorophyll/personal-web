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
function Modal({ children, title, style }) {
  return /* @__PURE__ */ jsxs3(Fragment, {
    children: [
      /* @__PURE__ */ jsx4("div", {
        className: "w-full h-[100vh] absolute z-30 bg-black-900 opacity-25"
      }),
      /* @__PURE__ */ jsx4("div", {
        className: [
          "w-full h-[100vh] absolute z-30",
          "flex justify-center align-baseline"
        ].join(" "),
        children: /* @__PURE__ */ jsxs3("div", {
          style,
          className: [
            "w-[616px] min-h-[503px] bg-black-100 dark:bg-dark-layout",
            "top-1/2 absolute -translate-y-1/2",
            "p-[25px_30px] rounded-2xl text"
          ].join(" "),
          children: [
            title ? /* @__PURE__ */ jsx4("div", {
              className: "pb-5",
              children: /* @__PURE__ */ jsx4("span", {
                className: "text-base font-bold",
                children: title
              })
            }) : "",
            /* @__PURE__ */ jsx4("div", {
              children
            })
          ]
        })
      })
    ]
  });
}

// src/components/Tooltip/index.tsx
import { useEffect as useEffect3, useState as useState3, useRef } from "react";

// src/components/Tooltip/TooltipContent.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function TooltipContent({
  tipLocation = "top",
  children
}) {
  return /* @__PURE__ */ jsx5("div", {
    className: "bg-black-100 mt-2 py-1 pl-2 pr-4 shadow-[0_0_4px_rgba(29,171,221,0.2)] w-fit whitespace-nowrap rounded-sm dark:text-black-900 after:absolute after:left-[1px] " + (tipLocation == "top" ? "after:top-1 " : "") + (tipLocation == "bottom" ? "after:-bottom-1 after:rotate-180 " : "") + (tipLocation == "left" ? "after:top-2/4 after:left-[-6px] after:translate-y-[2px] after:-rotate-90 " : "") + (tipLocation == "right" ? "after:top-2/4 after:left-full after:translate-x-[-2px] after:translate-y-[2px] after:rotate-90 text-left " : "") + "after:border-b-4 after:border-b-black-500 after:w-0 after:h-0 after:border-l-4 after:border-r-4 after:border-l-black-100/0 after:border-r-black-100/0",
    children: children ? children : "Insert Tooltip Content Here"
  });
}

// src/components/Tooltip/index.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function Tooltip({
  direction = "bottom",
  tooltipContent,
  children
}) {
  const [tooltipDirection, setTooltipDirection] = useState3("top");
  const [halfWidth, setHalfWidth] = useState3(0);
  const tooltipWrapper = useRef(null);
  useEffect3(() => {
    tipDirection(direction || "bottom");
  }, [direction]);
  useEffect3(() => {
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
  return /* @__PURE__ */ jsxs4("div", {
    className: "group relative w-fit",
    ref: tooltipWrapper,
    children: [
      /* @__PURE__ */ jsx6("div", {
        children
      }),
      /* @__PURE__ */ jsx6("div", {
        style: direction === "top" || direction === "bottom" ? { transform: `translateX(${halfWidth}px)` } : {},
        className: "absolute " + (direction === "top" ? `-top-10 ` : "") + (direction === "left" ? "-top-3 -translate-x-full -left-2 " : "") + (direction === "right" ? "-top-3 translate-x-2 left-full " : "") + "invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-in-out duration-300",
        children: /* @__PURE__ */ jsx6(TooltipContent, {
          tipLocation: tooltipDirection,
          children: tooltipContent
        })
      })
    ]
  });
}

// src/components/Snackbar/index.tsx
import { useEffect as useEffect4, useState as useState4 } from "react";
import { Fade } from "react-awesome-reveal";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
function Snackbar({
  variant = "error",
  isShown = false,
  timer,
  onClose,
  children
}) {
  const [baseColor, setBaseColor] = useState4("bg-red-700");
  const [image, setImage] = useState4("error");
  useEffect4(() => {
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
  useEffect4(() => {
    if (timer && isShown) {
      setTimeout(() => {
        if (onClose)
          onClose(false);
      }, timer);
    }
  }, [timer, isShown]);
  const snackbarIcon = () => {
    if (image === "error")
      return /* @__PURE__ */ jsx7("div", {
        className: `bg-icon-error w-[30px] h-[30px] bg-cover`
      });
    else if (image === "info")
      return /* @__PURE__ */ jsx7("div", {
        className: `bg-icon-info w-[30px] h-[30px] bg-cover`
      });
    else if (image === "warning")
      return /* @__PURE__ */ jsx7("div", {
        className: `bg-icon-warning w-[30px] h-[25px] bg-cover`
      });
    else if (image === "checked")
      return /* @__PURE__ */ jsx7("div", {
        className: `bg-icon-checked w-[30px] h-[30px] bg-cover`
      });
  };
  return /* @__PURE__ */ jsx7("div", {
    className: "fixed top-4 left-1/2 -translate-x-1/2",
    children: isShown ? /* @__PURE__ */ jsx7(Fade, {
      children: /* @__PURE__ */ jsxs5("div", {
        className: `${baseColor} w-fit max-w-xl min-h-[65px] p-[19px_35px_10px_35px] rounded-[10px] flex gap-4 leading-[27px] text-black-100`,
        children: [
          /* @__PURE__ */ jsx7("div", {
            children: snackbarIcon()
          }),
          /* @__PURE__ */ jsx7("div", {
            children: /* @__PURE__ */ jsx7("p", {
              className: "text-base translate-y-[2px] min-w-[10rem]",
              children: children ? children : "Snackbar Children Goes Here!"
            })
          }),
          !timer ? /* @__PURE__ */ jsx7("div", {
            className: "-translate-y-1 translate-x-4",
            children: /* @__PURE__ */ jsx7("button", {
              onClick: () => onCloseAction(),
              "data-testid": "close-snackbar",
              children: /* @__PURE__ */ jsx7("div", {
                className: "bg-icon-close w-[30px] h-[30px]"
              })
            })
          }) : ""
        ]
      })
    }) : ""
  });
}

// src/components/Dropdown/index.tsx
import { useState as useState5, useRef as useRef2, useEffect as useEffect5 } from "react";
import { Fade as Fade2 } from "react-awesome-reveal";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
function Dropdown({
  type = "dropdown",
  options = [{ label: "sampel", value: "sampelVal" }],
  placeholder = "choose an option...",
  onChange,
  value,
  label = ""
}) {
  const inputId = label.toLowerCase().split(" ").join("-");
  const [isOpen, setIsOpen] = useState5(false);
  const inputRef = useRef2(null);
  const [inputValue, setInputValue] = useState5({
    label: "",
    value: ""
  });
  const [inputOptions, setInputOptions] = useState5([...options]);
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
    return /* @__PURE__ */ jsx8("button", {
      onClick: () => setActiveVal(value2),
      className: "w-full text-left cursor-pointer list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400",
      children: value2.label
    }, idx);
  });
  useEffect5(() => {
    setInputValue(value);
    if (type === "combobox") {
      const filterOptions = options.filter(
        (data) => data.label.toLowerCase().includes((value == null ? void 0 : value.label.toLowerCase()) || "")
      );
      setInputOptions(filterOptions);
    }
  }, [value]);
  useEffect5(() => {
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
  return /* @__PURE__ */ jsxs6("div", {
    className: "flex flex-col items-start",
    children: [
      label ? /* @__PURE__ */ jsx8("label", {
        className: "pb-[5px]",
        htmlFor: inputId,
        children: label
      }) : "",
      /* @__PURE__ */ jsxs6("div", {
        ref: inputRef,
        "data-testid": "focus-element",
        className: "w-full relative z-[5] dark:text-black-900",
        children: [
          /* @__PURE__ */ jsx8("input", {
            id: inputId,
            className: `peer ${type === "dropdown" ? "cursor-pointer" : ""} bg-black-100 w-full p-[6px_17px_6px_13px] border-black-800 border-solid border-[0.5px] focus:outline-none focus:border-solid focus:border-[0.5px] focus:border-primary-800 rounded-lg dark:focus:drop-shadow-[0px_1px_17px_#406fcb]`,
            type: "text",
            placeholder,
            readOnly: !!(type === "dropdown"),
            onClick: () => handleFocus(),
            value: inputValue == null ? void 0 : inputValue.label,
            onChange: (e) => onInputChange(e)
          }),
          type === "dropdown" ? /* @__PURE__ */ jsx8("div", {
            className: "bg-black-100 bg-dropdown-arrow w-5 h-3 bg-cover z-[1] absolute left-full top-[10px] -translate-x-[28px] transition-transform peer-focus:transition-transform peer-focus:rotate-180"
          }) : "",
          isOpen && inputOptions.length > 0 ? /* @__PURE__ */ jsx8(Fade2, {
            children: /* @__PURE__ */ jsxs6("div", {
              className: "w-full bg-black-100 absolute mt-2 p-[12px_5px_7px_5px] overflow-y-scroll max-h-32 scrollbar-thin scrollbar-thumb-black-500 scrollbar-track-dark-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full shadow-[0px_1px_4px_rgba(0,0,0,0.25)]",
              children: [
                inputOptions.length > 0 && (value == null ? void 0 : value.label) !== "" && (value == null ? void 0 : value.value) !== "" && type === "dropdown" ? /* @__PURE__ */ jsx8("button", {
                  onClick: () => setActiveVal({
                    label: "",
                    value: ""
                  }),
                  className: "w-full text-left text-black-700 cursor-pointer list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400",
                  children: "Clear Selection"
                }) : "",
                optionHtml
              ]
            })
          }) : ""
        ]
      })
    ]
  });
}

// src/components/Checkbox/index.tsx
import { useEffect as useEffect6, useState as useState6 } from "react";
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
function Checkbox({
  value = "",
  valueList = [],
  onChange,
  label
}) {
  const [isChecked, setChecked] = useState6(false);
  useEffect6(() => {
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
  return /* @__PURE__ */ jsxs7("label", {
    children: [
      /* @__PURE__ */ jsx9("input", {
        className: "peer w-[24px] h-[24px] sr-only",
        type: "checkbox",
        value,
        onChange: (e) => onChangeAction(e),
        checked: isChecked
      }),
      /* @__PURE__ */ jsx9("div", {
        className: "inline-block w-[24px] h-[24px] bg-black-100 border-solid border-[1px] border-black-800 rounded-[3px] peer-checked:bg-primary-800 peer-checked:border-primary-800 p-[6px_3px_4px_1px] peer-checked:drop-shadow-[0px_1px_4px_#6F9DF8]",
        children: /* @__PURE__ */ jsx9("div", {
          className: "bg-checkbox-check w-[20px] h-[13px] bg-cover"
        })
      }),
      label ? /* @__PURE__ */ jsx9("div", {
        className: "inline-block leading-[24px] h-[24px] translate-y-[-7px] ml-2 mr-2",
        children: label
      }) : ""
    ]
  });
}

// src/components/Textarea/index.tsx
import { useState as useState7, useEffect as useEffect7 } from "react";
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
function Textarea({
  placeholder = "Input Text Here...",
  value,
  onChange,
  limit,
  isDisabled = false,
  style,
  label = ""
}) {
  const inputId = label.toLowerCase().split(" ").join("-");
  const [sumCharacters, setSumCharacters] = useState7(0);
  const [textboxVal, setTextBoxVal] = useState7("");
  useEffect7(() => {
    if (limit && value) {
      let inputLength = 0;
      if (value.length < limit) {
        inputLength = value.length;
        setTextBoxVal(value);
      } else {
        const trimmedVal = value.substring(0, limit);
        inputLength = trimmedVal.length;
        setTextBoxVal(trimmedVal);
      }
      setSumCharacters(inputLength);
    } else if (value || value === "")
      setTextBoxVal(value);
  }, [value, limit]);
  const onChangeTextarea = (event) => {
    if (!onChange)
      return;
    if (!limit) {
      onChange(event);
      return;
    }
    if (!(sumCharacters === 0 || event.length <= limit))
      return;
    setSumCharacters(textboxVal.length);
    onChange(event.substring(0, limit));
  };
  return /* @__PURE__ */ jsxs8("div", {
    className: "flex flex-col items-start",
    children: [
      label ? /* @__PURE__ */ jsx10("label", {
        className: "pb-[5px]",
        htmlFor: inputId,
        children: label
      }) : "",
      /* @__PURE__ */ jsx10("textarea", {
        id: inputId,
        style,
        value: textboxVal,
        disabled: isDisabled,
        placeholder,
        onChange: (event) => onChangeTextarea(event.target.value),
        className: [
          "w-full h-[170px] outline-none border-[0.5px] border-solid",
          "border-[#464646] rounded-[7px] px-[13px] py-[8px] resize-none",
          "focus:dark:drop-shadow-[0px_1px_17px_#406FCB] dark:text-black-900",
          "disabled:bg-black-200 disabled:text-black-700",
          "disabled:border-black-600 dark:disabled:bg-black-500"
        ].join(" ")
      }),
      limit ? /* @__PURE__ */ jsxs8("span", {
        className: "text-black-700 text-sm p-1",
        children: [
          sumCharacters,
          "/",
          limit,
          " Characters"
        ]
      }) : ""
    ]
  });
}
export {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Modal,
  Radio,
  Snackbar,
  Textarea,
  Tooltip
};
