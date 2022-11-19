import Button from "@/components/common/Button/Index";
import { useEffect, useState } from "react";
import Input from "~/components/common/Input/Index";
import ToggleMode from "~/components/common/ToggleMode/Index";
import DefaultLayout from "~/components/layout/DefaultLayout";

type variant = "warning" | "success" | "primary" | "error" | "muted";
type type = "solid" | "outline" | "translucent";

function Development() {
  const [variant, setVariant] = useState<variant>("warning");
  const [type, setType] = useState<type>("solid");
  const [value, setValue] = useState<string>("hallo");

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleSelectedVariant = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setVariant(event.target.value as variant);
  };

  const handleSelectedType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as type);
  };

  const handleOnClick = () => {
    window.alert("hallo");
  };

  const onChange = (event: string): void => {
    setValue(event);
  };

  return (
    <DefaultLayout>
      <ToggleMode />
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
        <Button type={type} onClick={handleOnClick} variant={variant}>
          Test
        </Button>
        <div className="mt-4 mb-2">input</div>
        <div className="w-[236px] mx-auto my-0">
          <Input
            value={value}
            onChange={onChange}
            label="Name*"
            isDisabled={false}
            isError={false}
            placeholder="Input Name here..."
            errorMessage="input right name"
          />
          <p>ini adalah value: {value}</p>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Development;
