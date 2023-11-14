import styled from "styled-components";
import BaseCard from "../../card/BaseCard";
import { DataObject, data } from "@/app/lib/data";
import { gridCellColSize } from "@/app/lib/utils";

type StyledGridItemProps = {
  $bg?: string;
  $gridcolumn?: string;
  $gridrow?: string;
  $display?: boolean;
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 8px;

  @media ${(props) => props.theme.media.laptopUp} {
    column-gap: 8px;
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
`;

const StyledGridItem = styled.div<StyledGridItemProps>`
  height: 12.014vw;
  background: ${(props) => props.$bg || ""};
  grid-column: ${(props) => props.$gridcolumn || "span 2 / span 2"};
  grid-row: ${(props) => props.$gridrow || "span 2 / span 2"};

  @media ${(props) => props.theme.media.laptop} {
    height: 173px;
    display: ${(props) => (props.$display ? "none" : "block")};
  }
`;

const GridBenefits = () => {
  return (
    <StyledGrid>
      {data.length &&
        data.map((card: DataObject) => (
          <StyledGridItem
            key={card.id}
            $display={card.visibleLg}
            $gridrow={gridCellColSize(card.cell.row)}
            $gridcolumn={gridCellColSize(card.cell.col)}
          >
            <BaseCard card={card}></BaseCard>
          </StyledGridItem>
        ))}
    </StyledGrid>
  );
};

export default GridBenefits;
