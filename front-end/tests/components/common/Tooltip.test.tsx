import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tooltip from "@/components/common/Tooltip/Index";
import userEvent from "@testing-library/user-event";

describe("components - common - tooltip", () => {
  beforeEach(() => {
    render(
      <Tooltip tooltipContent={"this is tooltip"}>Click me Please!</Tooltip>
    );
  });

  test("it should render properly", () => {
    const target = screen.getByText("Click me Please!");

    expect(target).toBeInTheDocument();
  });

  test("it should show tooltip content when being hovered", async () => {
    const target = screen.getByText("Click me Please!");
    await userEvent.hover(target);
    const tooltipContent = screen.getByText("this is tooltip");

    expect(tooltipContent).toBeInTheDocument();
  });
});
