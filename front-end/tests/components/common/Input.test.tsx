import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import Input from "@/components/common/Input";

function InputWrapper(props: { isDisabled?: boolean }) {
  const [value, setValue] = useState<string>("");

  const onChange = (event: string): void => {
    setValue(event);
  };

  return (
    <div>
      <Input value={value} onChange={onChange} isDisabled={props.isDisabled} />
    </div>
  );
}

describe("component - common - Input", () => {
  test("It should render properly", () => {
    render(<InputWrapper />);
    const target = screen.getByLabelText("input");

    expect(target).toBeInTheDocument();
  });

  test("It should show right input when inputing value", async () => {
    const user = userEvent.setup();
    render(<InputWrapper />);
    const target = screen.getByLabelText("input");

    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    await user.type(target, "test");
    expect(screen.getByDisplayValue("test")).toBeInTheDocument();
  });

  test("It should not allow text input when disabled", async () => {
    const user = userEvent.setup();
    render(<InputWrapper isDisabled={true} />);
    const target = screen.getByLabelText("input");

    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    await user.type(target, "test");
    expect(screen.queryByDisplayValue("test")).not.toBeInTheDocument();
  });
});
