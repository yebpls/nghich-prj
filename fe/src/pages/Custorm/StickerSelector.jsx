import React from "react";
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

const StickerSelector = ({ stickers, setSelectedStickers }) => {
  const handleSelectSticker = (sticker) => {
    setSelectedStickers((prevStickers) => [
      ...prevStickers,
      { ...sticker, uniqueId: uuidv4(), x: 0, y: 0, width: 100, height: 100 },
    ]);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {stickers.map((sticker) => (
        <div key={sticker.id} onClick={() => handleSelectSticker(sticker)}>
          <DraggableSticker sticker={sticker} />
        </div>
      ))}
    </div>
  );
};

const DraggableSticker = ({ sticker }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "sticker",
    item: { id: sticker.id, image: sticker.image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div className=" ">
      <div
        ref={drag}
        className="cursor-pointer"
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <img
          src={sticker.image}
          alt={`Sticker ${sticker.id}`}
          className="w-20 h-auto border rounded-lg hover:border-4"
        />
      </div>
    </div>
  );
};

export default StickerSelector;
