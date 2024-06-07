import React, { useEffect } from "react";
import { toast } from "react-toastify";
import {
  useDeleteAddWishlistItem,
  useGetWishlist,
} from "../../api/User/wishlist";
import { Skeleton, Space } from "antd";
import { useCartStore } from "../../zustand-store/cartState";

export default function UserWishlist() {
  const {
    data: wishlist,
    isLoading,
    error,
    isFetching,
    refetch,
  } = useGetWishlist();
  const { mutate: deleteWishlistItem, isSuccess } = useDeleteAddWishlistItem();
  const addToCart = useCartStore((state) => state.addToCart);

  const windowWidth = window.innerWidth;

  const buttonWidth =
    windowWidth <= 480 ? "50%" : windowWidth <= 768 ? "100%" : "150%";

  console.log("user wishlist:", wishlist, isLoading, error);

  const deleteWishlist = (itemId) => {
    if (itemId) {
      deleteWishlistItem(itemId);
    } else {
      toast.error("Item is not found");
    }
  };
  const handleAddToCart = (item) => {
    if (item) {
      addToCart(item, 1);
      toast.success("Add to cart successfully");
    } else {
      toast.error("Product not found");
    }
  };
  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  return (
    <div>
      <p className="text-xl p-3 font-bold">Wishlist</p>
      <div>
          <div className="w-full text-left">
            <div className="pb-5 border-b border-slate-400 text-md flex">
              <p className="pl-10 font-extralight w-1/2">Product</p>
              <p className="font-extralight w-1/4">Price</p>
              <p className="font-extralight w-1/4">Action</p>
            </div>
            {isFetching ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div className="flex border-b border-slate-400 w-full" key={index}>
                  <div className="w-1/2 flex">
                    <div className="py-9">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 md:size-7 lg:size-8 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div className="flex ml-3">
                      <Space>
                        <Skeleton.Image
                          style={{ width: "120%", height: "200%" }}
                          active
                        />
                        <div className="py-auto">
                          <div>
                            <Skeleton active>
                              <Skeleton.Node />
                            </Skeleton>
                          </div>
                          <br />
                          {/* <Skeleton.Input active size="small" /> */}
                        </div>
                      </Space>
                    </div>
                  </div>
                  <div className="w-1/4 flex justify-between ">
                    <Space>
                      <Skeleton.Button style={{ width: buttonWidth }} active />
                    </Space>
                  </div>
                  <div className="w-1/4 flex justify-between ">
                    <Space>
                      <Skeleton.Button style={{ width: buttonWidth }} active />
                    </Space>
                  </div>
                </div>
              ))
            ) : (
              wishlist?.map((item) => (
                <div
                  className="flex border-b border-slate-400 w-full"
                  key={item._id}
                >
                  <div className="w-1/2 flex">
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

                    <div className="flex">
                      <div className="">
                        <img
                          className="lg:w-24 lg:h-28 w-20 h-24 p-3"
                          src={item.images[0].url}
                          alt=""
                        />
                      </div>
                      <div className="text-xs lg:text-sm py-9">
                        <p className="font-bold max-w-24 lg:max-w-none text-black">
                          {item.name}
                        </p>
                        <p>{item.color[0].name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4 flex justify-between ">
                    <p className="my-auto text-black text-sm lg:text-md">
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </p>
                  </div>
                  <div className="w-1/4 flex justify-between ">
                    <a className="bg-black my-auto text-sm lg:text-md text-white px-3 py-1 rounded-md cursor-pointer" onClick={()=>{handleAddToCart(item)}}>
                      Add to cart
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        
      </div>
    </div>
  );
}
