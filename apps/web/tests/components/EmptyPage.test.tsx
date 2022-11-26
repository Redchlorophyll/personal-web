import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmptyPage from "@/components/EmptyPage";

describe('component - navbar', () => {
  test('it should render properly', () => {
    render(<EmptyPage />);

    const target = screen.getByText('OOPS! Page Not Found');

    expect(target).toBeInTheDocument();
  });

});