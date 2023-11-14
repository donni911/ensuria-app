import styled from "styled-components";
import { titleData } from "@/app/lib/data";
import Image from "next/image";

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

const WelcomeLogo = styled.div`
  width: 7.986vw;
  height: 7.986vw;
  position: relative;
  margin-bottom: 2.222vw;

  @media ${(props) => props.theme.media.laptop} {
    width: 68px;
    height: 68px;
    margin-bottom: 28px;
  }
`;

const WelcomeTitle = styled.h2`
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

const WelcomeDescription = styled.p`
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
  return (
    <Wrapper>
      <WelcomeLogo>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src="/images/ensuria-logo.webp"
          alt="logo"
        ></Image>
      </WelcomeLogo>
      <WelcomeTitle>{titleData.title}</WelcomeTitle>
      <WelcomeDescription>{titleData.description}</WelcomeDescription>
    </Wrapper>
  );
};

export default WelcomeBlock;
