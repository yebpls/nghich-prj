import yup from "./yupGlobal";

const schemaEditUser = yup.object().shape({
  username: yup.string().required("Username bắt buộc nhập "),
  name: yup.string().required("Tên bắt buộc nhập "),
  date_of_birth: yup.date().required("Ngày sinh bắt buộc nhập "),
});

export default schemaEditUser;
