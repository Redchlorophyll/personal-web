import React, { useState, useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

type optVal = {
  label: string;
  value: string;
};

type dropdownProps = {
  options: Array<optVal>;
  placeholder?: string;
  value: optVal | undefined;
  setValue: Function;
};

export default function Dropdown(props: dropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLHeadingElement>(null);

  const handleFocus = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      (document.activeElement as HTMLElement).blur();
    }
  };

  const setActiveVal = (activeVal: optVal | undefined) => {
    handleFocus();
    console.log(activeVal);
    props.setValue(activeVal);
  };

  const optionHtml = props.options.map((value, idx) => {
    return (
      <div
        onClick={() => setActiveVal(value)}
        key={idx}
        className="cursor-pointer list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400"
      >
        {value.label}
      </div>
    );
  });

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
        className="peer cursor-pointer bg-black-100 w-full p-[6px_17px_6px_13px] border-black-800 border-solid border-[0.5px] focus:outline-none focus:border-solid focus:border-[0.5px] focus:border-primary-800 rounded-lg dark:focus:drop-shadow-[0px_1px_17px_#406fcb]"
        type="text"
        placeholder="Select data here..."
        readOnly
        onClick={() => handleFocus()}
        value={props.value?.label}
      />

      <div className="bg-black-100 bg-dropdown-arrow w-5 h-3 bg-cover z-[1] absolute left-full top-[10px] -translate-x-[28px] transition-transform peer-focus:transition-transform peer-focus:rotate-180" />
      {isOpen ? (
        <Fade>
          <div className="w-full bg-black-100 absolute mt-2 p-[12px_5px_7px_5px] overflow-y-scroll max-h-32 scrollbar-thin scrollbar-thumb-black-500 scrollbar-track-dark-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
            {props.options.length > 1 &&
            props.value?.label !== "" &&
            props.value?.value !== "" ? (
              <div
                onClick={() =>
                  setActiveVal({
                    label: "",
                    value: "",
                  })
                }
                className="cursor-pointer list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400"
              >
                Clear Selection
              </div>
            ) : (
              ""
            )}
            {optionHtml}
          </div>
        </Fade>
      ) : (
        ""
      )}
    </div>
  );
}
