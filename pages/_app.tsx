import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { setAppElement } from "react-modal";
import configureStore from "../src/config/store";
import "./styles/globals.scss";

const store = configureStore();

setAppElement("#__next");

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;

export type AppProp = {};
