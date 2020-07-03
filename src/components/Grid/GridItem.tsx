import React from "react";
import styled from "styled-components";

export interface IGridItemProps {
  columnStart: number;
  columnEnd: number;
  rowStart: number;
  rowEnd: number;
}

const GridItem = styled.div<IGridItemProps>`
  grid-column-start: ${(props) => props.columnStart};
  grid-column-end: span ${(props) => props.columnEnd};
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: span ${(props) => props.rowEnd};
`;

export default GridItem;
