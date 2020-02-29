import App from 'next/app';
import withRedux from 'next-redux-wrapper';

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { SitecoreContext } from '@sitecore-jss/sitecore-jss-react';

import makeStore, { AppStore } from '../store';
import theme from '../theme';
import componentFactory from '../sitecore/renderings';
import contextFactory from '../sitecore/context';
import { LayoutServiceData } from '../sitecore/models';

import 'normalize.css/normalize.css';

interface AppProps {
  store: AppStore;
}

class CustomApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : undefined),
      },
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    if (!pageProps) {
      return <h1>404</h1>;
    }

    contextFactory.setSitecoreContext((pageProps as LayoutServiceData).sitecore.context);
    return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <SitecoreContext componentFactory={componentFactory} contextFactory={contextFactory}>
              <Component {...pageProps} />
            </SitecoreContext>
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

export default withRedux(makeStore)(CustomApp);
