
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeAnimation } from "@/app/styles/animations";
import {
  StyledIcon,
  StyledIconSvgWrapper,
  StyledIconSvgWrapperText,
  StyledIconImg,
} from "../styles";
import { IconType } from "@/app/lib/icons/types";

const UserIcon = (props: { data: IconType }) => {
  const el = useRef(null);
  const isInView = useInView(el, { once: true, margin: "-15%" });

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
