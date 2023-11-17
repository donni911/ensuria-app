"use client";

import { StyledWrapper } from "@/app/styles/app";
import Image from "next/image";
import { IconType, icons } from "@/app/lib/data";
import UserIcon from "./components/UserIcon";

import ButtonList from "../components/ButtonList";
import {
  StyledCompensationSection,
  StyledCompensationBlock,
  StyledCompensationContent,
  StyledCompensationSubTitleWrapper,
  StyledCompensationImageWrap,
  StyledCompensationSubTitle,
  StyledCompensationTitle,
  StyledCompensationDescription,
} from "./styles";
import { useGetIconsQuery } from "@/app/store/api";

const Compensation = () => {
  const { data: icons } = useGetIconsQuery();

  return (
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
            <ButtonList />
          </StyledCompensationContent>
        </StyledCompensationBlock>
      </StyledWrapper>
      {icons &&
        icons.map((icon: IconType) => <UserIcon data={icon} key={icon.id} />)}
    </StyledCompensationSection>
  );
};

export default Compensation;
