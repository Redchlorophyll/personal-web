import React, { useEffect, useState } from 'react';

type checkboxProps = {
  value?: string;
  valueList?: Array<string>;
  onChange?: (value: Array<string>) => void;
  label?: string;
};

export function Checkbox({
  value = '',
  valueList = [],
  onChange,
  label,
}: checkboxProps) {
  const [isChecked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      const isValueIncluded = valueList.includes(value);
      if (isValueIncluded) setChecked(true);
      else setChecked(false);
    }
  }, [valueList]);

  const onChangeAction = (event: React.FormEvent<HTMLInputElement>) => {
    if (!onChange) return;
    const { value, checked } = event.target as HTMLInputElement;
    const results: Array<string> =
      valueList?.filter((data: string) => data !== value) || [];
    if (checked) {
      results.push(value);
    }
    onChange(results);
  };

  return (
    <label>
      <input
        className="peer w-[24px] h-[24px] sr-only"
        type="checkbox"
        value={value}
        onChange={(e) => onChangeAction(e)}
        checked={isChecked}
      />
      <div className="inline-block w-[24px] h-[24px] bg-black-100 border-solid border-[1px] border-black-800 rounded-[3px] peer-checked:bg-primary-800 peer-checked:border-primary-800 p-[6px_3px_4px_1px] peer-checked:drop-shadow-[0px_1px_4px_#6F9DF8]">
        <div className="bg-checkbox-check w-[20px] h-[13px] bg-cover" />
      </div>
      {label ? (
        <div className="inline-block leading-[24px] h-[24px] translate-y-[-7px] ml-2 mr-2">
          {label}
        </div>
      ) : (
        ''
      )}
    </label>
  );
}
