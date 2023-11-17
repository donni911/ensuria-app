import styled from "styled-components";
import BaseCard from "./BaseCard";
import { useInView, motion } from "framer-motion";
import { DataObjectType } from "@/app/lib/data";
import { useRef } from "react";
import { cardUpAnimation } from "@/app/styles/animations";
import { StyledGrid, StyledGridItem } from "../styles";

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
