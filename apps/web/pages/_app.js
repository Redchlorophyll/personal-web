import React, { useEffect } from 'react';
/* PLOP_INJECT_STYLING */
import 'web-ui/styles.css';
import 'shared-ui/styles.css';

import '@/assets/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from 'redux-setup-custom';
import { AuthContextProvider } from '@/context/Auth';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (
      localStorage.getItem('theme') === 'light' ||
      !localStorage.getItem('theme')
    ) {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <>
      <AuthContextProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthContextProvider>
    </>
  );
}
