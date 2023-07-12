import type { FC } from 'react';
import { useDroppable } from '@dnd-kit/core';
import type { UniqueIdentifier } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import SortableItem from './SortableItem';

const Container: FC<{ items: UniqueIdentifier[]; id: string }> = ({
  items,
  id,
}) => {
  // This is needed for empty column to be droppable
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div className="droppable-container">
      <h3 className="droppable-container__title">{id}</h3>
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
        id={id} // Optional, if not provided, dnd-kit will auto assign
      >
        <div className="droppable-container__sortable-wrapper" ref={setNodeRef}>
          {items.map((id: UniqueIdentifier) => (
            <SortableItem key={id} id={id} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export default Container;
