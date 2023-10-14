import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { Radio } from './index';
import {
  renderWithProviders,
  screen,
  userEvent,
  act,
} from 'testing-library-react-custom';

function RadioWrapper() {
  const [radio, setRadio] = useState<string>('');

  function onChangeCheckbox(val: string) {
    setRadio(val);
  }

  return (
    <div>
      {radio}
      <Radio
        valueGroup={radio}
        onChange={(val: string) => onChangeCheckbox(val)}
        value={'test'}
      />
    </div>
  );
}

describe('shared - ui - radio', () => {
  test('should render properly', () => {
    const { baseElement } = renderWithProviders(<RadioWrapper />);

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  test('it should render properly', () => {
    renderWithProviders(<RadioWrapper />);
    const target = screen.getByRole('radio');
    expect(target).toBeInTheDocument();
  });

  test('it should be checked when clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<RadioWrapper />);
    const target = screen.getByRole('radio');
    expect(screen.queryByText('test')).not.toBeInTheDocument();

    await act(async () => await user.click(target));
    expect(screen.queryByText('test')).toBeInTheDocument();

    await act(async () => await user.click(target));
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });
});
