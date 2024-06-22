// BagSelected.js
import React from "react";
import bags from "../../data/Bags";
import { Button, Tabs } from "antd";
import {
  CameraOutlined,
  FontSizeOutlined,
  SkinOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import DigitalPrinting from "./contentTabs/DigitalPrinting";
import ClipArtTab from "./contentTabs/ClipArtTab";
import InputTextTab from "./contentTabs/InputTextTab";
import DecorationTab from "./contentTabs/DecorationTab";
import BagImage from "./BagImage";

const { TabPane } = Tabs;

const BagSelected = ({
  selectedBagId,
  onSwapProduct,
  selectedColor,
  onColorSelect,
  onImageSelect,
  selectedImage,
  stickers,
  setStickers,
}) => {
  const selectedBag = bags.find((bag) => bag.id === selectedBagId);
  const handleImageSelect = (image) => {
    setStickers((prevStickers) => [
      ...prevStickers,
      {
        uniqueId: Date.now(), // Unique ID for the sticker
        image: image,
        x: 50,
        y: 50,
        width: 100,
        height: 100,
      },
    ]);
  };

  const handleRemoveSelectedImage = (uniqueId) => {
    setStickers((prevStickers) =>
      prevStickers.filter((sticker) => sticker.uniqueId !== uniqueId)
    );
  };

  const handleDrop = (item, delta) => {
    setStickers((prev) =>
      prev.map((sticker) =>
        sticker.uniqueId === item.uniqueId
          ? { ...sticker, x: delta.x, y: delta.y }
          : sticker
      )
    );
  };

  const handleResize = (item, size) => {
    setStickers((prev) =>
      prev.map((sticker) =>
        sticker.uniqueId === item.uniqueId ? { ...sticker, ...size } : sticker
      )
    );
  };

  const handleDeleteSticker = (uniqueId) => {
    setStickers((prev) =>
      prev.filter((sticker) => sticker.uniqueId !== uniqueId)
    );
  };
  const tabItems = [
    {
      key: "1",
      label: <ToolOutlined className="custom-tab-icon" />,
      children: <DigitalPrinting onColorSelect={onColorSelect} />,
    },
    {
      key: "2",
      label: <CameraOutlined className="custom-tab-icon" />,
      children: <ClipArtTab onImageSelect={handleImageSelect} />,
    },
    {
      key: "3",
      label: <FontSizeOutlined className="custom-tab-icon" />,
      children: <InputTextTab />,
    },
    {
      key: "4",
      label: <SkinOutlined className="custom-tab-icon" />,
      children: <DecorationTab />,
    },
  ];

  return (
    <div className="flex h-screen items-center text-white">
      <div className="w-1/2 flex justify-end mr-10">
        <BagImage
          imageUrl="/images/bagsBody/BagTransparentBg.png"
          color={selectedColor}
          stickers={stickers}
          onDrop={handleDrop}
          onResize={handleResize}
          onDeleteSticker={handleDeleteSticker}
        />
      </div>
      <div className="w-1/2 p-4 ">
        <Tabs
          defaultActiveKey="1"
          tabPosition="top"
          centered
          className="h-[650px] w-[450px] bg-gray-100"
          items={tabItems}
        />
        <Button
          onClick={onSwapProduct}
          className="mt-4 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 w-[200px]"
        >
          Swap Product
        </Button>
      </div>
    </div>
  );
};

export default BagSelected;
