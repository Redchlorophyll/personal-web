import { ToggleMode } from './toggle-mode';
import {
  act,
  screen,
  renderWithProviders,
  reduxProvider,
  userEvent,
} from 'testing-library-react-custom';

describe('shared - ui - toggle-mode', () => {
  test('should render properly', () => {
    const { baseElement } = renderWithProviders(<ToggleMode />, {
      provider: reduxProvider({
        preloadedState: {
          theme: {
            theme: 'light',
          },
        },
      }),
    });

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  test('should show light mode', async () => {
    renderWithProviders(<ToggleMode />, {
      provider: reduxProvider({
        preloadedState: {
          theme: {
            theme: 'light',
          },
        },
      }),
    });

    expect(screen.getByTestId('light-mode-icon')).toBeVisible();
  });

  test('should show dark mode icons when clicked', async () => {
    const user = userEvent;
    renderWithProviders(<ToggleMode />, {
      provider: reduxProvider({
        preloadedState: {
          theme: {
            theme: 'light',
          },
        },
      }),
    });

    const toggleMode = screen.getByRole('checkbox', {
      name: 'toggle-mode',
    });

    await act(async () => {
      await user.click(toggleMode);
    });

    expect(screen.getByTestId('dark-mode-icon')).toBeVisible();
  });
});
