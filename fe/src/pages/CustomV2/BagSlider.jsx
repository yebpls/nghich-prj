// Sidebag.js
import React, { useRef } from "react";
import { Carousel } from "antd";
import "tailwindcss/tailwind.css";
import bags from "../../data/Bags";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CustomSteps from "../../components/UI/StepCartCustom";

const BagSlider = ({ onBagSelect }) => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };
  return (
    <>
      <div className="max-w-screen-lg mx-auto my-8 relative">
        <Carousel
          autoplay
          dots={false}
          slidesToShow={2}
          className="custom-slider"
          ref={carouselRef}
        >
          {bags.map((bag) =>
            bag && bag.image ? ( // Add this check to ensure bag and bag.image are not null or undefined
              <div key={bag.id} className="relative group p-10 w-[300px]">
                <div className="relative w-full h-[500px] hover:scale-110">
                  <img
                    src={bag.image}
                    alt={`Bag ${bag.id}`}
                    className="w-full h-full object-cover transition-shadow duration-300 group-hover:shadow-lg rounded-lg"
                  />
                  <button
                    onClick={() => onBagSelect(bag.id)}
                    className=" absolute inset-x-0 bottom-56 mx-auto p-1 bg-black text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1/2 w-40 text-lg hover:bg-white hover:text-black uppercase"
                  >
                    I Like This
                  </button>
                </div>
              </div>
            ) : null
          )}
        </Carousel>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
        >
          <LeftOutlined />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
        >
          <RightOutlined />
        </button>
      </div>
    </>
  );
};

export default BagSlider;
