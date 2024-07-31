import yup from "./yupGlobal";

const schemaAddProduct = yup.object().shape({
  name: yup.string().required("Name is required"),
  detail: yup.string().required("Details are required"),
  description: yup.string().required("Description is required"),
  cost_price: yup
    .number()
    .typeError("Price must be a number")
    .required("Cost price is required")
    .test(
      "is-less-than-price",
      "Must be less than sell price",
      function (value) {
        return value < this.parent.price;
      }
    ),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .test(
      "is-greater-than-cost-price",
      "Must be greater than cost price",
      function (value) {
        return value > this.parent.cost_price;
      }
    ),
  width: yup
    .number()
    .typeError("Width must be a number")
    .required("Width is required"),
  length: yup
    .number()
    .typeError("Length must be a number")
    .required("Length is required"),
});

export default schemaAddProduct;
