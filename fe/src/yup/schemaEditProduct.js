import yup from "./yupGlobal";

const schemaEditProduct = yup.object().shape({
  name: yup.string().required("Tên bắt buộc nhập "),
  detail: yup.string().required("Nên có chi tiết"),
  description: yup.string().required("Nên có mô tả"),
  price: yup
    .number()
    .typeError("Giá phải là số")
    .positive("Giá phải là một số dương")
    .min(50000, "Giá phải lớn hơn 50,000 VND")
    .required("Bắt buộc có giá"),
  width: yup
    .number()
    .typeError("Chiều rộng phải là số")
    .positive("Chiều rộng phải là một số dương")
    .integer("Chiều rộng phải là một số nguyên")
    .required("Phải có chiều rộng"),
  length: yup
    .number()
    .typeError("Chiều dài phải là số")
    .positive("Chiều dài phải là một số dương")
    .integer("Chiều dài phải là một số nguyên")
    .required("Phải có chiều dài"),
  quantity: yup
    .number()
    .typeError("Số lượng phải là số")
    .min(0, " Số lượng phải lớn hơn hoặc bằng 0")
    .integer("Số lượng phải là một số nguyên"),
});

export default schemaEditProduct;
