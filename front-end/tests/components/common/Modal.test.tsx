import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "@/components/common/Modal/Index";

describe("components - common - Modal", () => {
  test("it should render properly", () => {
    render(<Modal title="this is modal title">this is modal content</Modal>);
    const target = screen.getByText("this is modal title");
    expect(target).toBeInTheDocument();
  });
});
