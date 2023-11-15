import styled from "styled-components";
import BaseCard from "./BaseCard";

import { gridCellColSize } from "@/app/lib/utils";
import { DataObject } from "@/app/lib/data";

type StyledGridItemProps = {
  $bg?: string;
  $gridcolumn?: string;
  $gridrow?: string;
  $display?: boolean;
  $lg?: string;
  $bigCell?: string;
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

// MENTOR CHECK
const StyledGridItem = styled.div<StyledGridItemProps>`
  min-height: 12.014vw;
  background: ${(props) => props.$bg || ""};
  grid-column: ${(props) => props.$gridcolumn || "span 2 / span 2"};
  grid-row: ${(props) => props.$gridrow || "span 2 / span 2"};

  @media ${(props) => props.theme.media.laptop} {
    height: 175px;
    display: ${(props) => (props.$display ? "none" : "block")};
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
  items: DataObject[];
  size?: "lg";
}) => {
  return (
    <StyledGrid $cols={props.cols} $rows={props.rows}>
      {props.items.length &&
        props.items.map((item: DataObject) => (
          <StyledGridItem
            key={item.id}
            $display={item.visibleLg}
            $gridcolumn={gridCellColSize(item.cell.col)}
            $gridrow={gridCellColSize(item.cell.row)}
            $size={props.size}
            $bigCell={item.type === "centerImg"}
          >
            <BaseCard card={item} size={props.size}></BaseCard>
          </StyledGridItem>
        ))}
    </StyledGrid>
  );
};

export default GridBenefits;
