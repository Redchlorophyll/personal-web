import React, { useEffect, useState } from "react";

type checkboxProps = {
  value?: string;
  valueList?: Array<string>;
  onChange?: (value: Array<string>) => void;
};

const defaultProps: checkboxProps = {
  value: "",
  valueList: [],
  onChange: (value: Array<string>): void => {},
};

const Checkbox: React.FunctionComponent<checkboxProps> = (props) => {
  const [isChecked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (props.value) {
      const isValueIncluded = props.valueList?.includes(props.value);
      if (isValueIncluded) setChecked(true);
      else setChecked(false);
    }
  }, [props.valueList]);

  const onChangeAction = (event: React.FormEvent<HTMLInputElement>) => {
    if (!props.onChange) return;
    const { value, checked } = event.target as HTMLInputElement;
    const results: Array<string> =
      props.valueList?.filter((data: string) => data !== value) || [];
    if (checked) {
      results.push(value);
    }
    props.onChange(results);
  };

  return (
    <label>
      <input
        className="peer w-[24px] h-[24px] sr-only"
        type="checkbox"
        value={props.value}
        onChange={(e) => onChangeAction(e)}
        checked={isChecked}
      />
      <div className="w-[24px] h-[24px] bg-black-100 border-solid border-[1px] border-black-800 rounded-[3px] peer-checked:bg-primary-800 peer-checked:border-primary-800 p-[6px_3px_4px_1px] peer-checked:drop-shadow-[0px_1px_4px_#6F9DF8]">
        <div className="bg-checkbox-check w-[20px] h-[13px] bg-cover" />
      </div>
    </label>
  );
};

Checkbox.defaultProps = defaultProps;

export default Checkbox;
