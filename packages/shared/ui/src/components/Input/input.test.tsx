import { useState } from 'react';
import { Input } from './index';
import {
  renderWithProviders,
  screen,
  userEvent,
  act,
} from 'testing-library-react-custom';

function InputWrapper(props: { isDisabled?: boolean }) {
  const [value, setValue] = useState<string>('');

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Input value={value} onChange={onChange} isDisabled={props.isDisabled} />
    </div>
  );
}

describe('shared - ui - Input', () => {
  test('should render properly', () => {
    const { baseElement } = renderWithProviders(<InputWrapper />);

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  test('It should render properly', () => {
    renderWithProviders(<InputWrapper />);
    const target = screen.getByLabelText('input');

    expect(target).toBeInTheDocument();
  });

  test('It should show right input when inputing value', async () => {
    const user = userEvent.setup();
    renderWithProviders(<InputWrapper />);
    const target = screen.getByLabelText('input');

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    await act(async () => await user.type(target, 'test'));
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });

  test('It should not allow text input when disabled', async () => {
    const user = userEvent.setup();
    renderWithProviders(<InputWrapper isDisabled={true} />);
    const target = screen.getByLabelText('input');

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    await act(async () => await user.type(target, 'test'));
    expect(screen.queryByDisplayValue('test')).not.toBeInTheDocument();
  });
});
