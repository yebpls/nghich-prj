import { Steps } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BreadcrumbWithBackButton from "../../../components/UI/Breadcrum";
import CustomSteps from "../../../components/UI/StepCartCustom";

const { Step } = Steps;

const OrderComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);
  const [total, setTotal] = useState(location.state?.total || 0);
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className=" mb-8">
        <BreadcrumbWithBackButton currentTab={"Order Custom Bag Completed"} />
      </div>
      <h1 className="text-2xl font-semibold mb-10 text-center">
        My Cart Order Custom Bag
      </h1>
      <CustomSteps current={3} />

      <div className="flex item-center mx-auto justify-center">
        <div className="w-1/3">
          <div class="flex items-center justify-center text-center">
            <div>
              <div class="flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-green-600 w-28 h-28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <h1 class="text-4xl font-bold">Thank You !</h1>
                <p>Your order have been received!</p>
                <div className="flex">
                  {cartItems.map((item) => (
                    <img
                      src={item?.image}
                      alt={item?.name}
                      style={{
                        width: "50%",
                        height: "auto",
                        maskImage:
                          "url('/images/bagsBody/BagTransparentBg.png')",
                        WebkitMaskImage:
                          "url('/images/bagsBody/BagTransparentBg.png')",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                      }}
                    />
                  ))}
                </div>
                <div className="flex">
                  <a class="inline-flex items-center px-4 py-2 text-white bg-[#4848FF] border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 h-3 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>

                    <span
                      className="text-sm font-medium cursor-pointer"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </span>
                  </a>
                  <div className="text-sm font-medium cursor-pointer flex items-center bg-[#cff53e] border border-black-600 rounded rounded-full hover:bg-[#FF78C5] hover:text-white py-1 ml-4 px-4">
                    <img src="/images/iconCustom.png " className="w-8 mr-2" />
                    <span
                      onClick={() => navigate("/my-custom")}
                      className="text-sm fonyt-semibold"
                    >
                      My List Customize
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
