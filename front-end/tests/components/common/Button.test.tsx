import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Button from "@/components/common/Button/Index";
import { useState } from "react";

function ButtonWrapper() {
  const [status, setStatus] = useState<string>("empty");

  function handleOnClick() {
    setStatus("clicked");
  }

  return (
    <div>
      <p>{status}</p>
      <Button type={"solid"} variant={"warning"} onClick={handleOnClick}>
        Test
      </Button>
    </div>
  );
}

describe("Component - common - Button", () => {
  test("It should render properly", () => {
    render(<ButtonWrapper />);
    const target = screen.getByText("Test");

    expect(target).toBeInTheDocument();
  });

  test("It should be clicked successfully", () => {
    render(<ButtonWrapper />);
    const target = screen.getByRole("button");

    userEvent.click(target);
  });

  test("It should show status when clicked", () => {
    render(<ButtonWrapper />);
    const target = screen.getByRole("button");

    expect(screen.queryByText("empty")).toBeInTheDocument();
    fireEvent.click(target);
    expect(screen.queryByText("clicked")).toBeInTheDocument();
  });
});
