import yup from "./yupGlobal";

const schemaAddProduct = yup.object().shape({
  name: yup.string().required("Tên bắt buộc nhập "),
  detail: yup.string().required("Nên có chi tiết"),
  description: yup.string().required("Nên có mô tả"),
  price: yup.number().typeError("Giá phải là số").required("Bắt buộc có giá"),
  width: yup
    .number()
    .typeError("Chiều rộng phải là số")
    .required("Phải có chiều rộng"),
  length: yup
    .number()
    .typeError("Chiều dài phải là số")
    .required("Phải có chiều dài"),
});

export default schemaAddProduct;
