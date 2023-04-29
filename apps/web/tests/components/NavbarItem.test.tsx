import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import NavbarItem from '@/components/Navbar/NavbarItem';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const push = jest.fn();

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('component - Navbar - NavbarItem', () => {
  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '/',
    push,
  }));

  test('it should render properly', () => {
    render(<NavbarItem>Home</NavbarItem>);

    const target = screen.getByText('Home');

    expect(target).toBeInTheDocument();
  });

  test('it should be able to click"', async () => {
    const user = userEvent.setup();
    render(<NavbarItem href="/about">about</NavbarItem>);

    const target = screen.getByRole('checkbox');

    await user.click(target);
    expect(push).toHaveBeenCalledWith('/about');
  });

  test('it should not push to other page if it has same page"', async () => {
    const user = userEvent.setup();
    render(<NavbarItem href="/">about</NavbarItem>);

    const target = screen.getByRole('checkbox');

    await user.click(target);
    expect(push).not.toHaveBeenCalledWith('/');
  });

  test('it should show WIP flag', () => {
    render(
      <NavbarItem href="/about" wip>
        about
      </NavbarItem>
    );
    const target = screen.getByText('WIP');
    expect(target).toBeInTheDocument();
  });
});
