import yup from "./yupGlobal";

const schemaRegister = yup.object().shape({
  username: yup.string().required("Username bắt buộc nhập "),
  email: yup.string().email().required("Email bắt buộc nhập "),
  fullname: yup.string().required("Tên bắt buộc nhập "),
  password: yup
    .string()
    .required("Password bắt buộc nhập")
    .min(6, "Password phải có ít nhất 6 ký tự")
    .max(32, "Password tối đa 32 ký tự")
    .password(),
  confirmPassword: yup
    .string()
    .required("Password bắt buộc nhập")
    .min(6, "Password phải có ít nhất 6 ký tự")
    .max(32, "Password tối đa 32 ký tự")
    .password()
    .oneOf([yup.ref("password")], "Password không trùng"),
});

export default schemaRegister;
