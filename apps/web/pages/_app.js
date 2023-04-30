import React, { useEffect } from 'react';
import '@/assets/styles/globals.css';
import 'shared-ui/styles.css';
import { store } from '@/store';
import { Provider } from 'react-redux';
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
