import React, { useState } from "react";

type inputProps = {
  onChange: (event: string) => void;
  value: string;
};

const Input: React.FunctionComponent<inputProps> = (props) => {
  return (
    <input
      aria-label="input"
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
      className={[
        "w-full h-[34px] rounded-[7px] border-[0.5px] border-solid",
        "border-[#3B67BB] px-[17px] py-[6px] dark:text-black-900",
        "focus:dark:drop-shadow-[0px_1px_17px_#406FCB] outline-none",
      ].join(" ")}
      type="text"
    />
  );
};

export default Input;
