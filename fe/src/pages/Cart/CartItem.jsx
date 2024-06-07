import React, { useState } from "react";
import CheckBox from "../../components/Input/CheckBox";
import { toast } from "react-toastify";
import { useCartStore } from "../../zustand-store/cartState";

export default function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);

  const deleteItem = (itemId) => {
    if(itemId){
    deleteFromCart(itemId);
    }else{
      toast.error("Item not found")
    }
  };

  return (
    <tr>
      <td className="py-5">
        <div className="product-col flex items-center">
          <CheckBox />
          <img
            className="w-12 md:w-24 lg:w-40 ml-7"
            src={item.item.images[0].url}
            alt=""
            srcset=""
          />
          <div className="product-info ml-[30px]">
            <h6 className="product-name text-[20px] font-bold">
              {item.item.name}
            </h6>
            <div className="product-color text-gray_2" >Color: unknown</div>
            <button className="text-gray_2 text-[20px] font-bold" 
            onClick={()=>deleteItem(item.item._id)} >
              Remove
            </button>
          </div>
        </div>
      </td>
      <td>
        <div className="text-center my-auto bg-[#CFF53E] rounded-lg flex">
          <div
            className="w-1/4 font-light text-xl ml-2 hover:bg-slate-300 rounded-lg cursor-pointer"
            onClick={() => setQuantity(quantity <= 0 ? 0 : quantity - 1)}
          >
            -
          </div>
          <div className="w-1/2 font-light text-xl">{quantity}</div>
          <div
            className="w-1/4 font-light text-xl hover:bg-slate-300 rounded-lg cursor-pointer mr-2"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </div>
        </div>
      </td>
      <td>1</td>
      <td className="font-bold">1</td>
    </tr>
  );
}
