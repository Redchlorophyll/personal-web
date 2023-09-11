import { Button } from './index';
import { useState } from 'react';
import {
  renderWithProviders,
  screen,
  userEvent,
  act,
} from 'testing-library-react-custom';

function ButtonWrapper() {
  const [status, setStatus] = useState<string>('empty');

  function handleOnClick() {
    setStatus('clicked');
  }

  return (
    <div>
      <p>{status}</p>
      <Button type={'solid'} variant={'warning'} onClick={handleOnClick}>
        Test
      </Button>
    </div>
  );
}

describe('shared - ui - Button', () => {
  test('should render properly', () => {
    const { baseElement } = renderWithProviders(<ButtonWrapper />);

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  test('It should render properly', () => {
    renderWithProviders(<ButtonWrapper />);
    const target = screen.getByText('Test');

    expect(target).toBeInTheDocument();
  });

  test('It should show status when clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<ButtonWrapper />);
    const target = screen.getByRole('button');

    expect(screen.queryByText('empty')).toBeInTheDocument();

    await act(async () => await user.click(target));

    expect(screen.queryByText('clicked')).toBeInTheDocument();
  });
});
