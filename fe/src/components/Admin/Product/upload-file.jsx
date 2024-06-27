import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../../../config/http";
import { useQueryClient } from "react-query";

export default function UploadProductImage({ product_id }) {
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries("products");
    }
    console.log("resp", resp);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <input
          className="text-xs text-red-300"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {file && (
          <div>
            <img src={URL.createObjectURL(file)} alt="preview" />
            <button
              type="submit"
              className="text-sm bg-pink-300 p-1 m-1 rounded-sm"
              disabled={!file}
            >
              Upload Image
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
