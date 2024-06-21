import React, { useEffect, useState } from "react";
import { Button, Modal, Select } from "antd";
import { Controller, set, useForm } from "react-hook-form";
import {
  useEditProduct,
  useGetCollections,
  useGetMaterials,
} from "../../../api/product";
import { productFieldInput } from "../../../data/product-field";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaEditUser from "../../../yup/schemaEditUser";
import schemaAddProduct from "../../../yup/schemaAddProduct";
import schemaEditProduct from "../../../yup/schemaEditProduct";

export default function EditProduct({ updateItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { collections, isLoading: collectionLoading } = useGetCollections();
  const { materials, isLoading: materialLoading } = useGetMaterials();
  const { mutate: editProductMutation, isSuccess } = useEditProduct();
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
    if (isSuccess) {
      setIsModalOpen(false);
      reset();
    }
  };

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
        title="Edit Product"
        open={isModalOpen}
        cancelButtonProps={{
          className: "hidden h-0",
          disabled: true,
        }}
        onCancel={handleCancel}
        okButtonProps={{ className: "hidden h-0", disabled: true }}
      >
        <form onSubmit={handleSubmit(editProduct)}>
          <div className=" w-full">
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
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="border-[1px] border-slate-300 hover:bg-red-400 px-3 py-1 rounded-lg text-red-500 hover:text-white mr-2"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-pink-400 hover:bg-white hover:text-pink-400 hover:border-pink-400 hover:border-[1px] text-white  px-2 rounded-lg"
              //   disabled={addLoading}
            >
              Add new product{" "}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
