import { Provider } from 'react-redux';
import { PreloadedState } from '@reduxjs/toolkit';
import { AppStore, RootState, setupStore } from 'redux-setup-custom';
import { PropsWithChildren } from 'react';

export type ProviderComponent = ({
  children,
}: PropsWithChildren<{}>) => JSX.Element;

interface ReduxProviderProps {
  store?: AppStore;
  preloadedState?: PreloadedState<RootState>;
}

export const reduxProvider = ({
  preloadedState = {},
  store = setupStore(preloadedState),
}: ReduxProviderProps): ProviderComponent => {
  // eslint-disable-next-line react/display-name
  return ({ children }: PropsWithChildren<{}>): JSX.Element => (
    <Provider store={store}>{children}</Provider>
  );
};

export const wrapProviders = (
  ...wrappers: ProviderComponent[]
): ProviderComponent => {
  return ({ children }) =>
    wrappers
      .reverse()
      .reduce((prev, curr) => curr({ children: prev }), <>{children}</>);
};
