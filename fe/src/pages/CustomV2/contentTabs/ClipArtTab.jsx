// src/components/contentTabs/ClipArtTab.js
import React, { useState } from "react";
import { Modal, Input, Row, Col, Image, Button } from "antd";
import items from "../../../data/Items";
import { RightOutlined } from "@ant-design/icons";

const ClipArtTab = ({ onImageSelect }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleImageSelect = (image) => {
    onImageSelect(image);
    setIsModalVisible(false);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="m-4 ml-10">
        <h2 className="font-bold text-lg">ADD AN IMAGE TO YOUR DESIGN</h2>
        <p className="text-gray-600 text-[12px]">
          Browse Our Clip Art Catalog Or Upload Your Own Image.
        </p>
      </div>
      <div className="mt-10 mx-6">
        <div className=" flex justify-between items-center border-b py-4 ">
          <div>
            <Button
              type="link"
              onClick={showModal}
              className="text-lg font-semibold"
            >
              CLIP ART
            </Button>
            <p className="ml-4">Browse Thousands Of Images</p>
          </div>
          <p className="mr-6" onClick={showModal}>
            <RightOutlined />
          </p>
        </div>
        <div className="flex justify-between items-center border-b py-4">
          <div>
            <Button
              type="link"
              onClick={showModal}
              className="text-lg font-semibold"
            >
              UPLOAD IMAGES
            </Button>
            <p className="ml-4">Upload Your Own Pictures Or Logo</p>
          </div>
          <p className="mr-6" onClick={showModal}>
            <RightOutlined />
          </p>
        </div>
        <div className=" py-4 flex justify-between items-center">
          <div>
            <Button
              type="link"
              onClick={showModal}
              className="text-lg font-semibold"
            >
              MY IMAGES
            </Button>
            <p className="ml-4">Choose From Your Saved Images</p>
          </div>
          <p className="mr-6" onClick={showModal}>
            <RightOutlined />
          </p>
        </div>
      </div>
      <div className="text-gray-400 mt-4 text-[9px] mt-16 w-4/5 m-4 ml-10">
        <p>
          A Tote Bag Is A Large, Typically Unlined Bag With Two Handles That Are
          Attached To The Sides Of The Bag. Tote Bags Are Typically Made From
          Durable Materials Such As Canvas, Cotton, Or Denim, And They Are Often
          Used For Carrying Groceries, Books, Or Other Items. They Are Also
          Popular As A Fashion Accessory.
        </p>
      </div>

      <Modal
        title="Clip Art"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <Input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
          {filteredItems.map((item) => (
            <Col p={4} key={item.id}>
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="cursor-pointer"
                />
                <Button
                  className="absolute bottom-0 left-0"
                  onClick={() => handleImageSelect(item.image)}
                >
                  Select
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Modal>
    </div>
  );
};

export default ClipArtTab;
