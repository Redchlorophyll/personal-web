import React, { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
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
        setValue={(val: optVal | undefined) => {
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
    render(<DropdownWrapper isCombobox={false} />);
    mockAllIsIntersecting(true);

    const target = screen.getByPlaceholderText("pilih bank");
    userEvent.click(target);
    await waitFor(() => {
      const selectedOpt = screen.queryByText("BCA");
      if (selectedOpt) userEvent.click(selectedOpt);
      expect(screen.getByDisplayValue("BCA")).toBeInTheDocument();
    });
  });

  it("should change combobox value if changed by input", async () => {
    render(<DropdownWrapper isCombobox={true} />);
    mockAllIsIntersecting(true);

    const target = screen.getByPlaceholderText("pilih bank");
    userEvent.type(target, "testing input");
    await waitFor(() =>
      expect(screen.queryByDisplayValue("testing input")).toBeInTheDocument()
    );
  });

  it("should show suggestion when input exists in options", async () => {
    render(<DropdownWrapper isCombobox={true} />);
    mockAllIsIntersecting(true);

    const target = screen.getByPlaceholderText("pilih bank");
    userEvent.type(target, "bc");
    await waitFor(() => {
      userEvent.click(target);
      expect(screen.queryByText("BCA")).toBeInTheDocument();
      expect(screen.queryByText("mandiri")).not.toBeInTheDocument();
    });
  });

  it("should clear value selection", async () => {
    render(<DropdownWrapper isCombobox={false} />);
    mockAllIsIntersecting(true);

    const target = screen.getByPlaceholderText("pilih bank");
    userEvent.click(target);
    expect(screen.queryByText("Clear Selection")).not.toBeInTheDocument();
    let selectedOpt: HTMLElement | null;
    await waitFor(() => {
      selectedOpt = screen.queryByText("BCA");
      if (selectedOpt) userEvent.click(selectedOpt);
      expect(screen.getByDisplayValue("BCA")).toBeInTheDocument();
    });

    userEvent.click(target);

    await waitFor(() => {
      const clearSelection = screen.queryByText("Clear Selection");
      if (clearSelection) userEvent.click(clearSelection);
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("pilih bank")).toBeInTheDocument();
    });
  });
});
