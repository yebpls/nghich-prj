import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Resizable, ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { Rnd } from "react-rnd";
import styled from "styled-components";
import { useDrop } from "react-dnd";

const MaskContainer = styled.div`
  width: 450px;
  height: 500px;
  position: relative;
  overflow: hidden;
  background-color: #e2e8f0;
  background-image: url("/images/bagsBody/BagTransparentBg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  mask-image: url("/images/bagsBody/BagTransparentBg.png");
  -webkit-mask-image: url("/images/bagsBody/BagTransparentBg.png");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
`;
const BagImage = ({
  color,
  imageUrl,
  stickers = [],
  onDrop,
  onResize,
  onDeleteSticker,
}) => {
  const [hoveredSticker, setHoveredSticker] = useState(null);
  const [fullyCoveredStickers, setFullyCoveredStickers] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: "sticker",
    drop: (item, monitor) => {
      const delta = monitor.getSourceClientOffset();
      onDrop(item, delta);
    },
  }));

  useEffect(() => {
    const newFullyCoveredStickers = stickers.filter((sticker) => {
      const maskRect = {
        left: 0,
        top: 0,
        right: 600,
        bottom: 521,
      };

      const stickerRect = {
        left: sticker.x,
        top: sticker.y,
        right: sticker.x + sticker.width,
        bottom: sticker.y + sticker.height,
      };

      return (
        stickerRect.left >= maskRect.left &&
        stickerRect.top >= maskRect.top &&
        stickerRect.right <= maskRect.right &&
        stickerRect.bottom <= maskRect.bottom
      );
    });

    setFullyCoveredStickers(
      newFullyCoveredStickers.map((sticker) => sticker.uniqueId)
    );
  }, [stickers]);

  return (
    <div className="border rounded-lg h-[521px] border-pink-500">
      <div className="w-[600px] h-auto relative">
        <div
          ref={drop}
          className="relative w-[600px] h-[521px] border rounded-lg border-pink-500 p-2 overflow-hidden "
          style={{
            backgroundColor: "#e2e8f0",
            backgroundImage: `url(${"/images/bagsBody/BagTransparentBg.png"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            maskImage: "url('/images/bagsBody/BagTransparentBg.png')",
            WebkitMaskImage: "url('/images/bagsBody/BagTransparentBg.png')",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <img
            src={imageUrl}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Bag"
            style={{
              filter: `opacity(0.7) drop-shadow(0 0 0 ${color}) drop-shadow(0 0 0 ${color}) brightness(0.8) contrast(1.2)`,
            }}
          />
          {stickers.map((sticker, index) => (
            <Rnd
              key={sticker.uniqueId}
              default={{
                x: sticker.x + 150,
                y: sticker.y + 190,
                width: sticker.width,
                height: sticker.height,
              }}
              onDragStop={(e, d) => onDrop(sticker, { x: d.x, y: d.y })}
              onResizeStop={(e, direction, ref, delta, position) => {
                onResize(sticker, {
                  width: ref.style.width,
                  height: ref.style.height,
                  ...position,
                });
              }}
              bounds="parent"
            >
              <div
                className={`relative w-full h-full group ${
                  hoveredSticker === sticker.uniqueId ||
                  fullyCoveredStickers.includes(sticker.uniqueId)
                    ? "border border-dashed border-gray-500"
                    : ""
                }`}
                onMouseEnter={() => setHoveredSticker(sticker.uniqueId)}
                onMouseLeave={() => setHoveredSticker(null)}
              >
                <img
                  src={sticker.image}
                  alt="Sticker"
                  className="w-full h-full"
                />

                <button
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  onClick={() => onDeleteSticker(sticker.uniqueId)}
                  style={{ zIndex: 10 }}
                >
                  X
                </button>
              </div>
            </Rnd>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BagImage;
