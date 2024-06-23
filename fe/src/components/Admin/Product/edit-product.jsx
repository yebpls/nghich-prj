import React, { useEffect, useState } from "react";
import { Button, Modal, Select } from "antd";
import { Controller, set, useForm } from "react-hook-form";
import {
  useDeleteProduct,
  useEditProduct,
  useGetCollections,
  useGetMaterials,
} from "../../../api/product";
import { productFieldInput } from "../../../data/product-field";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaEditProduct from "../../../yup/schemaEditProduct";

export default function EditProduct({ updateItem, setIsUpdate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { materials, isLoading: materialLoading } = useGetMaterials();
  const { mutate: editProductMutation, isSuccess: editSuccess } =
    useEditProduct();
  const { mutate: deleteProductMutation, isSuccess: deleteSuccess } =
    useDeleteProduct();
  const productStatus = [
    { label: "Active", value: 0 },
    { label: "Inactive", value: 1 },
  ];
  //MODAL FOR THE FORM
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const productEditFieldInput = productFieldInput.map((item) => ({
    ...item,
    defaultValue:
      updateItem && updateItem[item.field] !== undefined
        ? updateItem[item.field]
        : "",
  }));
  const form = useForm({
    resolver: yupResolver(schemaEditProduct),
    defaultValues: {
      ...updateItem,
      material_id: updateItem?.material_id || materials[0]?.value,
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    getValues,
    reset,
  } = form;

  const renderField = (item) => {
    const commonProps = {
      className:
        "w-full py-2 px-4 font-extralight border-slate-300 focus:border-slate-400 rounded-md border-[1px] placeholder-gray_3 focus:placeholder-transparent",
      placeholder: item.label,
      defaultValue: item.defaultValue,
      ...register(item.field, { required: true }),
    };

    switch (item.tag) {
      case "input":
        return <input type="text" {...commonProps} />;
      case "textarea":
        return <textarea {...commonProps} />;
      // Add more cases if needed
      default:
        return null;
    }
  };
  //SET SELECTED MATERIAL
  const handleChangeMaterial = (value) => {
    setValue("material_id", value);
  };
  const handleChangeStatus = (value) => {
    setValue("status", value);
  };
  const editProduct = async (data) => {
    console.log("data", data);
    const editData = {
      description: data.description,
      detail: data.detail,
      length: data.length,
      material_id: data.material_id,
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      status: data.status,
      width: data.width,
    };
    await editProductMutation({ id: updateItem._id, input: editData });
    // if (editSuccess) {
    //   setIsModalOpen(false);
    // }
  };

  const deleteProduct = async (id) => {
    console.log("delete product", id);
    await deleteProductMutation(id);
    // if (deleteSuccess) {
    //   reset();
    // }
  };
  useEffect(() => {
    if (editSuccess || deleteSuccess) {
      setIsUpdate(true);
      setIsModalOpen(false);
      reset();
    }
  }, [editSuccess, deleteSuccess]);
  console.log("updateItem", updateItem, productEditFieldInput);
  return (
    <div>
      <a
        className="cursor-pointer text-sm text-lime-400 hover:text-lime-500"
        onClick={showModal}
      >
        edit
      </a>
      <Modal
        open={isModalOpen}
        style={{ backgroundColor: "white" }} // Step 2: Inline style for background
        cancelButtonProps={{
          className: "hidden h-0",
          disabled: true,
        }}
        onCancel={handleCancel}
        okButtonProps={{ className: "hidden h-0", disabled: true }}
      >
        <form onSubmit={handleSubmit(editProduct)}>
          <div className=" w-full">
            <h1 className="text-center text-lg mb-3">Chỉnh sửa sản phẩm</h1>
            <div className="mb-2 w-full relative">
              {productEditFieldInput.map((item) => (
                <div className="mb-2 w-full relative">
                  <p className="text-sm font-bold mb-2">{item.label} *</p>
                  {renderField(item)}

                  <div className="text-left text-xs  text-red-500 ml-3 mt-1">
                    {errors[item.field]?.message}
                  </div>
                </div>
              ))}
              <div className="mb-2 w-full relative">
                <p className="text-sm font-bold mb-2">Quantity *</p>
                <input
                  className="w-full py-2 px-4 font-extralight border-slate-300 focus:border-slate-400 rounded-md border-[1px] placeholder-gray_3 focus:placeholder-transparent"
                  type="text"
                  placeholder="Quantity"
                  {...register("quantity", { required: true })}
                />
                <div className="text-left text-xs  text-red-500 ml-3 mt-1">
                  {errors.quantity?.message}
                </div>
              </div>
            </div>
            <div className="w-full  py-2  md:px-2">
              <p>Material</p>
              <Controller
                name="material_id"
                control={form.control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder={"Select material"}
                    // defaultValue={options[0].value}
                    onChange={handleChangeMaterial}
                    options={materials}
                  />
                )}
              />
            </div>
            <div className="w-full  py-2  md:px-2">
              <p>Status</p>
              <Controller
                name="status"
                control={form.control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder={"Select status"}
                    // defaultValue={options[0].value}
                    onChange={handleChangeStatus}
                    options={productStatus}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-3/5">
              <button
                type="button"
                onClick={() => deleteProduct(updateItem._id)}
                className="border-[1px] border-slate-300 hover:bg-red-400 px-3 py-1 rounded-lg text-red-500 hover:text-white mr-2"
              >
                Xóa sản phẩm
              </button>
            </div>
            <div className="w-2/5 flex">
              <button
                type="button"
                onClick={handleCancel}
                className="border-[1px] border-slate-300 hover:bg-red-400 px-3 py-1 rounded-lg text-red-500 hover:text-white mr-2"
              >
                Đóng
              </button>
              <button
                type="submit"
                className="bg-pink-400 hover:bg-white hover:text-pink-400 hover:border-pink-400 hover:border-[1px] text-white  px-2 rounded-lg"
                //   disabled={addLoading}
              >
                Sửa sản phẩm{" "}
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
