import App, { AppContext, AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { setAppElement } from "react-modal";
import configureStore from "../src/config/store";
import "./styles/globals.scss";

const store = configureStore();

setAppElement("#__next");

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.getStaticProps = async (appContext: AppContext) => {
  // const { ctx } = appContext;
  const appProps = await App.getInitialProps(appContext);
  const isServer = typeof window === "undefined";

  return {
    ...appProps,
    // path: ctx.asPath,
    isServer,
  };
};

export default MyApp;

export type pageProps = {
  isServer: boolean;
  // path: string;
  statusCode?: number;
};
