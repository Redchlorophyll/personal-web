import React from "react";

type textareaProps = {
  onChange?: (event: string) => void;
  value?: string;
  placeholder?: string;
};

const Textarea = ({ placeholder, value, onChange }: textareaProps) => {
  const onChangeTextarea = (event: string) => {
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <textarea
      value={value}
      placeholder={placeholder || "Textarea"}
      onChange={(event) => onChangeTextarea(event.target.value)}
      className={[
        "w-full h-[170px] outline-none border-[0.5px] border-solid",
        "border-[#464646] rounded-[7px] px-[13px] py-[8px]",
        "focus:dark:drop-shadow-[0px_1px_17px_#406FCB] dark:text-black-900",
      ].join(" ")}
    />
  );
};

export default Textarea;