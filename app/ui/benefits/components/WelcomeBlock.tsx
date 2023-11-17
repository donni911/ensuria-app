import { motion, useInView } from "framer-motion";

import { titleData } from "@/app/lib/data";
import Image from "next/image";
import { useRef } from "react";
import { fadeAnimation, fadeInAnimation } from "@/app/styles/animations";
import { WelcomeDescription, WelcomeLogo, WelcomeTitle, Wrapper } from "../styles";

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
