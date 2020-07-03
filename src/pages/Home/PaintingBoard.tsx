import React from "react";

import { useDrop } from "react-dnd";
import { DndItemTypes } from "../../consts";
import { Grid } from "../../components/Grid";

const PaintingBoard: React.FC = (props) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: DndItemTypes.CARD,
  });
  return (
    <Grid rowCount={3} columnCount={3} ref={drop}>
      {props.children}
    </Grid>
  );
};

export default PaintingBoard;
