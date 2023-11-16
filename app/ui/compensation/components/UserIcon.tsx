// MENTOR QUESTION
// Тут я реалізовую вивід іконки Юзера з надписом суми. Я це релізував через стилі і пропси.
// Але думав що краще зробити 4 окремих компоненти і згідно type виводити певний?

import { IconType } from "@/app/lib/data";
import { styled } from "styled-components";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeAnimation } from "@/app/styles/animations";

const StyledIcon = styled(motion.div)<{ $type: string }>`
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
        @media ${props.theme.media.laptop} {
          font-size: 10px;
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
          display:none;
        }
        span {
          font-size: 1.389vw;
      }`}
`;

const StyledIconImg = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;

const StyledIconSvgWrapper = styled.div<{ $type: string; $fill: string }>`
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

const StyledIconSvgWrapperText = styled.span`
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

const UserIcon = (props: { data: IconType }) => {
  const el = useRef(null);
  const isInView = useInView(el, { once: true, margin: "-20%" });

  return (
    <StyledIcon
      ref={el}
      $type={props.data.type}
      variants={fadeAnimation()}
      initial="initial"
      animate={isInView ? "enter" : ""}
    >
      <StyledIconSvgWrapper $type={props.data.type} $fill={props.data.color}>
        <StyledIconSvgWrapperText>{props.data.sum}</StyledIconSvgWrapperText>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 223 79"
          id="compensation-bg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 4a4 4 0 014-4h197a4 4 0 014 4v57a4 4 0 01-4 4H45.13a4 4 0 01-2.829-1.172l-23.13-23.13A4 4 0 0118 37.87V4z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.533 45.467a.274.274 0 11.387-.387.274.274 0 01-.387.387zm-7.085 26.705c2.52 2.52.736 6.828-2.828 6.828H4a4 4 0 01-4-4V55.38c0-3.564 4.309-5.348 6.828-2.829l19.62 19.62z"
          />
        </svg>
      </StyledIconSvgWrapper>
      <StyledIconImg>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={`/images/${props.data.image.src}`}
          alt={`${props.data.image.alt}`}
        ></Image>
      </StyledIconImg>
    </StyledIcon>
  );
};

export default UserIcon;
