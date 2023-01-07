import React, { LegacyRef, useState } from "react";

type inputProps = {
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  isDisabled?: boolean;
  label?: string;
  name?: string;
};

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef(function Input({
  onChange,
  value = "",
  placeholder = "Input Text Here...",
  isError = false,
  errorMessage = "Error Message Here...",
  isDisabled = false,
  label = "",
  name="",
}: inputProps, ref: LegacyRef<HTMLInputElement> | undefined) {
  const [ inputValue, setInputValue ] = useState(value);
  const inputId = label.toLowerCase().split(" ").join("-");
  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (!onChange || isDisabled) return;
    console.log((event.target as HTMLInputElement).value, value, 'test', inputValue);
    setInputValue((event.target as HTMLInputElement).value);
    onChange(event);
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
      <input
        name={name}
        ref={ref}
        id={inputId}
        aria-label="input"
        value={inputValue}
        placeholder={placeholder}
        onChange={(event) => onInputChange(event)}
        disabled={isDisabled}
        className={[
          "w-full h-[34px] rounded-[7px] border-[0.5px] border-solid",
          "px-[17px] py-[6px] dark:text-black-900",
          "focus:dark:drop-shadow-[0px_1px_17px_#406FCB] outline-none",
          "disabled:bg-black-200 disabled:text-black-700",
          "disabled:border-black-600 dark:disabled:bg-black-500",
          isError
            ? "border-red-800"
            : "border-black-800 focus:border-primary-800",
        ].join(" ")}
        type="text"
      />
      {isError ? (
        <span className="text-sm text-red-800 relative w-full">
          <div className="absolute">
            {errorMessage}
          </div>
        </span>
      ) : (
        ""
      )}
    </div>
  );
});
