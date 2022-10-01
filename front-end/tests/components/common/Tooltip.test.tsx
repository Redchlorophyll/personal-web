import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tooltip from "@/components/common/Tooltip/Index";
import userEvent from "@testing-library/user-event";

describe("components - common - tooltip", () => {
  test("it should render properly", () => {
    render(
      <Tooltip tooltipContent={"this is tooltip"}>Click me Please!</Tooltip>
    );
    const target = screen.getByText("Click me Please!");

    expect(target).toBeInTheDocument();
  });

  test("it should show tooltip content when being hovered", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip tooltipContent={"this is tooltip"}>Click me Please!</Tooltip>
    );
    const target = screen.getByText("Click me Please!");
    await user.hover(target);
    const tooltipContent = screen.getByText("this is tooltip");

    expect(tooltipContent).toBeInTheDocument();
  });
});
