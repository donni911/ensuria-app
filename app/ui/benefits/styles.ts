import { motion } from "framer-motion";
import { styled } from "styled-components";

// Base Card
export const StyledBaseCard = styled.div<{ $bg?: string; $size?: string }>`
  border-radius: min(6px, 0.5vw);
  background: ${(props) => props.$bg || ""};
  height: 100%;
  position: relative;
`;

export const StyledBaseCardCorner = styled.div<{ position: string }>`
  position: absolute;
  ${(props) => {
    switch (props.position) {
      case "topLeft":
        return "top: -1px; left: -1px;";
      case "topRight":
        return "top: -1px; right: -1px; rotate: 90deg;";
      case "bottomLeft":
        return "bottom: -1px; left: -1px; rotate: -90deg;";
      case "bottomRight":
        return "bottom: -1px; right: -1px; rotate: 180deg";
      default:
        return "";
    }
  }}
`;

export const StyledBaseCardWrapper = styled.div<{ $size?: string }>`
  height: 100%;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 1.736vw;

  @media ${(props) => props.theme.media.laptop} {
    padding: 26px;
  }

  ${(props) => props.$size && `padding: 2.083vw 2.778vw; `}
`;

export const StyledBaseCardTitle = styled.h4`
  font-size: 3.264vw;
  font-weight: 500;
  line-height: 0.9;
  margin-bottom: 20px;

  @media ${(props) => props.theme.media.laptop} {
    font-size: 47px;
  }
`;

export const StyledBaseCardDescription = styled.p`
  font-size: 1.111vw;
  line-height: 1.2;

  @media ${(props) => props.theme.media.laptop} {
    font-size: 16px;
  }
`;
//

// Welcome Block
export const Wrapper = styled.div`
  max-width: 53.397vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -4.167vw;
  margin-bottom: 5.903vw;

  @media ${(props) => props.theme.media.laptop} {
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: 650px;
  }
`;

export const WelcomeLogo = styled(motion.div)`
  width: 7.986vw;
  height: 7.986vw;
  position: relative;
  margin-bottom: 2.222vw;
  opacity: 0.5;

  @media ${(props) => props.theme.media.laptop} {
    width: 68px;
    height: 68px;
    margin-bottom: 28px;
  }
`;

export const WelcomeTitle = styled(motion.h2)`
  overflow: hidden;
  font-size: 6.667vw;
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 2.361vw;
  text-align: center;

  @media ${(props) => props.theme.media.laptop} {
    font-size: 36px;
    margin-bottom: 28px;
  }
`;

export const WelcomeDescription = styled(motion.p)`
  font-size: 1.667vw;
  line-height: 1.3;
  margin-bottom: 3.75vw;
  text-align: center;

  color: ${(props) => props.theme.colors.gray};

  @media ${(props) => props.theme.media.laptop} {
    font-size: 16px;
    margin-bottom: 0;
    padding: 0 30px;
  }
`;
//

// GridBenefits
type StyledGridItemProps = {
  $bg?: string;
  $gridcolumn?: string;
  $gridrow?: string;
  $display?: boolean;
  $lg?: string;
  $bigCell?: boolean;
  $size?: string;
};

type StyledGridProps = {
  $cols?: number;
  $rows?: number;
};

export const StyledGrid = styled.div<StyledGridProps>`
    display: grid;
    grid-template-columns: 100%;
    row-gap: 8px;
  
    @media ${(props) => props.theme.media.laptopUp} {
      column-gap: 8px;
      grid-template-columns: repeat(${(props) => props.$cols}, minmax(0, 1fr));
      grid-template-rows: repeat(
        ${(props) => (props.$rows ? props.$rows : "2")},
        minmax(0, 1fr)
      );
    }
  `;

export const StyledGridItem = styled(motion.div) <StyledGridItemProps>`
   height: 12.014vw;
    background: ${(props) => props.$bg || ""};
    grid-column: ${(props) => props.$gridcolumn || "span 2 / span 2"};
    grid-row: ${(props) => props.$gridrow || "span 2 / span 2"};
  
    @media ${(props) => props.theme.media.laptop} {
     height: 175px;
      display: ${(props) => (props.$display ? "none !important" : "block")};
    }
  
    ${(props) =>
    props.$size === "lg" &&
    `
      width: 100%;
      min-height: 244px;
  `}
    ${(props) =>
    props.$bigCell &&
    `
    overflow: hidden;
    min-height: 500px;
  
  `}
  `;
//   