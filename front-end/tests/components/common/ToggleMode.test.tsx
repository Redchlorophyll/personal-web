import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ToggleMode from "@/components/common/ToggleMode/Index";
import { Provider } from "react-redux";
import { store } from "@/store";

describe("components - common - ToggleMode", () => {
  test("It should render properly", () => {
    render(
      <Provider store={store}>
        <ToggleMode />
      </Provider>
    );

    const toggleMode = screen.getByRole("checkbox", {
      name: "toggle-mode",
    });

    expect(toggleMode).toBeInTheDocument();
  });

  test("it should show dark mode icons when clicked", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <ToggleMode />
      </Provider>
    );

    const toggleMode = screen.getByRole("checkbox", {
      name: "toggle-mode",
    });

    await user.click(toggleMode);

    expect(screen.getByAltText("Dark mode icon")).toBeInTheDocument();
  });

  test("it should show light mode", () => {
    render(
      <Provider store={store}>
        <ToggleMode />
      </Provider>
    );

    const toggleMode = screen.getByRole("checkbox", {
      name: "toggle-mode",
    });

    fireEvent.click(toggleMode);

    expect(screen.getByAltText("Light mode icon")).toBeInTheDocument();
  });
});
