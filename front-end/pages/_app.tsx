import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';

import makeStore, { AppStore } from '../store';
import theme from '../theme';

import 'normalize.css/normalize.css';

interface AppProps {
  store: AppStore;
}

class CustomApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

export default withRedux(makeStore)(CustomApp);
