import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Radio } from "./index";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

function RadioWrapper() {
  const [radio, setRadio] = useState<string>('');

  function onChangeCheckbox(val: string) {
    setRadio(val);
  }

  return (
    <div>
      {radio}
      <Radio
        valueGroup={radio}
        onChange={(val: string) => onChangeCheckbox(val)}
        value={"test"}
      />
    </div>
  );
}

describe("shared - ui - radio", () => {
  test("it should render properly", () => {
    render(<RadioWrapper />);
    const target = screen.getByRole("radio");
    expect(target).toBeInTheDocument();
  });

  test("it should be checked when clicked", async () => {
    const user = userEvent.setup();
    render(<RadioWrapper />);
    const target = screen.getByRole("radio");
    expect(screen.queryByText("test")).not.toBeInTheDocument();

    
    await act(async () => await user.click(target));
    expect(screen.queryByText("test")).toBeInTheDocument();

    await act(async () => await user.click(target));
    expect(screen.queryByText("test")).not.toBeInTheDocument();
  });
});
