import React, { useState } from "react";
import AddProduct from "../../components/Admin/Product/add-product";
import ProductByOrder from "../../components/Admin/Product/view-product-by-order";

export default function ProductManage() {
  return (
    <div>
      <div className="m-10 flex">
        <h1 className="text-2xl font-bold text-black w-3/4">
          Product By Order
        </h1>
        <div className="w-1/12">
          <AddProduct />
        </div>
      </div>
      <ProductByOrder />
    </div>
  );
}
