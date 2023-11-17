// User Icon

import { motion } from "framer-motion";
import { styled } from "styled-components";
import Compensation from "./Compensation";

export const StyledIcon = styled(motion.div) <{ $type: string }>`
  position: absolute;
  opacity: 0;
  ${(props) =>
        props.$type === "bigLeft" &&
        `
    width: 15.486vw;
    top: 8.903vw;
    left: 5.625vw;

    @media ${props.theme.media.laptop} {
        width: 100px;
        height: 100px;
        top: 20px;
        left: 17px;
      }

      span {
        font-size: 1.667vw;
        margin-left: 1.4vw;

        @media ${props.theme.media.laptop} {
          font-size: 10px;
          margin-left:7px;
        }
    }`}
  ${(props) =>
        props.$type === "bigRight" &&
        `
      width: 11.111vw;
      top: 15.889vw;
      right: 9.792vw;
  
      @media ${props.theme.media.laptop} {
        width: 113px;
        height: 113px;
        top: 65px;
        right: -20px;
        }
  
        span {
          font-size: 1.181vw;
          @media ${props.theme.media.laptop} {
            font-size: 12px;
          }
      }`}
  ${(props) =>
        props.$type === "smallLeft" &&
        `
      width: 6.736vw;
      top: 41.375vw;
      left: 26.875vw;
  
      @media ${props.theme.media.laptop} {
         display:none;
        }
  
        span {
          font-size: 0.796vw;
      }`}
  ${(props) =>
        props.$type === "smallRight" &&
        `
      width: 10vw;
      height: 10vw;
      bottom: 14vw;
      right: 27vw;
  
      @media ${props.theme.media.laptop} {
          display: none;
        }
        span {
          font-size: 1.389vw;
          margin-left: 0.8vw;
      }`}
`;

export const StyledIconImg = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;

export const StyledIconSvgWrapper = styled.div<{ $type: string; $fill: string }>`
  position: relative;

  ${(props) => props.$type === "bigLeft" && `left: 80%;`}
  ${(props) => props.$type === "bigRight" && `left: -80%;`}
  ${(props) => props.$type === "smallLeft" && `left: -80%;`}
  ${(props) => props.$type === "smallRight" && `left: 80%;`}
  
  svg {
    ${(props) => props.$type === "bigRight" && ` transform: rotateY(180deg);`}
    ${(props) => props.$type === "smallLeft" && ` transform: rotateY(180deg);`}

    path {
      fill: ${(props) => props.$fill};
    }
  }
`;

export const StyledIconSvgWrapperText = styled.span`
  text-align: center;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 46%;
  left: 46%;
  transform: translate(-50%, -60%);
  font-weight: 500;
  line-height: 1.2;
`;
// 

// Compensation

export const StyledCompensationSection = styled.section`
  padding-top: 13.056vw;
  padding-bottom: 23.194vw;
  box-sizing: border-box;
  position: relative;

  @media ${(props) => props.theme.media.laptop} {
    padding-top: 210px;
    padding-bottom: 110px;
    overflow: hidden;
  }
`;

export const StyledCompensationTitle = styled.h2`
  font-size: 6.667vw;
  line-height: 0.9;
  font-weight: 500;
  margin-bottom: 2.569vw;
  text-align: center;
  @media ${(props) => props.theme.media.laptop} {
    font-size: 36px;
    margin-bottom: 28px;
  }
`;

export const StyledCompensationDescription = styled.p`
  font-size: 1.667vw;
  line-height: 1.3;
  margin-bottom: 3.75vw;
  text-align: center;
  color: #7f7d84;

  @media ${(props) => props.theme.media.laptop} {
    font-size: 16px;
    margin-bottom: 35px;
  }
`;

export const StyledCompensationSubTitleWrapper = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 2.083vw;
  position: relative;
  z-index: 3;
  @media ${(props) => props.theme.media.laptop} {
    margin-bottom: 21px;
  }
`;

export const StyledCompensationImageWrap = styled.div`
  margin-right: 8px;
  position: relative;
  width: 2.778vw;
  height: 2.778vw;

  @media ${(props) => props.theme.media.laptop} {
    width: 34px;
    height: 34px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledCompensationSubTitle = styled.p`
  @media ${(props) => props.theme.media.laptop} {
    font-size: 16px;
  }

  line-height: 1.1;
  font-weight: 500;
  font-size: 1.25vw;
`;

export const StyledCompensationBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCompensationContent = styled.div`
  max-width: 46.597vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.media.laptop} {
    max-width: 100%;
    padding: 0 22px;
  }
`;
// 