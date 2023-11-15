import { styled } from "styled-components";
import Image from "next/image";
import { DataObject } from "@/app/lib/data";

type StyledBaseCardType = {
  $bg?: string;
  $size?: string;
};

const StyledBaseCard = styled.div<StyledBaseCardType>`
  border-radius: min(6px, 0.5vw);
  background: ${(props) => props.$bg || ""};
  height: 100%;
  position: relative;
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

type StyledBaseCardWrapperType = {
  $size: string;
};

const StyledBaseCardWrapper = styled.div<StyledBaseCardWrapperType>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 1.736vw;

  @media ${(props) => props.theme.media.laptop} {
    padding: 26px;
  }

  ${(props) => props.$size && `padding: 2.083vw 2.778vw; `}
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

const BaseCard = (props: { card: DataObject; size: string }) => {
  console.log(props.size);

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
      {props.card.type === "rightImage" && (
        <CardRightImage card={props.card} size={props.size} />
      )}
      {props.card.type === "default" && (
        <CardSimple card={props.card} size={props.size} />
      )}
      {props.card.type === "centerImg" && (
        <CardCenterImage card={props.card} size={props.size} />
      )}
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

const CardSimple = (props: { card: DataObject; size: string }) => {
  return (
    <StyledBaseCardWrapper $size={props.size}>
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

const StyledCardRightImage = styled.div`
  width: 14.111vw;
  height: 14.569vw;
  position: absolute;
  bottom: 0;
  right: -6px;
  z-index: 2;

  @media ${(props) => props.theme.media.laptop} {
    width: 195px;
    height: 210px;
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

const CardRightImage = (props: { card: DataObject; size: string }) => {
  return (
    <StyledBaseCardWrapper $size={props.size}>
      <div className="h-full w-6/12 flex flex-col justify-between">
        {props.card.title && (
          <StyledBaseCardTitle>{props.card.title}</StyledBaseCardTitle>
        )}
        {props.card.description && (
          <StyledBaseCardDescription>
            {props.card.description}
          </StyledBaseCardDescription>
        )}
      </div>

      {props.card.image && (
        <StyledCardRightImage>
          <Image
            priority
            width={0}
            height={0}
            sizes="100vw"
            src={`/images/${props.card.image.src}`}
            alt={props.card.image.alt}
          />
        </StyledCardRightImage>
      )}
    </StyledBaseCardWrapper>
  );
};

const StyledCardCenterImage = styled.div`
  height: 16.25vw;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  width: 100%;
  transform: translateY(-50%);
  @media ${(props) => props.theme.media.laptop} {
    height: 204px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 100%;
    height: 100%;
    object-fit: contain;
    @media ${(props) => props.theme.media.laptop} {
      object-fit: fill;
    }
  }
`;

const CardCenterImage = (props: { card: DataObject; size: string }) => {
  return (
    <StyledBaseCardWrapper $size={props.size}>
      <div className="h-full flex flex-col justify-between">
        {props.card.title && (
          <StyledBaseCardTitle>{props.card.title}</StyledBaseCardTitle>
        )}
        {props.card.image && (
          <StyledCardCenterImage>
            <Image
              priority
              width={0}
              height={0}
              sizes="100vw"
              src={`/images/${props.card.image.src}`}
              alt={props.card.image.alt}
            />
          </StyledCardCenterImage>
        )}
        {props.card.description && (
          <StyledBaseCardDescription>
            {props.card.description}
          </StyledBaseCardDescription>
        )}
      </div>
    </StyledBaseCardWrapper>
  );
};

export default BaseCard;
