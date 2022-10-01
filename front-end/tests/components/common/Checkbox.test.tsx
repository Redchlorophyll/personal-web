import React, { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "@/components/common/Checkbox/Index";
import userEvent from "@testing-library/user-event";

function CheckboxWrapper() {
  const [valueCheckbox, setValueCheckbox] = useState<Array<string>>([]);

  function onChangeCheckbox(val: Array<string>) {
    setValueCheckbox(val);
  }

  return (
    <div>
      {valueCheckbox}
      <Checkbox
        valueList={valueCheckbox}
        onChange={(val: Array<string>) => onChangeCheckbox(val)}
        value={"test"}
      />
    </div>
  );
}

describe("components - common - checkbox", () => {
  test("it should render properly", () => {
    render(<CheckboxWrapper />);
    const target = screen.getByRole("checkbox");
    expect(target).toBeInTheDocument();
  });

  test("it should show value when clicked", async () => {
    render(<CheckboxWrapper />);
    const target = screen.getByRole("checkbox");
    expect(screen.queryByText("test")).not.toBeInTheDocument();

    userEvent.click(target);
    await waitFor(() => expect(screen.queryByText("test")).toBeInTheDocument());

    userEvent.click(target);
    await waitFor(() =>
      expect(screen.queryByText("test")).not.toBeInTheDocument()
    );
  });
});
