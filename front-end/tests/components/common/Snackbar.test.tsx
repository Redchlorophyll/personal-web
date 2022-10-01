import React, { useState } from "react";
import {
  render,
  act,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Snackbar from "@/components/common/Snackbar/Index";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

type propType = {
  isTimer: boolean;
};

function SnackbarWrapper(props: propType) {
  const [isShown, setIsShown] = useState<boolean>(true);
  function onClose(val: boolean) {
    setIsShown(val);
  }
  if (props.isTimer) {
    return (
      <Snackbar
        variant="error"
        isShown={isShown}
        timer={2000}
        onClose={onClose}
      >
        This is Snackbar Error Message!
      </Snackbar>
    );
  } else {
    return (
      <Snackbar variant="error" isShown={isShown} onClose={onClose}>
        This is Snackbar Error Message!
      </Snackbar>
    );
  }
}

describe("components - common - Snakbar", () => {
  test("it should not rendered", () => {
    render(
      <div>
        <Snackbar variant="error">This is Snackbar Error Message!</Snackbar>
      </div>
    );

    const target = screen.queryAllByText("This is Snackbar Error Message!");
    expect(target.length).toBe(0);
  });

  test("it should render properly", () => {
    render(
      <Snackbar variant="error" isShown={true}>
        This is Snackbar Error Message!
      </Snackbar>
    );
    mockAllIsIntersecting(true);

    const target = screen.getByText("This is Snackbar Error Message!");
    expect(target).toBeInTheDocument();
  });

  test("it should show correct variant", () => {
    const { rerender } = render(
      <Snackbar variant="error" isShown={true}>
        This is Snackbar Error Message!
      </Snackbar>
    );
    mockAllIsIntersecting(true);

    let iconTarget = screen.getByAltText("error icon");
    expect(iconTarget).toBeInTheDocument();

    rerender(
      <Snackbar variant="info" isShown={true}>
        This is Snackbar Error Message!
      </Snackbar>
    );

    iconTarget = screen.getByAltText("info icon");
    expect(iconTarget).toBeInTheDocument();

    rerender(
      <Snackbar variant="success" isShown={true}>
        This is Snackbar Error Message!
      </Snackbar>
    );

    iconTarget = screen.getByAltText("success icon");
    expect(iconTarget).toBeInTheDocument();

    rerender(
      <Snackbar variant="warning" isShown={true}>
        This is Snackbar Error Message!
      </Snackbar>
    );

    iconTarget = screen.getByAltText("warning icon");
    expect(iconTarget).toBeInTheDocument();
  });
  it("should show close icon when timer props is not defined", () => {
    render(
      <Snackbar variant="error" isShown={true}>
        This is Snackbar Error Message!
      </Snackbar>
    );
    mockAllIsIntersecting(true);

    let iconTarget = screen.getByAltText("close icon");
    expect(iconTarget).toBeInTheDocument();
  });
  it("should not show close icon when timer props defined", () => {
    render(
      <Snackbar variant="error" isShown={true} timer={5000}>
        This is Snackbar Error Message!
      </Snackbar>
    );
    mockAllIsIntersecting(true);

    let iconTarget = screen.queryByAltText("close icon");
    expect(iconTarget).not.toBeInTheDocument();
  });
  it("should disappear when timer is ended", async () => {
    await act(async () => {
      render(<SnackbarWrapper isTimer />);
      mockAllIsIntersecting(true);

      let target = screen.queryByText("This is Snackbar Error Message!");
      expect(target).toBeInTheDocument();

      await new Promise((r) => setTimeout(r, 3000));
      target = screen.queryByText("This is Snackbar Error Message!");
      expect(target).not.toBeInTheDocument();
    });
  });
  it("should disappear when close is clicked", async () => {
    await act(async () => {
      render(<SnackbarWrapper isTimer={false} />);
      mockAllIsIntersecting(true);

      let target = screen.queryByText("This is Snackbar Error Message!");
      const btn = screen.getByTestId("close-snackbar");
      expect(target).toBeInTheDocument();

      fireEvent.click(btn);
      await waitFor(() => {
        target = screen.queryByText("This is Snackbar Error Message!");
        expect(target).not.toBeInTheDocument();
      });
    });
  });
});