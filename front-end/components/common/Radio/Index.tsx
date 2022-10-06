import React, { useState, useEffect } from "react";

type radioProps = {
  value?: string;
  valueGroup?: string;
  onChange?: (value: string) => void;
};

export default function Radio({
  value = "",
  valueGroup = "",
  onChange,
}: radioProps) {
  const [isChecked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      if (value === valueGroup) setChecked(true);
      else setChecked(false);
    }
  }, [valueGroup]);

  const onClickRadio = () => {
    if (!onChange) return;
    if (!isChecked) {
      onChange(value || "");
    } else {
      onChange("");
    }
    setChecked(!isChecked);
  };

  const onChangeRadio = () => {
    return;
  };

  return (
    <label>
      <input
        type="radio"
        className="w-6 h-6 peer sr-only"
        value="test"
        onClick={onClickRadio}
        onChange={onChangeRadio}
        checked={isChecked}
      />
      <div className="peer-checked:[&>*]:bg-primary-700 w-6 h-6 bg-black-100 peer-checked:bg-transparent rounded-full p-[1.1px] border-solid border-[1px] border-black-800">
        <div className="w-5 h-5 rounded-full"></div>
      </div>
    </label>
  );
}