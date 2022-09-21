import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Button from "@/components/common/Button/Index";

describe("Component - common - Button", () => {
  beforeEach(() => {
    render(<Button type={"solid"} variant={"warning"} />);
  });

  test("It should render properly", () => {
    const target = screen.getByText("warning");

    expect(target).toBeInTheDocument();
  });

  test("It should be clicked successfully", () => {
    const target = screen.getByText("warning");

    userEvent.click(target);
  });
});
