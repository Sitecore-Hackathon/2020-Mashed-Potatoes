import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import React from 'react';
import { Provider } from 'react-redux';

import makeStore, { AppStore } from '../store';

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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(CustomApp);
