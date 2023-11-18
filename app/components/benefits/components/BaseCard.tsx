import Image from "next/image";

import {
  StyledBaseCard,
  StyledBaseCardCorner,
  StyledBaseCardWrapper,
  StyledBaseCardTitle,
  StyledBaseCardDescription,
  StyledCardRightImage,
  StyledCardCenterImage,
} from "../styles";

import { CardType } from "@/app/lib/cards/types";

const BaseCard = (props: { card: CardType; size: string }) => {
  const cardsConfig: Record<CardType["type"], React.ReactNode> = {
    image: <CardImage card={props.card} />,
    rightImage: <CardRightImage card={props.card} size={props.size} />,
    default: <CardSimple card={props.card} size={props.size} />,
    centerImg: <CardCenterImage card={props.card} size={props.size} />,
  };

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

      {props.card.type === "image" && cardsConfig.image}
      {props.card.type === "rightImage" && cardsConfig.rightImage}
      {props.card.type === "default" && cardsConfig.default}
      {props.card.type === "centerImg" && cardsConfig.centerImg}
    </StyledBaseCard>
  );
};

const CardImage = (props: { card: CardType }) => {
  return (
    <Image
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "100%" }}
      src={`/images/${props.card.image?.src}`}
      alt={`${props.card.image?.alt}`}
    ></Image>
  );
};

const CardSimple = (props: { card: CardType; size: string }) => {
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

const CardRightImage = (props: { card: CardType; size: string }) => {
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

const CardCenterImage = (props: { card: CardType; size: string }) => {
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
