import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "@/components/common/Checkbox/Index";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

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

  test("it should show value when clicked", () => {
    render(<CheckboxWrapper />);
    const target = screen.getByRole("checkbox");
    expect(screen.queryByText("test")).not.toBeInTheDocument();
    fireEvent.click(target);
    expect(screen.queryByText("test")).toBeInTheDocument();
    fireEvent.click(target);
    expect(screen.queryByText("test")).not.toBeInTheDocument();
  });
});
