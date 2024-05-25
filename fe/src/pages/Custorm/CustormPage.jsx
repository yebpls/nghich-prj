import React, { useState } from "react";
import BagSelector from "./BagSelector";
import bags from "../../data/Bags";

const CustomBag = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBag, setSelectedBag] = useState(null);

  console.log("selectedBag", selectedBag);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleComplete = () => {
    // Lưu thông tin túi đã chọn và chuyển sang step tiếp theo
    if (currentStep === 1) {
      // Đảm bảo thông tin túi đã chọn được lưu trữ
      if (!selectedBag) {
        alert("Please select a bag first!");
        return;
      }
      // Chuyển sang step tiếp theo
      handleStepChange(currentStep + 1);
    }
    // Thêm xử lý cho các step khác nếu cần
  };

  return (
    <div className="p-4">
      {currentStep === 1 && (
        <BagSelector bags={bags} onSelectBag={setSelectedBag} />
      )}
      {/* {currentStep === 2 && <StepTwo selectedBag={selectedBag} />} */}
      {/* {currentStep === 3 && <StepThree selectedBag={selectedBag} />} */}

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
