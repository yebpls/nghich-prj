import yup from "./yupGlobal";

const schemeRegister = yup.object().shape({
  email: yup.string().email().required("Email bắt buộc nhập "),

  password: yup
    .string()
    .required("Password bắt buộc nhập")
    .min(6, "Password phải có ít nhất 6 ký tự")
    .max(32, "Password tối đa 32 ký tự")
    .password(),
});

module.exports = schemeLogin;
