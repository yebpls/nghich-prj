import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useGetDistrict, useGetProvince, useGetWard } from "../../api/address";
import { useForm } from "react-hook-form";

export default function UserAddress() {
  const [provinceCode, setProvinceCode] = useState("79");
  const [districtCode, setDistrictCode] = useState("760");
  const [wardCode, setWardCode] = useState("26740");
  const [selectedProvince, setSelectedProvince] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [selectedWard, setSelectedWard] = useState({});
  const [addressView, setAddressView] = useState(`hello`);
  const { provinces } = useGetProvince();
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
  } = useForm();
  const isAddressApiAvailable = !!(provinces && districts && wards);

  const handleChangeProvince = (value) => {
    setProvinceCode(value);
    setSelectedProvince(provinces.find((item) => item.value === value));
    // setDistrictCode("");
    // setWardCode("");
  };

  const handleChangeDistrict = (value) => {
    setDistrictCode(value);
    setSelectedDistrict(districts.find((item) => item.value === value));
    console.log("districtCodee:", districtCode);
    // setWardCode("");
  };

  const handleChangeWard = (value) => {
    setSelectedWard(wards.find((item) => item.value === value));
    setWardCode(value);
  };

  useEffect(() => {
    if (districts.length > 0) {
      setDistrictCode(districts[0].value);
      setSelectedDistrict(districts[0]);
    }
  }, [districtFetching]);

  useEffect(() => {
    if (wards.length > 0) {
      setWardCode(wards[0].value);
      setSelectedWard(wards[0]);
    }
  }, [wardFetching]);
  const editAddress = (data) => {
    console.log("data", data);
  };

  const setStreetsValue = (newValue) => {
    setValue("streets", newValue);
    if (isAddressApiAvailable) {
      setAddressView(addressView);
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
  useEffect(() => {
    setAddressView(
      `${selectedWard.label}, ${selectedDistrict.label}, ${selectedProvince.label}`
    );
  }, [selectedProvince, selectedDistrict, selectedWard]);
  return (
    <div>
      <form onSubmit={handleSubmit(editAddress)}>
        <div className="md:flex w-full">
          <div className="w-full md:w-1/3 py-2 md:py-0 md:px-2">
            <Select
              value={provinceCode}
              className="w-full"
              onChange={handleChangeProvince}
              options={provinces}
              placeholder="Select a province"
            />
          </div>
          <div className="w-full md:w-1/3 py-2 md:py-0 md:px-2">
            <Select
              value={districtCode}
              className="w-full"
              onChange={handleChangeDistrict}
              options={districts}
              loading={districtLoading}
              placeholder="Select a district"
            />
          </div>
          <div className="w-full md:w-1/3 py-2 md:py-0 md:px-2">
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
          Address: {getValues("streets")}, {addressView}
        </p>
        <button type="submit">Add an address </button>
      </form>
    </div>
  );
}
