import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { Checkbox } from './index';
import {
  renderWithProviders,
  screen,
  userEvent,
  act,
} from 'testing-library-react-custom';

function CheckboxWrapper() {
  const [valueCheckbox, setValueCheckbox] = useState<Array<string>>([]);

  function onChangeCheckbox(val: Array<string>) {
    setValueCheckbox(val);
  }

  return (
    <div>
      {valueCheckbox}
      <Checkbox
        valueList={valueCheckbox}
        onChange={(val: Array<string>) => onChangeCheckbox(val)}
        value={'test'}
      />
    </div>
  );
}

describe('shared - ui - checkbox', () => {
  test('should render properly', () => {
    const { baseElement } = renderWithProviders(<CheckboxWrapper />);

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  test('it should render properly', () => {
    renderWithProviders(<CheckboxWrapper />);
    const target = screen.getByRole('checkbox');
    expect(target).toBeInTheDocument();
  });

  test('it should show value when clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<CheckboxWrapper />);
    const target = screen.getByRole('checkbox');
    expect(screen.queryByText('test')).not.toBeInTheDocument();

    await act(async () => await user.click(target));

    expect(screen.queryByText('test')).toBeInTheDocument();

    await act(async () => await user.click(target));
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });
});
