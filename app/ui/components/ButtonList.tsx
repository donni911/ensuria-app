import { useRef } from "react";
import { StyledLinkBtn } from "@/app/styles/app";
import { motion, useInView } from "framer-motion";
import { fadeUpAnimation } from "@/app/styles/animations";

import React from "react";
import { styled } from "styled-components";
import Image from "next/image";

const StyledBtnGroup = styled(motion.div)`
  gap: max(0.278vw, 8px);
  display: flex;
  justify-content: center;
  max-width: 330px;
`;

const ButtonList = () => {
  const bodyAnimation = useRef(null);
  const isInView = useInView(bodyAnimation, { once: true, margin: "40%" });

  return (
    <StyledBtnGroup
      ref={bodyAnimation}
      variants={fadeUpAnimation(1.4)}
      initial="initial"
      animate={isInView ? "enter" : ""}
      className="opacity-0"
    >
      <StyledLinkBtn href="/">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/svg/apple-download.svg"
          alt="logo"
        ></Image>
      </StyledLinkBtn>
      <StyledLinkBtn href="/">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/images/google-play.webp"
          alt="logo"
        ></Image>
      </StyledLinkBtn>
    </StyledBtnGroup>
  );
};

export default ButtonList;
