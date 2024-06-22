// src/components/contentTabs/InputTextTab.js
import React, { useState } from "react";
import { Button, Input, Select, Slider, Radio } from "antd";
import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const InputTextTab = () => {
  const [text, setText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddText = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <TextStylingTab text={text} />;
  }

  return (
    <div className="m-4 ml-10">
      <h2 className="font-bold text-lg">ENTER YOUR TEXT BELOW</h2>
      <p className="text-gray-600 text-[12px]">
        Text, Quotation,...Which You Like
      </p>
      <div className=" mt-10 w-[90%]">
        <TextArea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here"
          className="mb-4 w-full"
        />
        <Button
          type="primary"
          onClick={handleAddText}
          className="w-[100px] bg-black "
        >
          ADD TEXT
        </Button>
      </div>
      <div className="text-gray-400 mt-4 text-[9px] mt-16 w-4/5 m-4 ">
        <p>
          A Tote Bag Is A Large, Typically Unlined Bag With Two Handles That Are
          Attached To The Sides Of The Bag. Tote Bags Are Typically Made From
          Durable Materials Such As Canvas, Cotton, Or Denim, And They Are Often
          Used For Carrying Groceries, Books, Or Other Items. They Are Also
          Popular As A Fashion Accessory.
        </p>
      </div>
    </div>
  );
};

const TextStylingTab = ({ text }) => {
  const [font, setFont] = useState("Arial");
  const [color, setColor] = useState("#000000");
  const [stroke, setStroke] = useState("#000000");
  const [shadow, setShadow] = useState("#000000");
  const [size, setSize] = useState(16);
  const [stretch, setStretch] = useState(100);
  const [spacing, setSpacing] = useState(1);
  const [lineHeight, setLineHeight] = useState(1.2);
  const [rotate, setRotate] = useState(0);
  const [align, setAlign] = useState("left");

  const fonts = [
    "Be Vietnam",
    "Open Sans",
    "Roboto",
    "Source Sans Pro",
    "Playfair Display",
    "Arial",
    "Times New Roman",
    "Garamond",
    "Bookman",
    "Noto Serif",
    "Sedgwick Ave",
    "Amatic SC",
    "Patrick Hand",
    "Mali",
    "Bangers",
    "Lobster",
    "Dancing Script",
    "Pacifico",
    "Bungee Shade",
    "Saira Stencil One",
    "Srisakdi",
    "Charmonman",
  ];

  return (
    <div className="m-4 ">
      <div className="bg-white p-4">
        <p
          style={{
            fontFamily: font,
            color: color,
            WebkitTextStroke: `1px ${stroke}`,
            textShadow: `2px 2px ${shadow}`,
            fontSize: `${size}px`,
            letterSpacing: `${spacing}px`,
            lineHeight: lineHeight,
            transform: `rotate(${rotate}deg)`,
            textAlign: align,
          }}
        >
          {text}
        </p>
      </div>
      <div className="mt-8 overflow-y-auto h-[450px]">
        <div className="flex items-center mb-4">
          <label className="w-[27%]">Font</label>
          <Select value={font} onChange={setFont} className="w-2/3">
            {fonts.map((font, index) => (
              <Option key={index} value={font}>
                {font}
              </Option>
            ))}
          </Select>
        </div>
        <div className="flex items-center mb-4">
          <label className="w-[27%]">Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-2/3"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-[27%]">Stroke</label>
          <input
            type="color"
            value={stroke}
            onChange={(e) => setStroke(e.target.value)}
            className="w-2/3"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-[27%]">Shadow</label>
          <input
            type="color"
            value={shadow}
            onChange={(e) => setShadow(e.target.value)}
            className="w-2/3"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-[27%]">Size</label>
          <Slider
            min={10}
            max={72}
            value={size}
            onChange={setSize}
            className="w-2/3"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-[27%]">Stretch</label>
          <Slider
            min={50}
            max={200}
            value={stretch}
            onChange={setStretch}
            className="w-2/3"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-[27%]">Spacing</label>
          <Slider
            min={0}
            max={10}
            value={spacing}
            onChange={setSpacing}
            className="w-2/3"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-[27%]">Line Height</label>
          <Slider
            min={1}
            max={3}
            step={0.1}
            value={lineHeight}
            onChange={setLineHeight}
            className="w-2/3"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-[27%]">Rotate</label>
          <Slider
            min={0}
            max={360}
            value={rotate}
            onChange={setRotate}
            className="w-2/3"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-[27%]">Align</label>
          <Radio.Group
            onChange={(e) => setAlign(e.target.value)}
            value={align}
            className="w-2/3"
          >
            <Radio.Button value="left">
              <AlignLeftOutlined />
            </Radio.Button>
            <Radio.Button value="center">
              <AlignCenterOutlined />
            </Radio.Button>
            <Radio.Button value="right">
              <AlignRightOutlined />
            </Radio.Button>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default InputTextTab;
