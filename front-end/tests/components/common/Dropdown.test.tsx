import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "@/components/common/Dropdown/Index";
import userEvent from "@testing-library/user-event";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

type optVal = {
  label: string;
  value: string;
};

type props = {
  isCombobox: boolean;
};

function DropdownWrapper(props: props) {
  const [options] = useState<Array<optVal>>([
    { label: "BCA", value: "bca" },
    { label: "BRI", value: "bri" },
    { label: "Mandiri", value: "mandiri" },
    { label: "SeaBank", value: "seabank" },
    { label: "myBank", value: "myBank" },
  ]);
  const [activeBank, setActiveBank] = useState<optVal | undefined>({
    label: "",
    value: "",
  });

  return (
    <div>
      <button>trigger blur</button>

      <Dropdown
        type={props.isCombobox ? "combobox" : "dropdown"}
        options={options}
        placeholder="pilih bank"
        value={activeBank}
        onChange={(val: optVal | undefined) => {
          if (val) {
            setActiveBank(val);
          }
        }}
      />
    </div>
  );
}

describe("components - common - dropdown", () => {
  test("it should render properly", () => {
    render(<DropdownWrapper isCombobox={false} />);
    mockAllIsIntersecting(true);

    const target = screen.getByPlaceholderText("pilih bank");
    expect(target).toBeInTheDocument();
  });

  test("it should show right value", async () => {
    const user = userEvent.setup();
    render(<DropdownWrapper isCombobox={false} />);
    mockAllIsIntersecting(true);

    const target = screen.getByPlaceholderText("pilih bank");
    await user.click(target);
    const selectedOpt = screen.getByText("BCA");
    await user.click(selectedOpt);
    expect(screen.getByDisplayValue("BCA")).toBeInTheDocument();
  });

  it("should change combobox value if changed by input", async () => {
    const user = userEvent.setup();
    render(<DropdownWrapper isCombobox={true} />);
    mockAllIsIntersecting(true);

    const target = screen.getByPlaceholderText("pilih bank");
    await user.type(target, "testing input");
    expect(screen.queryByDisplayValue("testing input")).toBeInTheDocument();
  });

  it("should show suggestion when input exists in options", async () => {
    const user = userEvent.setup();
    render(<DropdownWrapper isCombobox={true} />);
    mockAllIsIntersecting(true);

    const target = screen.getByPlaceholderText("pilih bank");
    await user.type(target, "bc");
    expect(screen.queryByText("BCA")).toBeInTheDocument();
    expect(screen.queryByText("mandiri")).not.toBeInTheDocument();
  });

  it("should clear value selection", async () => {
    const user = userEvent.setup();
    render(<DropdownWrapper isCombobox={false} />);
    mockAllIsIntersecting(true);

    const target = screen.getByPlaceholderText("pilih bank");
    await user.click(target);
    expect(screen.queryByText("Clear Selection")).not.toBeInTheDocument();
    const selectedOpt = screen.getByText("BCA");
    await user.click(selectedOpt);
    expect(screen.getByDisplayValue("BCA")).toBeInTheDocument();

    await user.click(target);

    const clearSelection = screen.getByText("Clear Selection");
    await user.click(clearSelection);
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("pilih bank")).toBeInTheDocument();
  });
});
