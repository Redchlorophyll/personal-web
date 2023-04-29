import React, { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from './index';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

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
  test('it should render properly', () => {
    render(<CheckboxWrapper />);
    const target = screen.getByRole('checkbox');
    expect(target).toBeInTheDocument();
  });

  test('it should show value when clicked', async () => {
    const user = userEvent.setup();
    render(<CheckboxWrapper />);
    const target = screen.getByRole('checkbox');
    expect(screen.queryByText('test')).not.toBeInTheDocument();

    await act(async () => await user.click(target));

    expect(screen.queryByText('test')).toBeInTheDocument();

    await act(async () => await user.click(target));
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });
});
