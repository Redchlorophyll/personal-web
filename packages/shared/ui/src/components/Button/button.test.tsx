import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Button } from "./index";
import { useState } from "react";
import { act } from "react-dom/test-utils";

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

describe("shared - ui - Button", () => {
  test("It should render properly", () => {
    render(<ButtonWrapper />);
    const target = screen.getByText("Test");

    expect(target).toBeInTheDocument();
  });

  test("It should show status when clicked", async () => {
    const user = userEvent.setup();
    render(<ButtonWrapper />);
    const target = screen.getByRole("button");

    expect(screen.queryByText("empty")).toBeInTheDocument();

    await act(async () => await user.click(target))

    expect(screen.queryByText("clicked")).toBeInTheDocument();
  });
});
