import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { Snackbar } from './index';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import {
  renderWithProviders,
  screen,
  userEvent,
  waitFor,
  act,
} from 'testing-library-react-custom';

type propType = {
  isTimer: boolean;
};

function SnackbarWrapper(props: propType) {
  const [isShown, setIsShown] = useState<boolean>(true);
  function onClose(val: boolean) {
    setIsShown(val);
  }
  if (props.isTimer) {
    return (
      <Snackbar
        variant="error"
        isShown={isShown}
        timer={2000}
        onClose={onClose}
      >
        This is Snackbar Error Message!
      </Snackbar>
    );
  } else {
    return (
      <Snackbar variant="error" isShown={isShown} onClose={onClose}>
        This is Snackbar Error Message!
      </Snackbar>
    );
  }
}

describe('shared - ui - Snakbar', () => {
  test('it should not rendered', () => {
    renderWithProviders(
      <div>
        <Snackbar variant="error">This is Snackbar Error Message!</Snackbar>
      </div>
    );

    const target = screen.queryAllByText('This is Snackbar Error Message!');
    expect(target.length).toBe(0);
  });

  test('it should render properly', () => {
    renderWithProviders(
      <Snackbar variant="error" isShown={true}>
        This is Snackbar Error Message!
      </Snackbar>
    );
    mockAllIsIntersecting(true);

    const target = screen.getByText('This is Snackbar Error Message!');
    expect(target).toBeInTheDocument();
  });

  it('should not show close icon when timer props defined', () => {
    renderWithProviders(
      <Snackbar variant="error" isShown={true} timer={5000}>
        This is Snackbar Error Message!
      </Snackbar>
    );
    mockAllIsIntersecting(true);

    let iconTarget = screen.queryByAltText('close icon');
    expect(iconTarget).not.toBeInTheDocument();
  });

  it('should disappear when timer is ended', async () => {
    await act(async () => {
      renderWithProviders(<SnackbarWrapper isTimer />);
      mockAllIsIntersecting(true);

      waitFor(() => {
        let target = screen.queryByText('This is Snackbar Error Message!');
        expect(target).toBeInTheDocument();

        target = screen.queryByText('This is Snackbar Error Message!');
        expect(target).not.toBeInTheDocument();
      });
    });
  });
  it('should disappear when close is clicked', async () => {
    await act(async () => {
      const user = userEvent.setup();
      renderWithProviders(<SnackbarWrapper isTimer={false} />);
      mockAllIsIntersecting(true);
      let target;

      waitFor(async () => {
        target = screen.queryByText('This is Snackbar Error Message!');
        const btn = screen.getByTestId('close-snackbar');
        expect(target).toBeInTheDocument();

        await user.click(btn);
      });

      waitFor(() => {
        target = screen.queryByText('This is Snackbar Error Message!');
        expect(target).not.toBeInTheDocument();
      });
    });
  });
});
