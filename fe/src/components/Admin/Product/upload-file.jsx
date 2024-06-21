import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../../../config/http";

export default function UploadProductImage({ product_id }) {
  const token = getToken();
  const [file, setFile] = useState(null);

  const UPLOAD_ENDPOINT = `https://nghich.id.vn/products/${product_id}/images`;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    if (resp.status === 200) {
      toast.success("Upload success");
    }
    console.log("resp", resp);
  };

  return (
    <div className="w-1/2">
      <form onSubmit={handleSubmit}>
        <input
          className="text-xs"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {file && (
          <div>
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              style={{ width: "100px" }}
            />
            <button type="submit" className="text-sm" disabled={!file}>
              Upload Image
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
