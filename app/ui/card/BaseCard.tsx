import { styled } from "styled-components";
import Image from "next/image";
import { DataObject } from "@/app/lib/data";

type StyledBaseCardType = {
  $bg?: string;
};

const StyledBaseCard = styled.div<StyledBaseCardType>`
  border-radius: min(6px, 0.5vw);
  background: ${(props) => props.$bg || ""};
  height: 100%;
  position: relative;
  overflow: hidden;
`;

type StyledBaseCardCornerType = {
  position: string;
};

const StyledBaseCardCorner = styled.div<StyledBaseCardCornerType>`
  position: absolute;
  ${(props) => {
    switch (props.position) {
      case "topLeft":
        return "top: -1px; left: -1px;";
      case "topRight":
        return "top: -1px; right: -1px; rotate: 90deg;";
      case "bottomLeft":
        return "bottom: -1px; left: -1px; rotate: -90deg;";
      case "bottomRight":
        return "bottom: -1px; right: -1px; rotate: 180deg";
      default:
        return "";
    }
  }}
`;

const StyledBaseCardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.736vw;

  @media ${(props) => props.theme.media.laptop} {
    padding: 26px;
  }
`;

const StyledBaseCardTitle = styled.h4`
  font-size: 3.264vw;
  font-weight: 500;
  line-height: 0.9;
  margin-bottom: 20px;

  @media ${(props) => props.theme.media.laptop} {
    font-size: 47px;
  }
`;

const StyledBaseCardDescription = styled.p`
  font-size: 1.111vw;
  line-height: 1.2;

  @media ${(props) => props.theme.media.laptop} {
    font-size: 16px;
  }
`;

const BaseCard = (props: { card: DataObject }) => {
  console.log(props.card);

  return (
    <StyledBaseCard $bg={props.card.bgColor}>
      {props.card.croppedPosition && (
        <StyledBaseCardCorner position={props.card.croppedPosition}>
          <Image
            src="/svg/crop.svg"
            priority
            width={41}
            height={41}
            alt="Cropped svg"
          />
        </StyledBaseCardCorner>
      )}
      {props.card.type === "image" && <CardImage card={props.card} />}
      {props.card.type === "default" && <CardSimple card={props.card} />}
    </StyledBaseCard>
  );
};

const CardImage = (props: { card: DataObject }) => {
  return (
    <Image
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      src={`/images/${props.card.image?.src}`}
      alt={`${props.card.image?.alt}`}
    ></Image>
  );
};

const CardSimple = (props: { card: DataObject }) => {
  return (
    <StyledBaseCardWrapper>
      {props.card.title && (
        <StyledBaseCardTitle>{props.card.title}</StyledBaseCardTitle>
      )}
      {props.card.description && (
        <StyledBaseCardDescription>
          {props.card.description}
        </StyledBaseCardDescription>
      )}
    </StyledBaseCardWrapper>
  );
};
export default BaseCard;
