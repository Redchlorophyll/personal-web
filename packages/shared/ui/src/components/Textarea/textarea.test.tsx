import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Textarea } from "./index";
import { act } from "react-dom/test-utils";

function InputWrapper({
  disabled = false,
  limit,
}: {
  disabled?: boolean;
  limit?: number;
}) {
  const [value, setValue] = useState<string>("");

  const onChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    setValue((event.target as HTMLTextAreaElement).value);
  };

  return (
    <div>
      <Textarea
        onChange={onChange}
        placeholder="This is Textarea"
        isDisabled={disabled}
        value={value}
        limit={limit}
        label="textarea"
      />
    </div>
  );
}

describe("shared - ui - Input", () => {
  test("It should render properly", () => {
    render(<InputWrapper />);
    const target = screen.getByRole("textbox");

    expect(target).toBeInTheDocument();
  });

  test("It should not allow text input when disabled", async () => {
    const user = userEvent.setup();
    render(<InputWrapper disabled={true} />);
    const target = screen.getByRole("textbox");

    await act(async () => await user.type(target, "test"));
    expect(screen.queryByDisplayValue("test")).not.toBeInTheDocument();
  });

  test("It should show right input when inputing value", async () => {
    const user = userEvent.setup();
    render(<InputWrapper />);
    const target = screen.getByRole("textbox");

    expect(screen.queryByDisplayValue("")).toBeInTheDocument();
    await act(async () => await user.type(target, "test"));
    expect(screen.queryByDisplayValue("test")).toBeInTheDocument();
  });

  test("It should show right input when inputing value", async () => {
    const user = userEvent.setup();
    render(<InputWrapper limit={5} />);
    const target = screen.getByRole("textbox");

    expect(screen.queryByDisplayValue("")).toBeInTheDocument();
    await act(async () => await user.type(target, "dhonni"));
    expect(screen.queryByDisplayValue("dhonn")).toBeInTheDocument();
  });
});
