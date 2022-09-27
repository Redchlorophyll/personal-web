import React from "react";

type checkboxProps = {
  value?: string;
  valueList?: Array<string>;
  onChange?: Function;
};

const defaultProps: checkboxProps = {
  value: "",
  valueList: [],
  onChange: (): void => {},
};

const Checkbox: React.FunctionComponent<checkboxProps> = (props) => {
  const onChangeAction = (event: React.FormEvent<HTMLInputElement>) => {
    if (!props.onChange) return;
    const { value, checked } = event.target as HTMLInputElement;
    const results: Array<string> =
      props.valueList?.filter((data) => data !== value) || [];
    if (checked) {
      results.push(value);
    }
    props.onChange(results);
  };

  return (
    <div>
      <input
        className="peer w-[24px] h-[24px] absolute opacity-0"
        type="checkbox"
        value={props.value}
        onChange={(e) => onChangeAction(e)}
      />
      <div className="w-[24px] h-[24px] bg-black-100 border-solid border-[1px] border-black-800 rounded-[3px] peer-checked:bg-primary-800 peer-checked:border-primary-800 p-[6px_3px_4px_1px]">
        <div className="bg-checkbox-check w-[20px] h-[13px] bg-cover" />
      </div>
    </div>
  );
};

Checkbox.defaultProps = defaultProps;

export default Checkbox;
