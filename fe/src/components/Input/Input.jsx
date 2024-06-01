import React, { useState } from "react";

export default function Input({
  label,
  type,
  classname,
  error,
  placeholder,
  value,
}) {
  const [inputValue, setInputValue] = useState(value);
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="w-full">
      <label className="text-sm font-bold">{label} *</label> <br />
      <input
        type={type}
        placeholder={placeholder}
        className={`border-slate-300 focus:border-slate-400 border-[1px] w-full rounded-md py-1 px-2 m-1 ${classname}`}
        value={inputValue}
        onChange={(e) => handleOnChange(e)}
      />
      {error && <div className="text-sm p-1 text-red-400">it is error</div>}
    </div>
  );
}
