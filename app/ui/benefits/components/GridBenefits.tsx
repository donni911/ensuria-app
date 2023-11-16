import styled from "styled-components";
import BaseCard from "./BaseCard";
import { useInView, motion } from "framer-motion";
import { DataObjectType } from "@/app/lib/data";
import { useRef } from "react";
import { cardUpAnimation } from "@/app/styles/animations";

// MENTOR QUESTION
// Чи нормально типізувати styled? Що робити якщо цих стилів з типами буде багато?
// І можливо краще виносити стилі в окремий файл?

type StyledGridItemProps = {
  $bg?: string;
  $gridcolumn?: string;
  $gridrow?: string;
  $display?: boolean;
  $lg?: string;
  $bigCell?: boolean;
  $size?: string;
};

type StyledGridProps = {
  $cols?: number;
  $rows?: number;
};

const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 8px;

  @media ${(props) => props.theme.media.laptopUp} {
    column-gap: 8px;
    grid-template-columns: repeat(${(props) => props.$cols}, minmax(0, 1fr));
    grid-template-rows: repeat(
      ${(props) => (props.$rows ? props.$rows : "2")},
      minmax(0, 1fr)
    );
  }
`;

// MENTOR QUESTION
const StyledGridItem = styled(motion.div)<StyledGridItemProps>`
  min-height: 12.014vw;
  background: ${(props) => props.$bg || ""};
  grid-column: ${(props) => props.$gridcolumn || "span 2 / span 2"};
  grid-row: ${(props) => props.$gridrow || "span 2 / span 2"};

  @media ${(props) => props.theme.media.laptop} {
    height: 175px;
    display: ${(props) => (props.$display ? "none !important" : "block")};
  }

  ${(props) =>
    props.$size === "lg" &&
    `
    width: 100%;
    min-height: 244px;
`}
  ${(props) =>
    props.$bigCell &&
    `
  overflow: hidden;
  min-height: 500px;

`}
`;

const GridBenefits = (props: {
  cols: number;
  rows?: number;
  items: DataObjectType[];
  size: "lg" | "sm";
}) => {
  const gridCellSize = (num: number | string | undefined) => {
    if (num) return `span ${num} / span ${num}`;
    else return "";
  };

  const bodyAnimation = useRef(null);
  const isInView = useInView(bodyAnimation, { once: true, margin: "-20%" });

  return (
    <StyledGrid ref={bodyAnimation} $cols={props.cols} $rows={props.rows}>
      {props.items.length &&
        props.items.map((item: DataObjectType) => (
          <StyledGridItem
            key={item.id}
            $display={item.visibleLg}
            $gridcolumn={gridCellSize(item.cell.col)}
            $gridrow={gridCellSize(item.cell.row)}
            $size={props.size}
            $bigCell={item.type === "centerImg"}
            custom={item.id}
            variants={cardUpAnimation()}
            initial="initial"
            animate={isInView ? "enter" : ""}
          >
            <BaseCard card={item} size={props.size}></BaseCard>
          </StyledGridItem>
        ))}
    </StyledGrid>
  );
};

export default GridBenefits;
