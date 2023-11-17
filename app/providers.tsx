"use client";

import { PropsWithChildren } from "react";
import { theme, Global } from "./styles/theme";
import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider } from "styled-components";
import { store } from "./store/index";
import { Provider } from "react-redux";

const Providers = (props: PropsWithChildren) => {
  return (
    // <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global></Global>
        <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>
      </ThemeProvider>
    // </Provider>
  );
};

export default Providers;
