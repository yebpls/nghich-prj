import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { id: item.id, image: item.image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="cursor-pointer"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <img
        src={item.image}
        alt={`Item ${item.id}`}
        className="w-20 h-auto border rounded-lg hover:border-4"
      />
    </div>
  );
};

export default DraggableItem;
