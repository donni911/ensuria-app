import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    gray: '#7F7D84',
  },

  media: {
    laptop: "(max-width:991px)",
    laptopUp: "(min-width:991px)",
  },
};

export const Global = createGlobalStyle`
  * {
    color: #2C2A2D;
  }
`;