"use client";

import { PropsWithChildren } from "react";
import { theme, Global } from "./styles/theme";
import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider } from "styled-components";

const Providers = (props: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Global></Global>
      <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>
    </ThemeProvider>
  );
};

export default Providers;
