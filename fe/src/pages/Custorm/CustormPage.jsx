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
import TextEditor from "./TextEdit";

const CustomBag = () => {
  // const [currentStep, setCurrentStep] = useState(1);
  // const [selectedBag, setSelectedBag] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBag, setSelectedBag] = useState(null);
  const [selectedStickers, setSelectedStickers] = useState([]);
  const [textElements, setTextElements] = useState([]);
  const [editingText, setEditingText] = useState(null);

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

  const handleDeleteText = (id) => {
    setTextElements((prevTextElements) =>
      prevTextElements.filter((textElement) => textElement.id !== id)
    );
    setEditingText(null);
  };

  const handleDraft = () => {
    if (currentStep === 2) {
      setSelectedStickers([]); // Clear all stickers but keep the selected bag
    }
  };

  const handleAddText = (textElement) => {
    setTextElements((prevTextElements) => [...prevTextElements, textElement]);
    setEditingText(textElement);
  };

  const handleUpdateText = (updatedTextElement) => {
    setTextElements((prevTextElements) =>
      prevTextElements.map((textElement) =>
        textElement.id === updatedTextElement.id
          ? updatedTextElement
          : textElement
      )
    );
    setEditingText(null);
  };

  const handleTextDrag = (id, delta) => {
    setTextElements((prevTextElements) =>
      prevTextElements.map((textElement) =>
        textElement.id === id
          ? { ...textElement, x: delta.x, y: delta.y }
          : textElement
      )
    );
  };

  const handleTextResize = (id, newSize) => {
    setTextElements((prevTextElements) =>
      prevTextElements.map((textElement) =>
        textElement.id === id ? { ...textElement, ...newSize } : textElement
      )
    );
  };

  const handleEditText = (textElement) => {
    setEditingText(textElement);
  };

  const handleTextChange = (updatedTextElement) => {
    setTextElements((prevTextElements) =>
      prevTextElements.map((textElement) =>
        textElement.uniqueId === updatedTextElement.uniqueId
          ? updatedTextElement
          : textElement
      )
    );
  };

  return (
    <div className="p-4">
      {currentStep === 1 && (
        <BagSelector
          bags={bags}
          selectedBag={selectedBag}
          onSelectBag={setSelectedBag}
        />
      )}
      {currentStep === 2 && (
        <div className="flex w-[60%] justify-center mx-auto ">
          <div className="w-[40%]">
            <div className="text-center text-sm w-[350px] mr-10">
              <h3 className=" text-xl font-bold my-2">ARTWORKS</h3>
              <p className="mb-6 uppercase">
                WHAT COOL ARTWORKS WILL BE YOURS? CONSIDER CAREFULLY! THEY SHOW
                YOUR ‘NGHỊCH’ CHARACTER.
              </p>
            </div>
            <div className=" h-[500px] m-4 overflow-y-auto">
              <div>
                <StickerSelector
                  stickers={items}
                  setSelectedStickers={setSelectedStickers}
                />{" "}
              </div>
            </div>
            {/* Use items for demo */}
          </div>
          <div className="w-[60%] m-5">
            <div>
              <BagCanvas
                selectedBag={selectedBag}
                stickers={selectedStickers}
                textElements={textElements}
                onDrop={handleDrop}
                onResize={handleResize}
                onDeleteSticker={handleDeleteSticker}
                onDeleteText={handleDeleteText}
                onTextDrag={handleTextDrag}
                onTextResize={handleTextResize}
                onEditText={handleEditText}
              />
            </div>
            <p
              className="uppercase text-right mt-4"
              style={{ color: "#4A2BED" }}
            >
              temporary price:{" "}
              <span className="font-bold" style={{ color: "#4A2BED" }}>
                {selectedBag.price}
              </span>
            </p>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="flex w-[60%] justify-center mx-auto">
          <div className="w-[40%]">
            <TextEditor
              onAddText={handleAddText}
              onUpdateText={handleUpdateText}
              editingText={editingText}
              onTextChange={handleTextChange}
              onDeleteText={handleDeleteText}
            />
          </div>
          <div className="w-[60%] m-5">
            <BagCanvas
              selectedBag={selectedBag}
              stickers={selectedStickers}
              textElements={textElements}
              onDrop={handleDrop}
              onResize={handleResize}
              onDeleteSticker={handleDeleteSticker}
              onDeleteText={handleDeleteText}
              onTextDrag={handleTextDrag}
              onTextResize={handleTextResize}
              onEditText={setEditingText}
              editingText={editingText}
            />
          </div>
        </div>
      )}

      {/* Các nút điều khiển step */}
      <div className="flex justify-center space-x-4 mt-5 mb-4">
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
        <button
          className="bg-green-400 px-4 py-2 rounded text-white"
          onClick={handleDraft}
        >
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
