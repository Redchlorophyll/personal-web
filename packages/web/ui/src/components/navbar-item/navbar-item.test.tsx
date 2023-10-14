import { render, screen } from '@testing-library/react';
import { NavbarItem } from './navbar-item';
import userEvent from '@testing-library/user-event';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const push = jest.fn();

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('<NavbarItem />', () => {
  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '/',
    push,
  }));

  test('should render properly', () => {
    const { baseElement } = render(
      <NavbarItem wip href="/">
        Home
      </NavbarItem>
    );

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
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
});
