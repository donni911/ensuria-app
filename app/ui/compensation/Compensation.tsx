"use client";
import { styled } from "styled-components";
import { StyledLinkBtn, StyledWrapper } from "@/app/styles/app";
import Image from "next/image";
import { IconType, icons } from "@/app/lib/data";
import UserIcon from "./components/UserIcon";

const StyledCompensationSection = styled.section`
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

const StyledCompensationTitle = styled.h2`
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

const StyledCompensationDescription = styled.p`
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

const StyledCompensationSubTitleWrapper = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 2.083vw;
  position: relative;
  z-index: 3;
  @media ${(props) => props.theme.media.laptop} {
    margin-bottom: 21px;
  }
`;

const StyledCompensationImageWrap = styled.div`
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

const StyledCompensationSubTitle = styled.p`
  @media ${(props) => props.theme.media.laptop} {
    font-size: 16px;
  }

  line-height: 1.1;
  font-weight: 500;
  font-size: 1.25vw;
`;

const StyledCompensationBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCompensationContent = styled.div`
  max-width: 46.597vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.media.laptop} {
    max-width: 100%;
    padding: 0 22px;
  }
`;

const StyledBtnGroup = styled.div`
  gap: max(0.278vw, 8px);
  display: flex;
  justify-content: center;
  max-width: 330px;
`;

const Compensation = () => (
  <StyledCompensationSection>
    <StyledWrapper>
      <StyledCompensationBlock>
        <StyledCompensationContent>
          <StyledCompensationSubTitleWrapper>
            <StyledCompensationImageWrap>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src="/images/ensuria-logo.webp"
                alt="logo"
              ></Image>
            </StyledCompensationImageWrap>
            <StyledCompensationSubTitle>
              Лише у застосунку Ensuria
            </StyledCompensationSubTitle>
          </StyledCompensationSubTitleWrapper>
          <StyledCompensationTitle>
            Компенсація на раз-два
          </StyledCompensationTitle>
          <StyledCompensationDescription>
            Якщо подати заявку на страхове відшкодування в Ensuria й замовити
            доставлення піци одночасно, то гроші прийдуть на твій рахунок
            раніше, ніж курʼєр.
          </StyledCompensationDescription>
          <StyledBtnGroup>
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
        </StyledCompensationContent>
      </StyledCompensationBlock>
    </StyledWrapper>
    {icons &&
      icons.map((icon: IconType) => <UserIcon key={icon.id} data={icon} />)}
  </StyledCompensationSection>
);

export default Compensation;
