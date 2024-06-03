import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

const StickerSelector = ({ stickers, setSelectedStickers }) => {
  const [activeTab, setActiveTab] = useState("predefined");
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleSelectSticker = (sticker) => {
    setSelectedStickers((prevStickers) => [
      ...prevStickers,
      { ...sticker, uniqueId: uuidv4(), x: 0, y: 0, width: 100, height: 100 },
    ]);
  };

  const handleUpload = (event) => {
    const files = event.target.files;
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      newImages.push({
        id: uuidv4(),
        image: URL.createObjectURL(files[i]),
        name: files[i].name,
      });
    }
    setUploadedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const renderStickerList = (stickersList) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {stickersList.map((sticker) => (
          <div key={sticker.id} onClick={() => handleSelectSticker(sticker)}>
            <DraggableSticker sticker={sticker} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mr-2 ${
            activeTab === "predefined"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("predefined")}
        >
          Predefined Stickers
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "uploaded" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("uploaded")}
        >
          Uploaded Images
        </button>
      </div>

      {activeTab === "predefined" && renderStickerList(stickers)}

      {activeTab === "uploaded" && (
        <div>
          {renderStickerList(uploadedImages)}
          <div className="mt-4">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleUpload}
            />
          </div>
        </div>
      )}
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
