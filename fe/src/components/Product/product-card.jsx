import { Radio, Rate, Skeleton } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div>
      <div className=" text-xs text-slate-600">
        <Link to={item.quantity > 0 ? `/productDetail/${item._id}` : null}>
          <div className="product-list-item p-3 lg:p-6">
            <div className="product-img">
              {/* <Skeleton.Image active="true" width="30px" /> */}

              <img
                className="h-full"
                src={item.images[0]?.url}
                // src="/image c.png"
                alt=""
              />
              <img className="h-full" src={item.images[0]} alt="" />
            </div>
            <div className="product-info font-bold">
              <div className="product-fig flex justify-between py-2">
                <Rate
                  className="text-xs lg:text-sm text-black"
                  disabled
                  allowHalf
                  defaultValue={4.5}
                />
                <div className="product-sold text-[10px] lg:text-xs">
                  {item.quantity} <span className="text-gray_2">SOLD</span>
                </div>
              </div>
              <p className="sm:text-[10px] md:text-md lg:text-md">
                <span className="sm:text-[9px]  md:text-md lg:text-lg">
                  [SPRING COLLECTION]
                </span>
                <br />
                {item.name}
              </p>
              <div className="product-price font-medium text-lg">
                {item.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
