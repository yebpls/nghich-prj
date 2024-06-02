import React from "react";

const ItemSelector = ({ items, onSelectItem }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer"
          onClick={() => onSelectItem(item)}
        >
          <img
            src={item.image}
            alt={`Item ${item.id}`}
            className="w-20 h-auto border rounded-lg hover:border-4"
          />
        </div>
      ))}
    </div>
  );
};

export default ItemSelector;
