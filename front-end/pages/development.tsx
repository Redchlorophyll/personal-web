import Button from "~/components/common/Button/Index";
import { useState } from "react";

type variant = "warning" | "success" | "primary" | "error" | "muted";

function Development() {
  const [variant, setVariant] = useState<variant>("warning");
  const [type, setType] = useState("solid");

  const handleSelectedVariant = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    // console.log(event.target.value);
    setVariant(event.target.value as variant);
  };

  const handleSelectedType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(event.target.value);
    setType(event.target.value);
  };

  const handleOnClick = () => {
    window.alert("hallo");
  };

  return (
    <div className="text-center">
      <h1>hallo this is Development Page for chandra</h1>
      <div className="mb-3 mt-3">
        <label htmlFor="" className="inline-block mr-7">
          Chose Button Variant
        </label>
        <select name="" id="" onChange={handleSelectedVariant}>
          <option value="warning">warning</option>
          <option value="success">success</option>
          <option value="primary">primary</option>
          <option value="error">error</option>
          <option value="muted">muted</option>
        </select>
      </div>
      <div className="mb-8">
        <label htmlFor="" className="inline-block mr-7">
          Chose Button Type
        </label>
        <select name="" id="" onChange={handleSelectedType}>
          <option value="solid">solid</option>
          <option value="outline">outline</option>
          <option value="translucent">translucent</option>
        </select>
      </div>
      <Button type={type} onClick={handleOnClick} variant={variant}></Button>
    </div>
  );
}

export default Development;
