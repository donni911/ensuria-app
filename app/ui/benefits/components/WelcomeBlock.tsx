import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import styled from "styled-components";
import { titleData } from "@/app/lib/data";
import Image from "next/image";
import { useRef } from "react";
import {
  fadeAnimation,
  fadeInAnimation,
  fadeUpAnimation,
} from "@/app/styles/animations";

const Wrapper = styled.div`
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

const WelcomeLogo = styled(motion.div)`
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

const WelcomeTitle = styled(motion.h2)`
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

const WelcomeDescription = styled(motion.p)`
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

const WelcomeBlock = () => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true });

  return (
    <Wrapper ref={wrapper}>
      <WelcomeLogo
        variants={fadeInAnimation(0.75)}
        initial="initial"
        animate={isInView ? "enter" : ""}
      >
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src="/images/ensuria-logo.webp"
          alt="logo"
        ></Image>
      </WelcomeLogo>
      <motion.div
        className="opacity-0"
        variants={fadeAnimation(1.4)}
        initial="initial"
        animate={isInView ? "enter" : ""}
      >
        <WelcomeTitle>{titleData.title}</WelcomeTitle>
        <WelcomeDescription>{titleData.description}</WelcomeDescription>
      </motion.div>
    </Wrapper>
  );
};

export default WelcomeBlock;
