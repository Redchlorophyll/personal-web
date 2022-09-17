import React, { useState, useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const outsideClickHandler = ({ target }: MouseEvent) => {
      const { current } = inputRef;

      if (current && !current.contains(target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", outsideClickHandler);

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  });
  return (
    <div ref={inputRef} className="w-full relative dark:text-black-900">
      <input
        className="cursor-pointer bg-black-100 w-full p-[6px_17px_6px_13px] border-black-800 border-solid border-[0.5px] focus:outline-none focus:border-solid focus:border-[0.5px] focus:border-primary-800 rounded-lg dark:drop-shadow-[0px_1px_17px_#406fcb]"
        type="text"
        placeholder="Select data here..."
        readOnly
        onClick={() => setIsOpen(!isOpen)}
      />

      <div className="bg-black-100 bg-dropdown-arrow w-5 h-3 bg-cover z-[1] absolute left-full top-[10px] -translate-x-[28px]" />
      {isOpen ? (
        <Fade>
          <div className="w-full bg-black-100 absolute mt-2 p-[12px_5px_7px_5px] overflow-y-scroll max-h-32 scrollbar-thin scrollbar-thumb-black-500 scrollbar-track-dark-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
            <div className="list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400">
              Option test 1
            </div>
            <div className="list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400">
              Option test 1
            </div>
            <div className="list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400">
              Option test 1
            </div>
            <div className="list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400">
              Option test 1
            </div>
            <div className="list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400">
              Option test 1
            </div>
            <div className="list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400">
              Option test 1
            </div>
            <div className="list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400">
              Option test 1
            </div>
            <div className="list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400">
              Option test 1
            </div>
            <div className="list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400">
              Option test 1
            </div>
          </div>
        </Fade>
      ) : (
        ""
      )}
    </div>
  );
}
