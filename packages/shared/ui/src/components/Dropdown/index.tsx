import React, { useState, useRef, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

type optVal = {
  label: string;
  value: string;
};

type dropdownProps = {
  options?: Array<optVal>;
  placeholder?: string;
  value?: string;
  onChange?: (value: optVal | undefined) => void;
  type?: 'dropdown' | 'combobox';
  label?: string;
};

export function Dropdown({
  type = 'dropdown',
  options = [{ label: 'sampel', value: 'sampelVal' }],
  placeholder = 'choose an option...',
  onChange,
  value,
  label = '',
}: dropdownProps) {
  const inputId = label.toLowerCase().split(' ').join('-');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLHeadingElement>(null);
  const [inputValue, setInputValue] = useState<optVal | undefined>({
    label: '',
    value: '',
  });
  const [inputOptions, setInputOptions] = useState<Array<optVal>>([...options]);

  const handleFocus = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      (document.activeElement as HTMLElement).blur();
    }
  };

  const setActiveVal = (activeVal: optVal | undefined) => {
    handleFocus();
    if (onChange) {
      onChange(activeVal);
      setInputValue(activeVal);
    }
  };

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (type === 'dropdown') return;
    const filterOptions = options.filter((data) =>
      data.label.toLowerCase().includes(event.currentTarget.value.toLowerCase())
    );
    setInputOptions(filterOptions);
    setInputValue({
      label: event.currentTarget.value,
      value: event.currentTarget.value.toLocaleLowerCase().split(' ').join('-'),
    });
  };

  const optionHtml = inputOptions.map((value, idx) => {
    return (
      <button
        onClick={() => setActiveVal(value)}
        key={idx}
        className="w-full text-left cursor-pointer list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400"
      >
        {value.label}
      </button>
    );
  });

  useEffect(() => {
    if (!inputValue) return;
    const matchedData = options.find((data: optVal) => data.value === value);
    setInputValue(matchedData);

    if (type === 'combobox') {
      const filterOptions = options.filter((data) =>
        data.label.toLowerCase().includes(value?.toLowerCase() || '')
      );
      setInputOptions(filterOptions);
    }
  }, [value]);

  useEffect(() => {
    const outsideClickHandler = ({ target }: MouseEvent) => {
      const { current } = inputRef;

      if (current && !current.contains(target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', outsideClickHandler);

    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  });

  return (
    <div className="flex flex-col items-start">
      {label ? (
        <label className="pb-[5px]" htmlFor={inputId}>
          {label}
        </label>
      ) : (
        ''
      )}
      <div
        ref={inputRef}
        data-testid="focus-element"
        className="w-full relative z-[5] dark:text-black-900"
      >
        <input
          id={inputId}
          className={`peer ${
            type === 'dropdown' ? 'cursor-pointer' : ''
          } bg-black-100 w-full p-[5px_17px_5px_13px] border-black-800 border-solid border-[0.5px] focus:outline-none focus:border-solid focus:border-[0.5px] focus:border-primary-800 rounded-lg dark:focus:drop-shadow-[0px_1px_17px_#406fcb]`}
          type="text"
          placeholder={placeholder}
          readOnly={!!(type === 'dropdown')}
          onClick={() => handleFocus()}
          value={inputValue?.label || ''}
          onChange={(e) => onInputChange(e)}
        />

        {type === 'dropdown' ? (
          <div className="bg-black-100 bg-dropdown-arrow w-5 h-3 bg-cover z-[1] absolute left-full top-[10px] -translate-x-[28px] transition-transform peer-focus:transition-transform peer-focus:rotate-180" />
        ) : (
          ''
        )}
        {isOpen && inputOptions.length > 0 ? (
          <Fade>
            <div className="w-full bg-black-100 absolute mt-2 p-[12px_5px_7px_5px] overflow-y-scroll max-h-32 scrollbar-thin scrollbar-thumb-black-500 scrollbar-track-dark-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
              {inputOptions.length > 0 &&
              value !== '' &&
              type === 'dropdown' ? (
                <button
                  onClick={() =>
                    setActiveVal({
                      label: '',
                      value: '',
                    })
                  }
                  className="w-full text-left text-black-700 cursor-pointer list-inside leading-6 border-b-[1px] border-black-500 hover:bg-black-400"
                >
                  Clear Selection
                </button>
              ) : (
                ''
              )}
              {optionHtml}
            </div>
          </Fade>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
