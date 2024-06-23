import React, { useEffect, useState } from "react";
import { Button, Modal, Select } from "antd";
import { set, useForm } from "react-hook-form";
import {
  useAddProduct,
  useGetCollections,
  useGetMaterials,
} from "../../../api/product";
import { productFieldInput } from "../../../data/product-field";
import schemaAddProduct from "../../../yup/schemaAddProduct";
import { yupResolver } from "@hookform/resolvers/yup";

export default function AddProduct({ isUpdate, setIsUpdate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [material, setMaterial] = useState();
  const [collection, setCollection] = useState();
  const { collections, isLoading: collectionLoading } = useGetCollections();
  const { materials, isLoading: materialLoading } = useGetMaterials();
  const { mutate: addProductMutation, isSuccess } = useAddProduct();

  //MODAL FOR THE FORM
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const form = useForm({
    resolver: yupResolver(schemaAddProduct),
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

  //SET SELECTED MATERIAL
  const handleChangeMaterial = (value) => {
    setMaterial(value);
    console.log("material", value, materials);
  };
  const handleChangeCollection = (value) => {
    setCollection(value);
    console.log("collection", value, collections);
  };
  const addProduct = async (data) => {
    console.log("data", data, material, collection);
    const addData = {
      ...data,
      material_id: material,
      collection_id: collection,
    };
    await addProductMutation(addData);
  };
  useEffect(() => {
    if (isSuccess) {
      setIsUpdate(true);
      setIsModalOpen(false);
      reset();
    }
  }, [isSuccess]);
  useEffect(() => {
    if (materials.length > 0) {
      setMaterial(materials[0].value);
    }
  }, [materialLoading]);

  useEffect(() => {
    if (collections.length > 0) {
      setCollection(collections[0].value);
    }
  }, [collectionLoading]);
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add new product
      </Button>
      <Modal
        title="New Product"
        open={isModalOpen}
        cancelButtonProps={{
          className: "hidden h-0",
          disabled: true,
        }}
        onCancel={handleCancel}
        okButtonProps={{ className: "hidden h-0", disabled: true }}
      >
        <form onSubmit={handleSubmit(addProduct)}>
          <div className=" w-full">
            <div className="mb-2 w-full relative">
              {productFieldInput.map((item) => (
                <div className="mb-2 w-full relative">
                  <p className="text-sm font-bold mb-2">{item.label} *</p>
                  <input
                    className="w-full py-2 px-4 font-extralight border-slate-300 focus:border-slate-400 rounded-md border-[1px]  placeholder-gray_3  focus:placeholder-transparent  "
                    type="text"
                    placeholder={item.label}
                    {...register(item.field, { required: true })}
                  />
                  <div className="text-left text-xs  text-red-500 ml-3 mt-1">
                    {errors[item.field]?.message}
                  </div>
                </div>
              ))}
              <div className="text-left text-xs  text-red-500 ml-3 mt-1 ">
                {errors.phoneNumber?.message}
              </div>
            </div>
            <div className="w-full  py-2  md:px-2">
              <p>Material</p>

              <Select
                value={material}
                className="w-full"
                onChange={handleChangeMaterial}
                options={materials}
                placeholder="Select material"
              />
            </div>
            <div className="w-full  py-2  md:px-2">
              <p>Collection</p>

              <Select
                value={collection}
                className="w-full"
                onChange={handleChangeCollection}
                options={collections}
                placeholder="Select collection"
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
