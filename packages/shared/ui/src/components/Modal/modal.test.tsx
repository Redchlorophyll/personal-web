import React from 'react';
import '@testing-library/jest-dom';
import { Modal } from './index';

import { renderWithProviders, screen } from 'testing-library-react-custom';

describe('shared - ui - Modal', () => {
  test('should render properly', () => {
    const { baseElement } = renderWithProviders(
      <Modal title="this is modal title">this is modal content</Modal>
    );

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  test('it should render properly', () => {
    renderWithProviders(
      <Modal title="this is modal title">this is modal content</Modal>
    );
    const target = screen.getByText('this is modal title');
    expect(target).toBeInTheDocument();
  });
});
