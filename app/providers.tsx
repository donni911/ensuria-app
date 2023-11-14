"use client";
import { PropsWithChildren } from "react";
import { theme } from "./styles/theme";
import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    color:#2C2A2D;
  }
`;

const Providers = (props: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Global></Global>
      <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>
    </ThemeProvider>
  );
};

export default Providers;
