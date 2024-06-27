import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Select, Form } from "antd";
import { set, useForm } from "react-hook-form";
import {
  useGetWard,
  useGetDistrict,
  useGetProvince,
} from "../../../api/address";
import { useUpdateAddressMutation } from "../../../api/User/address";
import ConfirmButton from "../../UI/ModalConfirm";
import { EditOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  .ant-modal-title {
    color: black !important; /* Change the color to your desired color */
  }

  .ant-modal-close {
    color: #00000059 !important;
  }
`;

export default function EditAddress({ setIsUpdateAddress, item }) {
  const [provinceCode, setProvinceCode] = useState(item.addressCode.province); //DEFAULT PROVINCE
  const [districtCode, setDistrictCode] = useState(item.addressCode.district); //DEFAULT DISTRICT
  const [wardCode, setWardCode] = useState(item.addressCode?.ward); //DEFAULT WARD
  const updateAddressMutation = useUpdateAddressMutation();
  //phuong
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [editForm] = Form.useForm();

  const {
    provinces,
    isFetching: provinceFetching,
    isLoading: provinceLoading,
  } = useGetProvince();

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

  const [selectedProvince, setSelectedProvince] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [selectedWard, setSelectedWard] = useState({});
  const [isFormTouched, setIsFormTouched] = useState(false);

  const isAddressApiAvailable = !!(provinces && districts && wards);

  //SET SELECTED PROVINCE
  const handleChangeProvince = (value) => {
    setProvinceCode(value);
    setSelectedProvince(provinces.find((item) => item.value === value));
    // Reset district and ward selections
    // setDistrictCode(null);
    // setSelectedDistrict({});
    // setWardCode(null);
    // setSelectedWard({});
    setIsFormTouched(true);

    // Optionally, trigger fetching of districts for the new province here
  };
  //SET SELECTED DISTRICT
  const handleChangeDistrict = (value) => {
    setDistrictCode(value);
    setSelectedDistrict(districts.find((item) => item.value === value));
    console.log("districtCode:", districtCode);
    setIsFormTouched(true);

    // setWardCode("");
  };

  //SET SELECTED WARD
  const handleChangeWard = (value) => {
    setSelectedWard(wards?.find((item) => item.value === value));
    setWardCode(value);
    setIsFormTouched(true);
  };

  //UPDATE ADDRESS

  const handleUpdateAddress = (values) => {
    console.log(
      "addressDataa",
      selectedDistrict,
      selectedProvince,
      selectedWard
    );

    const editingAddress = `${values.streetView}${
      selectedWard?.value === "" ? "" : `, ${selectedWard.label}`
    }, ${selectedDistrict?.label}, ${selectedProvince?.label} ... $$${
      selectedProvince?.value
    }+${selectedDistrict?.value}+${selectedWard?.value}`;

    console.log("addressData", editingAddress, values.phoneNumber, item);

    // Uncomment and use the mutation as needed
    if (editingAddress) {
      updateAddressMutation.mutate({
        address: editingAddress,
        phoneNumber: values.phoneNumber,
        address_id: item._id,
      });
      setIsEditModalVisible(false);
    }
  };
  const handleEditClick = (address) => {
    // setEditingAddress(address);
    editForm.setFieldsValue(address);
    setIsEditModalVisible(true);
  };
  //SET DEFAULT VALUE FOR PROVINCE
  useEffect(() => {
    if (provinces.length > 0) {
      if (provinceCode) {
        setSelectedProvince(
          provinces.find((item) => item.value === provinceCode)
        );
      } else {
        setProvinceCode(provinces[0]?.value);
        setSelectedProvince(provinces[0]);
      }
    }
    console.log("provinceCode", selectedProvince);
  }, [provinceFetching, provinceCode]);
  //SET DEFAULT VALUE FOR DISTRICT
  useEffect(() => {
    if (districts.length > 0) {
      setDistrictCode(districts[0]?.value);
      setSelectedDistrict(districts[0]);
    }
  }, [districtFetching, selectedProvince]);

  //SET DEFAULT VALUE FOR WARD
  useEffect(() => {
    if (wards.length > 0) {
      setWardCode(wards[0]?.value);
      setSelectedWard(wards[0]);
      console.log("wardCode", selectedWard);
    } else {
      setWardCode(wards[0]?.value);
      setSelectedWard({ label: "", value: "" });
    }
  }, [wardFetching, selectedDistrict]);

  console.log("item", item);
  console.log("fieldChange", isFormTouched);
  return (
    <div>
      <EditOutlined
        className="cursor-pointer text-blue-200 hover:text-blue-600 text-lg"
        onClick={() => handleEditClick(item)}
      />
      <StyledModal
        title="Edit Address"
        open={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        footer={null}
      >
        <Form
          form={editForm}
          layout="vertical"
          initialValues={{
            streetView: item.addressView.streets,
            province: item.addressView.province,
            district: item.addressView.district,
            ward: item.addressView.ward,
          }}
          onFinish={handleUpdateAddress}
          onFieldsChange={() => {
            if (!isFormTouched) setIsFormTouched(editForm.isFieldsTouched());
          }}
        >
          <Form.Item
            name="streetView"
            label="Street"
            rules={[
              { required: true, message: "Please enter the Street" },
              () => ({
                validator(_, value) {
                  if (/[*,.?><;:'"\[\]{}=+\)(*&^%$#@!~`]/.test(value)) {
                    return Promise.reject(
                      new Error(
                        "Street cannot contain *,./?><;:'\"[]{}=+)(*&^%$#@!~`"
                      )
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="province" label="Province">
            <Select
              defaultValue={provinceCode}
              value={provinceCode}
              className="w-full"
              onChange={handleChangeProvince}
              options={provinces}
              placeholder="Select a province"
            />
            <p hidden>{provinceCode}</p>
          </Form.Item>
          <Form.Item name="district" label="District">
            <Select
              defaultValue={districtCode}
              value={districtCode}
              className="w-full"
              onChange={handleChangeDistrict}
              options={districts}
              placeholder="Select a district"
            />
            <p hidden>{districtCode}</p>
          </Form.Item>
          <Form.Item
            name="ward"
            label="Ward"
            // rules={[{ required: true, message: "Please enter the ward" }]}
          >
            <Select
              defaultValue={wardCode}
              value={wardCode}
              className="w-full"
              onChange={handleChangeWard}
              options={wards}
              placeholder="Select a ward"
            />
            <p hidden>{wardCode}</p>
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(
                      new Error("Please enter the phone number")
                    );
                  }
                  if (value.length !== 10) {
                    return Promise.reject(
                      new Error("Phone number must be 10 digits")
                    );
                  }
                  if (!/^[0-9]+$/.test(value)) {
                    return Promise.reject(
                      new Error("Each digit must be a number")
                    );
                  }
                  if (!/^[0-9][35789]/.test(value)) {
                    return Promise.reject(
                      new Error("The second digit must be 3, 5, 7, 8, or 9")
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={updateAddressMutation.isLoading}
              disabled={!isFormTouched}
            >
              Update Address
            </Button>
          </Form.Item>
        </Form>
      </StyledModal>
    </div>
  );
}
