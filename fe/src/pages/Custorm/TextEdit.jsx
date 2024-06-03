import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TextEditor = ({ onAddText, onUpdateText, onTextChange, editingText }) => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState("left");

  useEffect(() => {
    if (editingText) {
      setText(editingText.text);
      setColor(editingText.color);
      setFontSize(editingText.fontSize);
      setFontFamily(editingText.fontFamily);
      setBold(editingText.bold);
      setItalic(editingText.italic);
      setUnderline(editingText.underline);
      setTextAlign(editingText.textAlign);
    }
  }, [editingText]);

  const handleAddText = () => {
    if (text.trim() === "") return;
    const newTextElement = {
      id: uuidv4(),
      uniqueId: uuidv4(),
      text,
      color,
      fontSize,
      fontFamily,
      bold,
      italic,
      underline,
      textAlign,
      x: 0,
      y: 0,
    };
    if (editingText) {
      onUpdateText({
        ...newTextElement,
        id: editingText.id,
        uniqueId: editingText.uniqueId,
      });
    } else {
      onAddText(newTextElement);
    }
    setText("");
    setColor("black");
    setFontSize(16);
    setFontFamily("Arial");
    setBold(false);
    setItalic(false);
    setUnderline(false);
    setTextAlign("left");
  };

  useEffect(() => {
    if (editingText) {
      onTextChange({
        ...editingText,
        text,
        color,
        fontSize,
        fontFamily,
        bold,
        italic,
        underline,
        textAlign,
      });
    }
  }, [text, color, fontSize, fontFamily, bold, italic, underline, textAlign]);

  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
      <div className="mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button
          onClick={handleAddText}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {editingText ? "Làm sạch" : "Add Text"}
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <label>Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-10 h-10 border-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <label>Font Size:</label>
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
            className="p-2 border border-gray-300 rounded-md w-16"
          />
        </div>
        <div className="flex items-center gap-2">
          <label>Font Family:</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="Arial">Arial</option>
            <option value="Poppins">Poppins</option>
            <option value="Courier New">Courier New</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setBold(!bold)}
            className={`p-2 border border-gray-300 rounded-md ${
              bold ? "bg-blue-500 text-white" : ""
            }`}
          >
            B
          </button>
          <button
            onClick={() => setItalic(!italic)}
            className={`p-2 border border-gray-300 rounded-md ${
              italic ? "bg-blue-500 text-white" : ""
            }`}
          >
            I
          </button>
          <button
            onClick={() => setUnderline(!underline)}
            className={`p-2 border border-gray-300 rounded-md ${
              underline ? "bg-blue-500 text-white" : ""
            }`}
          >
            U
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTextAlign("left")}
            className={`p-2 border border-gray-300 rounded-md ${
              textAlign === "left" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Left
          </button>
          <button
            onClick={() => setTextAlign("center")}
            className={`p-2 border border-gray-300 rounded-md ${
              textAlign === "center" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Center
          </button>
          <button
            onClick={() => setTextAlign("right")}
            className={`p-2 border border-gray-300 rounded-md ${
              textAlign === "right" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
