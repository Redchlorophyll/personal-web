import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ProviderComponent, wrapProviders } from './providers';

interface ExtendedRenderOptions extends RenderOptions {
  provider?: ProviderComponent;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  { provider = wrapProviders(), ...renderOptions }: ExtendedRenderOptions = {}
): RenderResult => {
  // Return an object with all of RTL's query functions
  return {
    ...render(ui, { wrapper: provider, ...renderOptions }),
  };
};
