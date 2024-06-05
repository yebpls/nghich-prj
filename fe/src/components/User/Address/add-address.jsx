import React, { useEffect, useState } from "react";
import { Button, Modal, Select } from "antd";
import { useForm } from "react-hook-form";
import {
  useGetWard,
  useGetDistrict,
  useGetProvince,
} from "../../../api/address";
import { useAddUserAddressMutation } from "../../../api/User/address";

export default function AddAddress() {
  const [provinceCode, setProvinceCode] = useState(); //DEFAULT PROVINCE
  const [districtCode, setDistrictCode] = useState(); //DEFAULT DISTRICT
  const [wardCode, setWardCode] = useState(); //DEFAULT WARD
  const [selectedProvince, setSelectedProvince] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [selectedWard, setSelectedWard] = useState({});
  const [addressView, setAddressView] = useState();
  const [street, setStreet] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    mutate: addAddressMutation,
    isSuccess: addSuccess,
    isLoading: addLoading,
  } = useAddUserAddressMutation();

  //MODAL FOR THE FORM
  const showModal = () => {
    setIsModalOpen(true);
  };
  const { provinces, isFetching: provinceFetching } = useGetProvince();

  const {
    districts,
    isLoading: districtLoading,
    isFetching: districtFetching,
  } = useGetDistrict(provinceCode);
  const {
    wards,
    isLoading: wardLoading,
    isFetching: wardFetching,
  } = useGetWard(districtCode);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    getValues,
    reset,
  } = useForm();
  const isAddressApiAvailable = !!(provinces && districts && wards);

  function setValueForAddress() {
    setValue(
      "address",
      `${getValues("streets")}, ${addressView}... $$${
        selectedProvince?.value
      }+${selectedDistrict?.value}+${selectedWard?.value}`
    );
  }
  //SET SELECTED PROVINCE
  const handleChangeProvince = (value) => {
    setProvinceCode(value);
    setSelectedProvince(provinces.find((item) => item.value === value));
  };

  //SET SELECTED DISTRICT
  const handleChangeDistrict = (value) => {
    setDistrictCode(value);
    setSelectedDistrict(districts.find((item) => item.value === value));
    console.log("districtCodee:", districtCode);
    // setWardCode("");
  };

  //SET SELECTED WARD
  const handleChangeWard = (value) => {
    setSelectedWard(wards.find((item) => item.value === value));
    setWardCode(value);
    setValueForAddress();
  };

  //SET STREET VALUE BY ONCHANGE EVENT
  const setStreetsValue = (newValue) => {
    setValue("streets", newValue);
    if (isAddressApiAvailable) {
      setAddressView(addressView);
      setStreet(newValue);
      setValue(
        "address",
        `${newValue}, ${addressView}... $$${selectedProvince.value}+${selectedDistrict.value}+${selectedWard.value}`
      );
    } else {
      setAddressView(getValues("streets"));
      setValue("address", newValue);
    }
    console.log("addressView", newValue, addressView);
  };

  //ADD NEW ADDRESS
  const addAddress = async (data) => {
    console.log("data", data);
    await addAddressMutation(data);
    if (addSuccess) {
      setIsModalOpen(false);
      reset();
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //SET DEFAULT VALUE FOR PROVINCE
  useEffect(() => {
    if (provinces.length > 0) {
      setProvinceCode(provinces[0].value);
      setSelectedProvince(provinces[0]);
      setValueForAddress();
    }
  }, [provinceFetching]);

  //SET DEFAULT VALUE FOR DISTRICT
  useEffect(() => {
    if (districts.length > 0 && districtCode === "") {
      setDistrictCode(districts[0].value);
      setSelectedDistrict(districts[0]);
      setValueForAddress();
    }
  }, [districtFetching]);

  //SET DEFAULT VALUE FOR WARD
  useEffect(() => {
    if (wards.length > 0) {
      setWardCode(wards[0].value);
      setSelectedWard(wards[0]);
      setValueForAddress();
    } else {
      setWardCode("");
      setSelectedWard({ label: "", value: "" });
      setValueForAddress();
    }
  }, [wardFetching]);

  //SET ADDRESS VIEW FOR PROVINCE, DISTRICT AND WARD
  useEffect(() => {
    setAddressView(
      `${selectedWard?.label}, ${selectedDistrict?.label}, ${selectedProvince?.label}`
    );
  }, [selectedProvince, selectedDistrict, selectedWard]);
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add new address
      </Button>
      <Modal
        title="New Address"
        open={isModalOpen}
        cancelButtonProps={{
          className: "hidden h-0",
          disabled: true,
        }}
        onCancel={handleCancel}
        okButtonProps={{ className: "hidden h-0", disabled: true }}
      >
        <form onSubmit={handleSubmit(addAddress)}>
          <div className=" w-full">
            <div className="mb-2 w-full relative">
              <p className="text-sm font-bold mb-2">Phone Number *</p>
              <input
                className="w-full py-2 px-4 font-extralight border-slate-300 focus:border-slate-400 rounded-md border-[1px]  placeholder-gray_3  focus:placeholder-transparent  "
                type="text"
                placeholder="Input your phone number"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^0[35789][0-9]{8}$/, // Starts with 0, second digit is 3,4,5,7,8,9 and followed by exactly 8 digits
                    message:
                      "Your phone number must start with 0 and the second digit must be 3,4,5,7,8,9",
                  },
                })}
              />
              <div className="text-left text-xs  text-red-500 ml-3 mt-1 ">
                {errors.phoneNumber?.message}
              </div>
            </div>
            <div className="w-full  py-2  md:px-2">
              <p>Province</p>

              <Select
                value={provinceCode}
                className="w-full"
                onChange={handleChangeProvince}
                options={provinces}
                placeholder="Select a province"
              />
            </div>
            <div className="w-full  py-2  md:px-2">
              <p>District</p>

              <Select
                value={districtCode}
                className="w-full"
                onChange={handleChangeDistrict}
                options={districts}
                loading={districtLoading}
                placeholder="Select a district"
              />
            </div>
            <div className="w-full  py-2 md:px-2">
              <p>Ward</p>
              <Select
                value={wardCode}
                className="w-full"
                onChange={handleChangeWard}
                options={wards}
                loading={wardLoading || wardFetching}
                placeholder="Select a ward"
              />
            </div>
          </div>
          <div className="mb-2 w-full relative">
            <p className="text-sm font-bold mb-2">Street *</p>
            <input
              className="w-full py-2 px-4 font-extralight border-slate-300 focus:border-slate-400 rounded-md border-[1px]  placeholder-gray_3  focus:placeholder-transparent  "
              type="text"
              placeholder="Input your street"
              {...register("streets", {
                required: "Address is required",

                pattern: {
                  value: isAddressApiAvailable ? /^.{1,34}$/ : /.+/, // If isAddressApiAvailable is true, validate for exactly 10 digits starting with 0, else allow any input
                  message: "Your street must be less than 34 characters",
                },
              })}
              onChange={(e) => setStreetsValue(e.target.value)}
            />
            <div className="text-left text-xs  text-red-500 ml-3 mt-1 ">
              {errors.street?.message}
            </div>
          </div>
          <input
            type="hidden"
            {...register("address")}
            value={`${addressView}`}
          />
          <p className="w-full text-sm font-thin">
            Address: {street}, {addressView}
          </p>
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
              disabled={addLoading}
            >
              Add an address{" "}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
