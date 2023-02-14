import React, { LegacyRef, CSSProperties, useState, useEffect } from "react";

type registerProps = {
  label?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
  ref?: LegacyRef<HTMLTextAreaElement> | undefined;
  name?: string;
};

type textareaProps = {
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement, Element>) => void;
  value?: string;
  placeholder?: string;
  limit?: number; //total characters in textarea
  isDisabled?: boolean;
  label?: string;
  style?: CSSProperties;
  register?: registerProps;
  inputName?: string;
  name?: string;
};

export const Textarea = React.forwardRef(function Textarea(
  {
    placeholder = "Input Text Here...",
    value,
    onChange,
    onBlur,
    limit,
    isDisabled = false,
    style,
    label = "",
    register,
    name,
  }: textareaProps,
  ref: LegacyRef<HTMLTextAreaElement> | undefined
) {
  const inputId = label.toLowerCase().split(" ").join("-");
  const [sumCharacters, setSumCharacters] = useState<number>(0);
  const [textboxVal, setTextBoxVal] = useState<string>("");
  const textareaId = `textarea-${Math.random()}`;

  useEffect(() => {
    setSumCharacters(
      (document.getElementById(inputId) as HTMLInputElement).value.length
    );
  }, [register?.ref]);

  useEffect(() => {
    let tmpVal = value;
    if (register)
      tmpVal = (document.getElementById(inputId) as HTMLInputElement).value;
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
      console.log(inputLength);
      setSumCharacters(inputLength);
    } else if (tmpVal || tmpVal === "") setTextBoxVal(tmpVal);
  }, [value, limit]);

  const conditionalOnChange = (val: React.FormEvent<HTMLTextAreaElement>) => {
    if (!val) return;
    if (register?.onChange) {
      console.log("masuk sini");
      register.onChange(val as unknown as React.FormEvent<HTMLInputElement>);
    } else if (onChange) {
      console.log("atau masuk sini");
      onChange(val);
    }
  };

  const onChangeTextarea = (event: React.FormEvent<HTMLTextAreaElement>) => {
    if (!(!onChange || !register?.onChange)) return;
    const tmpEvent = { ...event };

    if (!limit) {
      conditionalOnChange(tmpEvent);
      return;
    }

    if (
      !(
        sumCharacters === 0 ||
        (tmpEvent.target as HTMLInputElement).value.length <= limit
      )
    ) {
      (document.getElementById(inputId) as HTMLInputElement).value = (
        tmpEvent.target as HTMLInputElement
      ).value.substring(0, limit);
      return;
    }
    setSumCharacters((tmpEvent.target as HTMLInputElement).value.length);
    conditionalOnChange(tmpEvent);
  };

  const conditionalOnBlur = (val: React.FocusEvent<HTMLTextAreaElement>) => {
    if (!val) return;
    if (register?.onBlur)
      register.onBlur(val as unknown as React.FormEvent<HTMLInputElement>);
    else if (onBlur) onBlur(val);
  };

  const onBlurTextarea = (
    event: React.FocusEvent<HTMLTextAreaElement, Element>
  ) => {
    if (!onBlur || !register?.onBlur || isDisabled) return;
    conditionalOnBlur(event);
  };

  return (
    <div className="flex flex-col items-start">
      {label ? (
        <label className="pb-[5px]" htmlFor={inputId}>
          {label}
        </label>
      ) : (
        ""
      )}
      <textarea
        ref={register ? register.ref : ref}
        name={register ? register.name : name}
        id={inputId}
        style={style}
        disabled={isDisabled}
        placeholder={placeholder}
        onChange={(event) => onChangeTextarea(event)}
        onBlur={(event) => onBlurTextarea(event)}
        className={[
          "w-full h-[170px] outline-none border-[0.5px] border-solid",
          "border-[#464646] rounded-[7px] px-[13px] py-[8px] resize-none",
          "focus:dark:drop-shadow-[0px_1px_17px_#406FCB] dark:text-black-900",
          "disabled:bg-black-200 disabled:text-black-700",
          "disabled:border-black-600 dark:disabled:bg-black-500",
        ].join(" ")}
      />
      {limit ? (
        <span className="text-black-700 text-sm p-1">
          {sumCharacters}/{limit} Characters
        </span>
      ) : (
        ""
      )}
    </div>
  );
});
