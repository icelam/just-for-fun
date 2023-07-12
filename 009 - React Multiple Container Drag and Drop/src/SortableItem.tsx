import type { FC } from 'react';
import type { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import classnames from 'classnames';

export const Item: FC<{
  id: UniqueIdentifier;
  isDragging?: boolean;
  isOverlay?: boolean;
}> = ({ id, isDragging = false, isOverlay = false }) => {
  const customHeight: React.CSSProperties = {
    height:
      // Use id to simulate items with different height
      // In some case dnd-kit gives nulls ID althouth type is set to mandatory
      typeof id === 'string'
        ? isNaN(parseInt(id, 10))
          ? 30
          : parseInt(id, 10) * 30
        : (id ?? 1) * 30,
  };

  return (
    <div
      className={classnames('sortable-item', {
        'sortable-item--is-overlay': isOverlay,
        'sortable-item--is-dragging': isDragging,
      })}
      style={customHeight}
    >
      {id}
    </div>
  );
};

const SortableItem: FC<{ id: UniqueIdentifier }> = ({ id }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: id });

  const style = {
    // Use Translate instead of Transform if overlay is disabled
    // transform: CSS.Translate.toString(transform),
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={id} isDragging={isDragging} />
    </div>
  );
};

export default SortableItem;
