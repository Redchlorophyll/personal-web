import React, { useState, useEffect } from "react";

type radioProps = {
  value?: string;
  valueGroup?: string;
  onChange?: (value: string) => void;
};

const defaultProps: radioProps = {
  value: "",
  valueGroup: "",
  onChange: (value: string): void => {},
};

const Radio: React.FunctionComponent<radioProps> = (props) => {
  const [isChecked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (props.value) {
      if (props.value === props.valueGroup) setChecked(true);
      else setChecked(false);
    }
  }, [props.valueGroup]);

  const onClickRadio = () => {
    if (!props.onChange) return;
    if (!isChecked) {
      props.onChange(props.value || "");
    } else {
      props.onChange("");
    }
    setChecked(!isChecked);
  };

  const onChange = () => {
    return;
  };

  return (
    <label>
      <input
        type="radio"
        className="w-6 h-6 peer sr-only"
        value="test"
        onClick={onClickRadio}
        onChange={onChange}
        checked={isChecked}
      />
      <div className="peer-checked:[&>*]:bg-primary-700 w-6 h-6 bg-black-100 peer-checked:bg-transparent rounded-full p-[1.1px] border-solid border-[1px] border-black-800">
        <div className="w-5 h-5 rounded-full"></div>
      </div>
    </label>
  );
};

Radio.defaultProps = defaultProps;

export default Radio;
