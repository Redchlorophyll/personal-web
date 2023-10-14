import { render } from '@testing-library/react';
import { Navbar } from './navbar';

describe('<Navbar />', () => {
  test('should render properly', () => {
    const { baseElement } = render(<Navbar>Navbar header</Navbar>);

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
