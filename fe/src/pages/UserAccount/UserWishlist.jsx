import React from "react";
import { toast } from "react-toastify";
import { useGetWishlist } from "../../api/User/user";

export default function UserWishlist() {
  const { data: wishlist, isLoading, error } = useGetWishlist();
  console.log("user wishlist:", wishlist, isLoading, error);
  const deleteWishlist = (itemId) => {
    toast.success("Delete item: " + itemId);
  };
  return (
    <div>
      Wish list
      <div>
        <div className="w-full text-left">
          <div className="pb-5 border-b border-slate-400 text-md flex">
            <p className="pl-10 font-extralight w-1/2">Product</p>
            <p className="font-extralight w-1/4">Price</p>

            <p className="font-extralight w-1/4">Action</p>
          </div>
          {wishlist?.map((item) => (
            <div className="flex border-b border-slate-400 w-full">
              <div className=" w-1/2 flex">
                <div className="py-9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 md:size-7 lg:size-8 hover:text-black cursor-pointer"
                    onClick={() => {
                      deleteWishlist(item._id);
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <div className=" flex">
                  <div className="">
                    <img
                      className="lg:w-24 lg:h-28 w-20 h-24 p-3"
                      src={item.images[0].url}
                      alt=""
                    />
                  </div>
                  <div className="text-xs lg:text-sm py-9">
                    {/* <p className="text-sm">{item.name}</p> */}
                    <p className="font-bold max-w-24 lg:max-w-none text-black">
                      {item.name}
                    </p>
                    <p>{item.color[0].name}</p>
                  </div>
                </div>
              </div>
              <div className="w-1/4 flex justify-between ">
                <p className="my-auto text-black">
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </p>
              </div>
              <div className="w-1/4 flex justify-between ">
                <a className="bg-black my-auto text-white px-3 py-1 rounded-md cursor-pointer">
                  Add to cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
