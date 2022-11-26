import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/Navbar";

describe('component - navbar', () => {
  test('it should render properly', () => {
    render(<Navbar>navbar</Navbar>);

    const target = screen.getByText('navbar');

    expect(target).toBeInTheDocument();
  });

});