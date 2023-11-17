import { motion, useInView } from "framer-motion";

import Image from "next/image";
import { useRef } from "react";
import { fadeAnimation, fadeInAnimation } from "@/app/styles/animations";
import {
  WelcomeDescription,
  WelcomeLogo,
  WelcomeTitle,
  Wrapper,
} from "../styles";
import { useGetBlockInfoQuery } from "@/app/store/api";

const WelcomeBlock = () => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true });
  const { data, isFetching } = useGetBlockInfoQuery();

  return (
    <Wrapper ref={wrapper}>
      {!isFetching && data && (
        <>
          <WelcomeLogo
            className="opacity-0"
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
            <WelcomeTitle>{data.title}</WelcomeTitle>
            <WelcomeDescription>{data.description}</WelcomeDescription>
          </motion.div>
        </>
      )}
    </Wrapper>
  );
};

export default WelcomeBlock;
