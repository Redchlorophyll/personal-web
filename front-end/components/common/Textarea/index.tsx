import React from "react";

const Textarea = () => {
  return (
    <textarea
      className={[
        "w-full h-[170px] outline-none border-[0.5px] border-solid",
        "border-[#464646] rounded-[7px] px-[13px] py-[8px]",
        "focus:dark:drop-shadow-[0px_1px_17px_#406FCB] dark:text-black-900",
      ].join(" ")}
    ></textarea>
  );
};

export default Textarea;
