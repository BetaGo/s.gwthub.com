import React from "react";
import styled from "styled-components";

export interface IGridProps {
  rowCount: number;
  columnCount: number;
}

const Grid = styled.div<IGridProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    "c0 " +
    new Array(props.columnCount)
      .fill(0)
      .map((v, index) => (1 / props.columnCount) * 100 + "% c" + (index + 1))};
  grid-template-rows: ${(props) =>
    "r0 " +
    new Array(props.rowCount)
      .fill(0)
      .map((v, index) => (1 / props.rowCount) * 100 + "% r" + (index + 1))};
`;

// const Grid = React.forwardRef<
//   HTMLDivElement,
//   IGridProps & React.HTMLProps<HTMLDivElement>
// >((props, ref) => {
//   const { rowCount = 1, columnCount = 1 } = props;
//   return (
//     <GridRoot rowCount={rowCount} columnCount={columnCount} ref={ref}>
//       {props.children}
//     </GridRoot>
//   );
// });

export default Grid;
