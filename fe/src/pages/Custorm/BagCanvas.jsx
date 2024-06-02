import React, { useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { Rnd } from "react-rnd";

const BagCanvas = ({
  selectedBag,
  stickers = [],
  onDrop,
  onResize,
  onExport,
  onDeleteSticker, // Add onDeleteSticker prop
}) => {
  const [hoveredSticker, setHoveredSticker] = useState(null);
  const [fullyCoveredStickers, setFullyCoveredStickers] = useState([]);

  console.log("selectedBag", selectedBag);

  const [, drop] = useDrop(() => ({
    accept: "sticker",
    drop: (item, monitor) => {
      const delta = monitor.getSourceClientOffset();
      onDrop(item, delta);
    },
  }));

  const canvasRef = useRef(null);

  const handleExport = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png");
    onExport(dataUrl);
  };

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
    <div className="w-[600px] h-[700px] relative">
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
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${"/images/bagsBody/BagTransparentBg.png"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />

        {stickers.map((sticker, index) => (
          <Rnd
            key={sticker.uniqueId}
            default={{
              x: sticker.x,
              y: sticker.y,
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
      {/* Overlay for hover border */}
      {hoveredSticker !== null || fullyCoveredStickers.length > 0 ? (
        <div
          className="absolute top-0 left-0 w-[600px] h-[700px] pointer-events-none"
          style={{ zIndex: 10 }}
        >
          {stickers.map((sticker) => (
            <div
              key={sticker.uniqueId}
              className={`absolute border border-dashed border-gray-500 ${
                hoveredSticker === sticker.uniqueId ||
                fullyCoveredStickers.includes(sticker.uniqueId)
                  ? "block"
                  : "hidden"
              }`}
              style={{
                top: sticker.y,
                left: sticker.x,
                width: sticker.width,
                height: sticker.height,
              }}
            ></div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default BagCanvas;
