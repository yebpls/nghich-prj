import React, { useEffect, useState } from "react";
import CheckBox from "../Input/CheckBox";
import { toast } from "react-toastify";
import { useCartStore } from "../../zustand-store/cartState";

export default function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const { deleteFromCart, updateCart, toggleCheck } = useCartStore(
    (state) => state
  );
  const [isChecked, setIsChecked] = useState(item.check); // default value

  const deleteItem = (itemId) => {
    if (itemId) {
      deleteFromCart(itemId);
    } else {
      toast.error("Item not found");
    }
  };
  const handleCheckChange = (isChecked) => {
    // console.log("Checkbox is " + (isChecked ? "checked" : "not checked"));
    setIsChecked(isChecked);
    toggleCheck(item.item?._id, isChecked);
  };

  useEffect(() => {
    if (quantity > 0) {
      updateCart(item.item?._id, quantity);
    }
  }, [quantity]);
  return (
    <div>
      {item && (
        <div className="flex text-xs lg:text-base">
          <div className="py-5 w-1/2">
            <div className="product-col flex items-center">
              <CheckBox
                defaultChecked={isChecked}
                onCheckChange={handleCheckChange}
              />
              <img
                className="w-12 md:w-16 lg:w-20 ml-3"
                src={item.item?.images[0].url}
                alt=""
                srcset=""
              />
              <div className="product-info ml-3">
                <h6 className="product-name lg:text-sm text-xs font-bold">
                  {item.item?.name}
                </h6>
                <div className="product-color py-1   text-gray_2">
                  Color: {item.item?.color[0]?.name}
                </div>
                <button
                  className="text-gray_2 text-sm font-bold"
                  onClick={() => deleteItem(item.item?._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/6 my-auto pr-2 lg:pr-11 pl-0">
            <div className="text-center my-auto text-md bg-[#CFF53E] rounded-md border-[1px] border-slate-500 flex">
              <div
                className="w-1/4 font-light  ml-2 hover:bg-slate-300 rounded-lg cursor-pointer"
                onClick={() =>
                  quantity === 1
                    ? deleteItem(item.item?._id)
                    : setQuantity(quantity - 1)
                }
              >
                -
              </div>
              <div className="w-1/2 font-light">{quantity}</div>
              <div
                className="w-1/4 font-light hover:bg-slate-300 rounded-lg cursor-pointer mr-2"
                onClick={() =>
                  setQuantity(quantity === 20 ? quantity : quantity + 1)
                }
              >
                +
              </div>
            </div>
          </div>
          <div className="w-1/6 my-auto">
            {item.item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </div>
          <div className="font-bold w-1/6 my-auto">
            {[item.item?.price * quantity]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </div>
        </div>
      )}
    </div>
  );
}
