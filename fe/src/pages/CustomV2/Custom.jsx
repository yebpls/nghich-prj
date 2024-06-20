import React, { useState } from "react";
import BagSlider from "./BagSlider";
import Sidebar from "./SideBar";
import BagSelected from "./BagSelector";

const CustomBagV2 = () => {
  const [step, setStep] = useState(1);
  const [selectedBagId, setSelectedBagId] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [selectedImage, setSelectedImage] = useState(null);
  const [stickers, setStickers] = useState([]);

  console.log("selectedColor", selectedColor);
  console.log("selectedImage", selectedImage);

  const handleBagSelect = (bagId) => {
    setSelectedBagId(bagId);
    setStep(2);
  };

  const handleSwapProduct = () => {
    setStep(1);
    setSelectedBagId(null);
  };
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <Sidebar />
      {step === 1 && <BagSlider onBagSelect={handleBagSelect} />}
      {step === 2 && (
        <BagSelected
          selectedBagId={selectedBagId}
          onSwapProduct={handleSwapProduct}
          selectedColor={selectedColor}
          onColorSelect={handleColorSelect}
          selectedImage={selectedImage}
          setStickers={setStickers}
          stickers={stickers}
        />
      )}
    </div>
  );
};

export default CustomBagV2;
