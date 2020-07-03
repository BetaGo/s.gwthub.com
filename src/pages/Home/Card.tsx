import React from 'react';

import { useDrop, useDrag } from 'react-dnd';
import { GridItem } from '../../components/Grid';
import { DndItemTypes } from '../../consts';

const Card = () => {
  const ref = React.useRef();
  const [{}, drag] = useDrag({
    item: { type: DndItemTypes.CARD },
  });
  const [{}, drop] = useDrop({
    accept: DndItemTypes.CARD,
  });
  drag(drop(ref))

  return (
    <GridItem ref={ref}>
      
    </GridItem>
  );
};

export default Card;