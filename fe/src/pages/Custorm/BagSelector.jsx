import React, { useState } from "react";
import { Tooltip } from "antd";

const BagSelector = ({ bags, onSelectBag, selectedBag }) => {
  // const [selectedBag, setSelectedBag] = useState(null);
  //   console.log("selectedBag", selectedBag);

  const handleSelectBag = (bag) => {
    // setSelectedBag(bag);
    onSelectBag(bag);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="text-center text-sm w-[350px] mr-10">
            <h3 className=" text-xl font-bold my-2">FORM OF THE BAG</h3>
            <p className="mb-6 uppercase">
              The simplest route is to focus on the strap of your bag. Straps
              are often interchangeable, allowing you to mix and match them
              according to your mood or outfit
            </p>
          </div>
          <div className="grid grid-cols-3 border rounded-lg p-4 gap-4  mr-10 h-fit ">
            {bags.map((bag) => (
              <Tooltip
                title={
                  <div>
                    Dimensions: {bag.dimensions}
                    <br />
                    Material: {bag.material}
                    <br />
                    Price:{" "}
                    <span style={{ color: "#FF78C5", fontWeight: "bold" }}>
                      {bag.price}
                    </span>
                  </div>
                }
                key={bag.id}
                onClick={() => handleSelectBag(bag)}
              >
                <div className="cursor-pointer m-auto">
                  <img
                    src={bag.image}
                    alt={`Bag ${bag.id}`}
                    className="w-20 h-auto border rounded-lg hover:border-4"
                  />
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="w-[600px] h-[700px]">
          {selectedBag ? (
            <>
              <img
                src={selectedBag.image}
                alt="Selected Bag"
                className="w-full h-auto border rounded-lg border-pink-500 p-2"
              />
              <p
                className="uppercase text-right mt-4"
                style={{ color: "#4A2BED" }}
              >
                temporary price:{" "}
                <span className="font-bold" style={{ color: "#4A2BED" }}>
                  {selectedBag.price}
                </span>
              </p>
            </>
          ) : (
            <div className="w-full h-full border rounded-lg border-pink-500 p-2 flex items-center justify-center">
              <p className="text-gray-500">
                Please select a bag to see the details here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BagSelector;
