import React from 'react';

import '@testing-library/jest-dom';
import { Tooltip } from './index';

import {
  screen,
  renderWithProviders,
  userEvent,
} from 'testing-library-react-custom';

describe('shared - ui - tooltip', () => {
  test('should render properly', () => {
    const { baseElement } = renderWithProviders(
      <Tooltip tooltipContent={'this is tooltip'}>Click me Please!</Tooltip>
    );

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
  test('it should render properly', () => {
    renderWithProviders(
      <Tooltip tooltipContent={'this is tooltip'}>Click me Please!</Tooltip>
    );
    const target = screen.getByText('Click me Please!');

    expect(target).toBeInTheDocument();
  });

  test('it should show tooltip content when being hovered', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <Tooltip tooltipContent={'this is tooltip'}>Click me Please!</Tooltip>
    );
    const target = screen.getByText('Click me Please!');
    await user.hover(target);
    const tooltipContent = screen.getByText('this is tooltip');

    expect(tooltipContent).toBeInTheDocument();
  });
});
