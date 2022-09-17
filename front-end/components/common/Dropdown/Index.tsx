import React from "react";

export default function Dropdown() {
  return (
    <div className="w-full relative dark:text-black-900">
      <input
        className="cursor-pointer bg-black-100 w-full p-[6px_17px_6px_13px] border-black-800 border-solid border-[0.5px] focus:outline-none focus:border-solid focus:border-[0.5px] focus:border-primary-800 rounded-lg dark:drop-shadow-[0px_1px_17px_#406fcb]"
        type="text"
        placeholder="Select data here..."
        readOnly
      />
      <div className="bg-dropdown-arrow w-5 h-3 bg-cover z-[1] absolute left-full top-[10px] -translate-x-[28px]" />
      <ul className="w-full bg-black-300 absolute mt-2">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
        <li>Option 5</li>
        <li>Option 6</li>
      </ul>
    </div>
  );
}
