import React, { useState } from "react";
import BagSelector from "./BagSelector";
import bags from "../../data/Bags";
import items from "../../data/Items";
import ItemSelector from "./ItemSelector";
import UploadImage from "./UploadImage";
import BagCanvas from "./BagCanvas";
import DraggableItem from "./DraggableItem";
import StickerSelector from "./StickerSelector";
import { v4 as uuidv4 } from "uuid";

const CustomBag = () => {
  // const [currentStep, setCurrentStep] = useState(1);
  // const [selectedBag, setSelectedBag] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBag, setSelectedBag] = useState(bags[0]);
  const [selectedStickers, setSelectedStickers] = useState([]);

  console.log("selectedBag", selectedBag);

  console.log("selectedStickers", selectedStickers);

  const handleExport = (dataUrl) => {
    // Send the dataUrl to your backend or handle it as needed
    console.log("Exported Image URL:", dataUrl);
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };
  const handleDrop = (sticker, delta) => {
    setSelectedStickers((prevStickers) =>
      prevStickers.map((item) =>
        item.uniqueId === sticker.uniqueId
          ? { ...item, x: delta.x, y: delta.y }
          : item
      )
    );
  };

  const handleResize = (sticker, newSize) => {
    setSelectedStickers((prevStickers) =>
      prevStickers.map((item) =>
        item.uniqueId === sticker.uniqueId ? { ...item, ...newSize } : item
      )
    );
  };

  const handleComplete = () => {
    // Ensure the bag is selected before proceeding
    if (currentStep === 1 && !selectedBag) {
      alert("Please select a bag first!");
      return;
    }
    handleStepChange(currentStep + 1);
  };

  const handleDeleteSticker = (uniqueId) => {
    setSelectedStickers((prevStickers) =>
      prevStickers.filter((sticker) => sticker.uniqueId !== uniqueId)
    );
  };

  return (
    <div className="p-4">
      {currentStep === 1 && (
        <BagSelector bags={bags} onSelectBag={setSelectedBag} />
      )}
      {currentStep === 2 && (
        <div className="flex w-[60%] justify-center mx-auto ">
          <div className="w-[45%] overflow-y-auto h-[600px] m-4">
            <StickerSelector
              stickers={items}
              setSelectedStickers={setSelectedStickers}
            />{" "}
            {/* Use items for demo */}
          </div>
          <div className="w-[55%] m-4">
            <BagCanvas
              selectedBag={selectedBag}
              stickers={selectedStickers}
              onDrop={(sticker, delta) => handleDrop(sticker, delta)}
              onResize={(sticker, newSize) => handleResize(sticker, newSize)}
              onDeleteSticker={handleDeleteSticker}
            />
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <BagCanvas
          selectedBag={selectedBag}
          stickers={selectedStickers}
          onDrop={handleDrop}
          onResize={handleResize}
          onDeleteSticker={handleDeleteSticker}
        />
      )}

      {/* Các nút điều khiển step */}
      <div className="flex justify-center space-x-4 my-4">
        <button
          onClick={() => handleStepChange(1)}
          className={`w-8 h-8 rounded-full ${
            currentStep === 1 ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          1
        </button>
        <button
          onClick={() => handleStepChange(2)}
          className={`w-8 h-8 rounded-full ${
            currentStep === 2 ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          2
        </button>
        <button
          onClick={() => handleStepChange(3)}
          className={`w-8 h-8 rounded-full ${
            currentStep === 3 ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          3
        </button>
      </div>

      {/* Nút DRAFT và COMPLETE */}
      <div className="flex justify-center space-x-4">
        <button className="bg-green-400 px-4 py-2 rounded text-white">
          DRAFT
        </button>
        <button
          className="bg-pink-300 px-4 py-2 rounded text-white"
          onClick={handleComplete}
        >
          COMPLETE
        </button>
      </div>
    </div>
    // tạo Nút 3 step
  );
};

export default CustomBag;
