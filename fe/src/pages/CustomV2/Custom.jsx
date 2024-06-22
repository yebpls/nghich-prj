import React, { useEffect, useState } from "react";
import BagSlider from "./BagSlider";
import Sidebar from "./SideBar";
import BagSelected from "./BagSelector";
import { useGetUserProfile } from "../../api/User/user";
import { API_ENDPOINTS } from "../../api/api-endpoint";
import { useMutation } from "react-query";
import { Button, notification } from "antd";
import http from "../../config/http";
import html2canvas from "html2canvas";
import Compressor from "compressorjs";
import axios from "axios";

const CustomBagV2 = () => {
  const [step, setStep] = useState(1);
  const [selectedBagId, setSelectedBagId] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [selectedImage, setSelectedImage] = useState(null);
  const [stickers, setStickers] = useState([]);
  const [textItems, setTextItems] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [compressedBlob, setCompressedBlob] = useState(null);

  const [currentText, setCurrentText] = useState("");
  const [textStyle, setTextStyle] = useState({
    fontFamily: "Arial",
    color: "#000000",
    stroke: "#000000",
    shadow: "#000000",
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 1.2,
    rotate: 0,
    textAlign: "left",
  });
  const [isTextSubmitted, setIsTextSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const IMGUR_CLIENT_ID = "884e8514127eed3";

  const { data: userData, isFetching, error, refetch } = useGetUserProfile();

  const handlePostCustomBag = () => {
    if (userData && compressedBlob) {
      const file = new File([compressedBlob], "custom-bag.jpg", {
        type: "image/jpeg",
      });
      const formData = new FormData();
      formData.append("user_id", userData._id);
      formData.append("image", file);

      customBagMutation(formData);
    } else {
      console.error("User data or image Blob is missing");
    }
  };

  useEffect(() => {
    if (compressedBlob) {
      handlePostCustomBag();
    }
  }, [compressedBlob]);

  // Custom Bag API call
  const postCustomBag = async (input) => {
    try {
      const response = await http.post(API_ENDPOINTS.POST_CUSTOM, input, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 60000, // Increase timeout to 60 seconds
      });
      return response.data.data;
    } catch (error) {
      console.error("Failed to post custom bag:", error);
      throw error;
    }
  };

  const { mutate: customBagMutation } = useMutation(postCustomBag, {
    onSuccess: (data) => {
      console.log("Custom bag posted successfully:", data);
      notification.success({
        message: "Success",
        description: "Custom bag posted successfully!",
      });
    },
    onError: (error) => {
      console.error("Failed to post custom bag:", error);
      notification.error({
        message: "Error",
        description: "Failed to post custom bag. Please try again later.",
      });
    },
  });

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

  const handleTextSubmit = (text) => {
    setTextItems((prevTextItems) => [
      ...prevTextItems,
      {
        uniqueId: Date.now(),
        text: text,
        ...textStyle,
        x: 50,
        y: 50,
        width: 150,
        height: 50,
      },
    ]);
    setIsTextSubmitted(true);
    setCurrentText(text);
  };

  const handleTextClick = (textItem) => {
    setCurrentText(textItem.text);
    setTextStyle({
      fontFamily: textItem.fontFamily,
      color: textItem.color,
      stroke: textItem.stroke,
      shadow: textItem.shadow,
      fontSize: textItem.fontSize,
      letterSpacing: textItem.letterSpacing,
      lineHeight: textItem.lineHeight,
      rotate: textItem.rotate,
      textAlign: textItem.textAlign,
    });
    setIsTextSubmitted(true);
    setActiveTab("3");
  };

  const handleExportImage = async () => {
    const originalCanvas = await html2canvas(
      document.querySelector("#bagCanvas")
    );

    // Create a new canvas with reduced size
    const resizedCanvas = document.createElement("canvas");
    const ctx = resizedCanvas.getContext("2d");

    // Set the desired width and height (e.g., 800x800)
    const MAX_WIDTH = 800;
    const MAX_HEIGHT = 800;

    let width = originalCanvas.width;
    let height = originalCanvas.height;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }

    resizedCanvas.width = width;
    resizedCanvas.height = height;
    ctx.drawImage(originalCanvas, 0, 0, width, height);

    // Convert the resized canvas to a Blob and compress it
    resizedCanvas.toBlob(
      (blob) => {
        new Compressor(blob, {
          quality: 0.6,
          success(compressedBlob) {
            setCompressedBlob(compressedBlob);
          },
          error(err) {
            console.error(err.message);
          },
        });
      },
      "image/jpeg",
      0.6
    );
  };

  return (
    <div>
      <Sidebar />
      {step === 1 && <BagSlider onBagSelect={handleBagSelect} />}
      {step === 2 && (
        <div>
          <BagSelected
            selectedBagId={selectedBagId}
            onSwapProduct={handleSwapProduct}
            selectedColor={selectedColor}
            onColorSelect={handleColorSelect}
            selectedImage={selectedImage}
            setStickers={setStickers}
            stickers={stickers}
            textItems={textItems}
            setTextItems={setTextItems}
            handleTextClick={handleTextClick}
            currentText={currentText}
            setCurrentText={setCurrentText}
            textStyle={textStyle}
            setTextStyle={setTextStyle}
            onTextSubmit={handleTextSubmit}
            setImageURL={setImageURL}
            imageURL={imageURL}
            handleExportImage={handleExportImage}
            setCompressedBlob={setCompressedBlob}
          />
        </div>
      )}
    </div>
  );
};

export default CustomBagV2;
