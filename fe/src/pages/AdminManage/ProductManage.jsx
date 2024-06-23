import React, { useEffect, useState } from "react";
import AddProduct from "../../components/Admin/Product/add-product";
import ProductByOrder from "../../components/Admin/Product/view-product-by-order";
import { useGetAllOrders } from "../../api/orders";
import { useGetProducts } from "../../api/product";

export default function ProductManage() {
  const [isUpdate, setIsUpdate] = useState(false);
  const { data: orders, isFetching } = useGetAllOrders();
  const { data: products, isLoading, refetch } = useGetProducts();

  useEffect(() => {
    console.log(isUpdate, "is update");
    if (isUpdate) {
      refetch();
      setIsUpdate(false);
    }
  }, [isUpdate]);
  return (
    <div>
      <div className="m-10 flex">
        <h1 className="text-2xl font-bold text-black w-3/4">
          Product By Order
        </h1>
        <div className="w-1/12">
          <AddProduct isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
        </div>
      </div>

      <ProductByOrder
        orders={orders}
        products={products}
        isFetching={isFetching}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
    </div>
  );
}
