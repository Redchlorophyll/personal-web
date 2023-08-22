import { render, screen, fireEvent } from '@testing-library/react';
import { ToggleMode } from './toggle-mode';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from 'shared-core';

describe('<ToggleMode />', () => {
  test('should render properly', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <ToggleMode />
      </Provider>
    );

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  test('it should show dark mode icons when clicked', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <ToggleMode />
      </Provider>
    );

    const toggleMode = screen.getByRole('checkbox', {
      name: 'toggle-mode',
    });

    await user.click(toggleMode);

    expect(screen.getByAltText('Dark mode icon')).toBeInTheDocument();
  });

  test('it should show light mode', () => {
    render(
      <Provider store={store}>
        <ToggleMode />
      </Provider>
    );

    const toggleMode = screen.getByRole('checkbox', {
      name: 'toggle-mode',
    });

    fireEvent.click(toggleMode);

    expect(screen.getByAltText('Light mode icon')).toBeInTheDocument();
  });
});
